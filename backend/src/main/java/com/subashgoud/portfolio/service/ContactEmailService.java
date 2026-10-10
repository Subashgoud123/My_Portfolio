package com.subashgoud.portfolio.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.subashgoud.portfolio.model.ContactMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.List;
import java.util.Map;

@Service
public class ContactEmailService {

    private static final URI RESEND_EMAILS_URI = URI.create("https://api.resend.com/emails");

    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;
    private final String apiKey;
    private final String from;
    private final String recipient;

    public ContactEmailService(ObjectMapper objectMapper,
                               @Value("${app.resend-api-key}") String apiKey,
                               @Value("${app.resend-from}") String from,
                               @Value("${app.contact-recipient}") String recipient) {
        this.httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(5))
                .build();
        this.objectMapper = objectMapper;
        this.apiKey = apiKey;
        this.from = from;
        this.recipient = recipient;
    }

    public void sendNotification(ContactMessage contact) {
        if (apiKey.isBlank()) {
            throw new ResponseStatusException(
                    HttpStatus.SERVICE_UNAVAILABLE,
                    "Email delivery is not configured. Set RESEND_API_KEY on the backend service.");
        }

        Map<String, Object> email = Map.of(
                "from", from,
                "to", List.of(recipient),
                "reply_to", contact.getEmail(),
                "subject", "Portfolio contact: " + contact.getSubject(),
                "text", String.format(
                        "Name: %s%nEmail: %s%nSubject: %s%n%nMessage:%n%s",
                        contact.getName(),
                        contact.getEmail(),
                        contact.getSubject(),
                        contact.getMessage())
        );

        String requestBody;
        try {
            requestBody = objectMapper.writeValueAsString(email);
        } catch (JsonProcessingException exception) {
            throw new IllegalStateException("Could not prepare the contact email.", exception);
        }

        HttpRequest request = HttpRequest.newBuilder(RESEND_EMAILS_URI)
                .timeout(Duration.ofSeconds(15))
                .header("Authorization", "Bearer " + apiKey)
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                .build();

        HttpResponse<String> response;
        try {
            response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (InterruptedException exception) {
            Thread.currentThread().interrupt();
            throw new ResponseStatusException(
                    HttpStatus.BAD_GATEWAY, "Email provider request was interrupted.", exception);
        } catch (IOException exception) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_GATEWAY, "Could not connect to the email provider.", exception);
        }

        if (response.statusCode() < 200 || response.statusCode() >= 300) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_GATEWAY,
                    "Email provider rejected the message (HTTP " + response.statusCode() + ").");
        }
    }
}