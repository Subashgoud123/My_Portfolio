package com.subashgoud.portfolio.service;

import com.subashgoud.portfolio.model.ContactMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactEmailService {

    private final JavaMailSender mailSender;
    private final String recipient;

    public ContactEmailService(JavaMailSender mailSender,
                               @Value("${app.contact-recipient}") String recipient) {
        this.mailSender = mailSender;
        this.recipient = recipient;
    }

    public void sendNotification(ContactMessage contact) {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(recipient);
        email.setReplyTo(contact.getEmail());
        email.setSubject("Portfolio contact: " + contact.getSubject());
        email.setText(String.format(
                "Name: %s%nEmail: %s%nSubject: %s%n%nMessage:%n%s",
                contact.getName(),
                contact.getEmail(),
                contact.getSubject(),
                contact.getMessage()));
        mailSender.send(email);
    }
}