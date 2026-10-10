package com.subashgoud.portfolio.repository;

import com.subashgoud.portfolio.model.ContactSubmission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactSubmissionRepository extends JpaRepository<ContactSubmission, Long> {
}
