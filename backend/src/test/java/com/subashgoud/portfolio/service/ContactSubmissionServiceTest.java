package com.subashgoud.portfolio.service;

import com.subashgoud.portfolio.model.ContactMessage;
import com.subashgoud.portfolio.model.ContactSubmission;
import com.subashgoud.portfolio.repository.ContactSubmissionRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.ArgumentCaptor;
import org.springframework.test.util.ReflectionTestUtils;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ContactSubmissionServiceTest {

    @Mock
    private ContactSubmissionRepository repository;

    @InjectMocks
    private ContactSubmissionService service;

    @Test
    void savesSubmissionAndReturnsGeneratedId() {
        ContactMessage message = new ContactMessage();
        message.setName("Visitor");
        message.setEmail("visitor@example.com");
        message.setSubject("Portfolio inquiry");
        message.setMessage("Please contact me.");

        when(repository.save(any(ContactSubmission.class))).thenAnswer(invocation -> {
            ContactSubmission submission = invocation.getArgument(0);
            ReflectionTestUtils.setField(submission, "id", 42L);
            return submission;
        });

        assertEquals(42L, service.save(message));
        ArgumentCaptor<ContactSubmission> saved = ArgumentCaptor.forClass(ContactSubmission.class);
        verify(repository).save(saved.capture());
        assertEquals("Visitor", ReflectionTestUtils.getField(saved.getValue(), "name"));
        assertEquals("visitor@example.com", ReflectionTestUtils.getField(saved.getValue(), "email"));
        assertEquals("Portfolio inquiry", ReflectionTestUtils.getField(saved.getValue(), "subject"));
        assertEquals("Please contact me.", ReflectionTestUtils.getField(saved.getValue(), "message"));
    }
}
