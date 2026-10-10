package com.subashgoud.portfolio.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

import java.time.LocalDateTime;

@Entity
@Table(name = "contact_submissions")
public class ContactSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 120)
    private String name;

    @Column(nullable = false, length = 180)
    private String email;

    @Column(nullable = false, length = 160)
    private String subject;

    @Column(nullable = false, length = 3000)
    private String message;

    @Column(name = "submitted_at", nullable = false, updatable = false)
    private LocalDateTime submittedAt;

    protected ContactSubmission() {}

    public ContactSubmission(ContactMessage message) {
        this.name = message.getName();
        this.email = message.getEmail();
        this.subject = message.getSubject();
        this.message = message.getMessage();
    }

    @PrePersist
    void setSubmittedAt() {
        submittedAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
}
