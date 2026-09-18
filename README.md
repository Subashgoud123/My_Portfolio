# Subash Goud Ediga - Developer Portfolio

A recruiter-focused full-stack portfolio built with:

- Angular standalone components
- TypeScript
- Custom responsive CSS with glassmorphism, gradients, hover effects, reveal animations and horizontal carousels
- Java 21 + Spring Boot
- REST APIs
- Spring Validation
- H2 for local development
- PostgreSQL-ready configuration
- Google Drive links for certificates/resume
- Contact form backed by Spring Boot

## Important content rule

The portfolio content below is based on the supplied resume and certificate inventory.

Your employment resume says your current role is Packaged App Development Associate at Accenture and describes Java/Jersey, Azure, Git, Argo CD, GitHub Actions, CI/CD and Grafana work. The portfolio uses Spring Boot as the technology used to build this portfolio backend; it does not claim that Spring Boot was your employment framework.

The certificate inventory contains 44 records. It specifically flags one Udemy certificate as issued to "Bindu Ediga" and an AICTE Student Learning Assessment as a self-assessment, not a professional certification. Those are intentionally excluded from the public certification showcase.

## Run backend

Requirements:
- JDK 21+
- Maven 3.9+

```bash
cd backend
mvn spring-boot:run
```

Backend:
http://localhost:8080

API examples:
- GET /api/profile
- GET /api/projects
- GET /api/experience
- GET /api/education
- GET /api/certifications
- GET /api/skills
- POST /api/contact

## Run frontend

Requirements:
- Node.js 20+
- Angular CLI

```bash
cd frontend
npm install
npm start
```

Frontend:
http://localhost:4200

## Google Drive certificates

Open:

`frontend/src/app/data/portfolio-data.ts`

Each certificate has:

```ts
driveUrl: 'PASTE_GOOGLE_DRIVE_VIEW_LINK_HERE'
```

Replace each placeholder with a Google Drive viewer URL.

Recommended Google Drive sharing:
1. Upload certificates to Drive.
2. Right-click a certificate -> Share.
3. Set General access to "Anyone with the link" -> Viewer.
4. Copy the link.
5. Paste it into the matching `driveUrl`.
6. The portfolio opens the certificate in a new tab when the recruiter clicks "View Credential".

You can use the same pattern for the resume link.

## PostgreSQL

The default profile uses H2 so the project runs immediately.

To use PostgreSQL, create a database named `subash_portfolio`, then set environment variables:

```bash
DB_URL=jdbc:postgresql://localhost:5432/subash_portfolio
DB_USERNAME=postgres
DB_PASSWORD=your_password
```

Run with:

```bash
mvn spring-boot:run
```

The included `application.yml` uses these environment variables.

## Production checklist

- Replace all Drive placeholders.
- Add your real profile photo to `frontend/src/assets/profile.jpg`.
- Replace the demo GitHub project URLs with the actual repositories.
- Add a real email service if you want contact-form emails instead of database storage.
- Put the Angular build behind Nginx or a CDN.
- Deploy Spring Boot behind HTTPS.
- Change `allowed-origins` from `http://localhost:4200` to your production domain.
- Add rate limiting / CAPTCHA to the contact endpoint before public deployment.
