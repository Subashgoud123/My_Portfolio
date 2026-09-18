package com.subashgoud.portfolio.controller;

import com.subashgoud.portfolio.model.ContactMessage;
import com.subashgoud.portfolio.repository.ContactMessageRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    private final ContactMessageRepository contactRepository;

    public PortfolioController(ContactMessageRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @GetMapping("/profile")
    public Map<String, Object> profile() {
        return Map.of(
                "name", "Subash Goud Ediga",
                "headline", "Java Backend Developer",
                "location", "Hyderabad, India",
                "email", "subashgoud12345@gmail.com",
                "phone", "+91-9553663580",
                "summary", "Java Backend Developer with nearly 2 years of experience developing enterprise REST APIs using Java, Jersey Framework, SQL, Docker, Azure services, Git, and CI/CD pipelines.",
                "github", "https://github.com/Subashgoud123",
                "linkedin", "https://www.linkedin.com/in/subash-goud/"
        );
    }

    @GetMapping("/experience")
    public List<Map<String, Object>> experience() {
        return List.of(Map.of(
                "company", "Accenture",
                "role", "Packaged App Development Associate",
                "period", "29 Sep 2024 - Current",
                "location", "Hyderabad, India",
                "highlights", List.of(
                        "Migrated a legacy monolithic PrimeFaces application to a decoupled, API-first architecture.",
                        "Developed an application with Java's Jersey Framework.",
                        "Worked with Azure Virtual Machines, Functions and Key Vault services.",
                        "Used Jira, Git, Argo CD and GitHub Actions with CI/CD workflows.",
                        "Monitored applications using Grafana.",
                        "Worked with GitHub Copilot in the IDE.",
                        "Collaborated with business stakeholders to deliver features and troubleshoot production issues."
                )
        ));
    }

    @GetMapping("/education")
    public List<Map<String, Object>> education() {
        return List.of(
                Map.of("degree", "Bachelor of Technology", "field", "Electronics and Communication Engineering", "institution", "G. Pulla Reddy Engineering College", "location", "Kurnool, Andhra Pradesh", "year", "2024", "score", "CGPA 8.9"),
                Map.of("degree", "Intermediate", "field", "—", "institution", "Narayana Junior College", "location", "Kurnool, Andhra Pradesh", "year", "2020", "score", "CGPA 9.6"),
                Map.of("degree", "Secondary", "field", "—", "institution", "Bhashyam Public High School", "location", "Kurnool, Andhra Pradesh", "year", "2018", "score", "CGPA 9.8")
        );
    }

    @GetMapping("/skills")
    public Map<String, List<String>> skills() {
        return Map.of(
                "Backend", List.of("Java", "Spring Boot", "Jersey", "Quarkus", "REST APIs", "SQL"),
                "Cloud & DevOps", List.of("Azure", "Docker", "GitHub Actions", "Argo CD", "CI/CD", "Grafana"),
                "Programming", List.of("Java", "Python", "SQL"),
                "AI / Computer Vision", List.of("OpenCV", "MediaPipe", "Machine Learning"),
                "Frontend", List.of("Angular", "HTML", "CSS", "JavaScript")
        );
    }

    @GetMapping("/projects")
    public List<Map<String, Object>> projects() {
        return List.of(
                Map.of(
                        "title", "TEDx GPREC Official Website",
                        "category", "Web Development",
                        "description", "Official website project built using HTML, CSS and JavaScript.",
                        "stack", List.of("HTML", "CSS", "JavaScript"),
                        "featured", true
                ),
                Map.of(
                        "title", "Liver Disease Prediction System",
                        "category", "Machine Learning",
                        "description", "Machine-learning project for liver disease prediction using Python.",
                        "stack", List.of("Python", "Machine Learning"),
                        "featured", true
                ),
                Map.of(
                        "title", "Agriculture Rover Vehicle",
                        "category", "Embedded / Robotics",
                        "description", "Agriculture rover vehicle project completed at IIITDM Kurnool.",
                        "stack", List.of("Embedded Systems", "Robotics"),
                        "featured", true
                ),
                Map.of(
                        "title", "Computer Vision Mini Projects",
                        "category", "Python / Automation",
                        "description", "Personal mini projects using OpenCV, MediaPipe and PyAutoGUI.",
                        "stack", List.of("Python", "OpenCV", "MediaPipe", "PyAutoGUI"),
                        "featured", false
                )
        );
    }

    @GetMapping("/certifications")
    public List<Map<String, Object>> certifications() {
        return List.of(
                cert("Microsoft Certified: Azure Fundamentals (AZ-900)", "Microsoft", "Certification", "June 2026", "Cloud / Azure", true),
                cert("Digital Skills Readiness Program: Java Full Stack", "Wipro TalentNext", "Course completion", "06 Oct 2023", "Java Full Stack", true),
                cert("Test Automation", "EPAM Systems", "Training / certificate", "19 Jun 2023", "Testing / Automation", true),
                cert("AWS Academy Graduate - AWS Academy Cloud Foundations", "AWS Academy", "Badge / certificate", "20 Feb 2024", "Cloud", true),
                cert("Fundamentals of Artificial Intelligence", "NPTEL / IIT Guwahati", "NPTEL certification", "Jul-Oct 2023", "AI", true),
                cert("Developer Job Simulation", "Accenture Nordics / Forage", "Job simulation", "20 Dec 2023", "Software Development", true),
                cert("AWS Academy Graduate - Machine Learning Foundations", "AWS Academy", "Badge / certificate", "01 Feb 2024", "Machine Learning", true),
                cert("Full Stack Web Development in MERN", "WSA / Web Stack Academy", "Internship", "16 Aug - 16 Oct 2023", "Full Stack", true),
                cert("Web Development Internship", "PHN Technology Pvt Ltd", "Internship", "06 Apr - 06 Jun 2023", "Web Development", true),
                cert("AI and Data Science Internship", "YBI Foundation", "Internship", "23 Mar 2024", "AI / Data", true),
                cert("Node JS Certification Course - Master the Fundamentals", "Scaler Topics", "Certificate of Excellence", "29 Feb 2024", "Node.js", true),
                cert("Python 3.4.3 Training", "Spoken Tutorial Project at IIT Bombay", "Training completion", "19 Nov 2022", "Python", true),
                cert("Create an Intelligent Document Processing Solution with Azure AI Document Intelligence", "Microsoft Learn", "Learning achievement", "27 Jan 2024", "Azure AI", false),
                cert("Build an Azure AI Vision Solution", "Microsoft Learn", "Learning achievement", "27 Jan 2024", "Computer Vision", false),
                cert("Build a Natural Language Processing Solution with Azure AI Language", "Microsoft Learn", "Learning achievement", "27 Jan 2024", "Azure AI / NLP", false),
                cert("Describe Monitoring Tools in Azure", "Microsoft Learn", "Learning achievement", "02 Feb 2024", "Azure Monitoring", false),
                cert("Java Programming Fundamentals", "Infosys Springboard", "Course completion", "17 Sep 2023", "Java", false),
                cert("Java SE 8 Features", "Infosys Springboard", "Course completion", "17 Sep 2023", "Java", false),
                cert("Intermediate Object-Oriented Programming with Java", "Coursera Project Network", "Project certificate", "09 Jul 2023", "Java / OOP", false),
                cert("Introduction to Java Programming: Java Fundamental Concepts", "Coursera Project Network", "Project certificate", "03 Jul 2023", "Java", false),
                cert("Software Testing Training", "Besant Technologies", "Training", "11 Mar 2023", "Testing", false),
                cert("Full Stack Development (MERN)", "Pregrad", "Course completion", "02 Mar 2023", "Full Stack", false),
                cert("Data Analysis with Python", "IBM / Coursera", "Course certificate", "18 Jan 2024", "Python / Data", false),
                cert("Data Visualization with Python", "IBM / Coursera", "Course certificate", "13 Feb 2024", "Python / Data", false),
                cert("Machine Learning Onramp", "MathWorks", "Course completion", "22 Jun 2023", "Machine Learning", false),
                cert("Data Science with Python", "SkillUp by Simplilearn", "Course completion", "27 Jul 2022", "Python / Data", false),
                cert("Microsoft Technology Associate: Introduction to Programming Using Python", "Microsoft / Certiport", "Certification", "2022", "Python", false),
                cert("Python Programming Internship", "Pantech E Learning / Pantech Solutions", "Internship", "28 Feb - 29 Mar 2022", "Python", false),
                cert("30 Days Machine Learning Master Class", "Pantech / Skill AP APSSDC", "Certificate of participation", "15 Nov - 14 Dec 2021", "Machine Learning", false),
                cert("IoT, Wireless & Cloud Computing Emerging Technologies", "Yonsei University / Coursera", "Course certificate", "09 May 2022", "IoT / Cloud", false),
                cert("Web Development with WordPress", "EngineerCore", "Summer training", "Sep-Oct 2022", "Web Development", false),
                cert("Introduction to HTML", "SkillUp by Simplilearn", "Course completion", "09 Aug 2022", "Web", false),
                cert("Business English", "Infosys Springboard", "Course completion", "28 May 2022", "Professional Development", false),
                cert("Interpersonal Skills", "Infosys Springboard", "Course completion", "14 Jun 2022", "Professional Development", false),
                cert("English for Effective Business Speaking", "HKUST / Coursera", "Course certificate", "08 Jul 2023", "Communication", false),
                cert("Interview Research and Preparation", "University of Maryland / Coursera", "Course certificate", "03 Jul 2023", "Professional Development", false),
                cert("Pearson MePro Level 10 Expert", "Pearson MePro", "Expert badge", "25 Mar 2022", "Professional Development", false),
                cert("AWS Internship - Deploy a Cloud", "Internship Studio", "Internship", "12 May - 16 Jun 2022", "AWS", false),
                cert("AWS Training", "Internship Studio", "Training certificate", "17 Jun 2022", "AWS", false),
                cert("AI-ML Virtual Internship", "AICTE / EduSkills / AWS", "Virtual internship", "2024", "AI / ML", false),
                cert("Java Training Program", "DataFlair", "Course / training", "14 Jan 2023", "Java", false),
                cert("Developer Job Simulation supporting records", "Accenture Nordics / Forage", "Supporting record", "20 Dec 2023", "Software Development", false)
        );

    }

    private Map<String, Object> cert(String title, String issuer, String type, String date, String area, boolean featured) {
        return Map.of(
                "title", title,
                "issuer", issuer,
                "type", type,
                "date", date,
                "area", area,
                "featured", featured,
                "driveUrl", "PASTE_GOOGLE_DRIVE_VIEW_LINK_HERE"
        );
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, Object>> contact(@Valid @RequestBody ContactMessage message) {
        ContactMessage saved = contactRepository.save(message);
        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "Thanks. Your message has been received.",
                "id", saved.getId(),
                "receivedAt", LocalDateTime.now().toString()
        ));
    }
}
