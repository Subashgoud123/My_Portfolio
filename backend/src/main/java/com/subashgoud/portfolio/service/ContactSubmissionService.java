package com.subashgoud.portfolio.service;

import com.subashgoud.portfolio.model.ContactMessage;
import com.subashgoud.portfolio.model.ContactSubmission;
import com.subashgoud.portfolio.repository.ContactSubmissionRepository;
import org.springframework.stereotype.Service;

@Service
public class ContactSubmissionService {

    private final ContactSubmissionRepository repository;

    public ContactSubmissionService(ContactSubmissionRepository repository) {
        this.repository = repository;
    }

    public long save(ContactMessage message) {
        return repository.save(new ContactSubmission(message)).getId();
    }
}
