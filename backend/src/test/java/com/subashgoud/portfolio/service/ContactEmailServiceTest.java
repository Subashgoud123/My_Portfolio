package com.subashgoud.portfolio.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.subashgoud.portfolio.model.ContactMessage;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class ContactEmailServiceTest {

    @Test
    void missingApiKeyReturnsServiceUnavailable() {
        ContactEmailService service = new ContactEmailService(
                new ObjectMapper(),
                "",
                "Portfolio Contact <onboarding@resend.dev>",
                "subashgoud12345@gmail.com");

        ResponseStatusException exception = assertThrows(
                ResponseStatusException.class,
                () -> service.sendNotification(
                        new ContactMessage("Visitor", "visitor@example.com", "Hello", "Test message")));

        assertEquals(HttpStatus.SERVICE_UNAVAILABLE, exception.getStatusCode());
    }
}
