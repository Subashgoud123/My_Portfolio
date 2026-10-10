# Subash Goud Ediga - Developer Portfolio

A recruiter-focused full-stack portfolio built with:

- Angular standalone components
- TypeScript
- Custom responsive CSS with glassmorphism, gradients, hover effects, reveal animations and horizontal carousels
- Java 21 + Spring Boot
- REST APIs
- Spring Validation
- Direct SMTP email delivery for contact form submissions (no database required)
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

## Contact form email

The Angular contact form posts to `POST /api/contact`. Spring Boot validates and
saves the message, then sends an email to `CONTACT_RECIPIENT` (defaults to
`subashgoud12345@gmail.com`). The visitor's email is set as the reply-to address.

For Gmail SMTP, use a Google App Password; do not use or commit your normal
Google account password. Enable 2-Step Verification on the sending Google
account and create an App Password in its Google Account security settings.
Set the sender account and App Password before starting the backend. In
PowerShell:

```powershell
$env:MAIL_USERNAME = "your-sending-gmail@gmail.com"
$env:MAIL_PASSWORD = "your-16-character-app-password"
$env:CONTACT_RECIPIENT = "subashgoud12345@gmail.com"
cd backend
mvn spring-boot:run
```

The application uses `smtp.gmail.com:587` with SMTP authentication and
STARTTLS by default. For deployment, configure `MAIL_USERNAME`,
`MAIL_PASSWORD`, and optionally `CONTACT_RECIPIENT` as backend environment
variables. `render.yaml` already declares these variables. Never commit SMTP
credentials to the repository.

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

## Production checklist

- Replace all Drive placeholders.
- Add your real profile photo to `frontend/src/assets/profile.jpg`.
- Replace the demo GitHub project URLs with the actual repositories.
- Configure SMTP environment variables for contact-form email delivery.
- Put the Angular build behind Nginx or a CDN.
- Deploy Spring Boot behind HTTPS.
- Change `allowed-origins` from `http://localhost:4200` to your production domain.
- Add rate limiting / CAPTCHA to the contact endpoint before public deployment.

## Render deployment

This repository includes `render.yaml` for deploying the Angular frontend and Spring Boot backend on Render. The frontend is a Render Static Site and the backend is a Render Web Service. GitHub Pages is not required for this setup.

The contact endpoint sends the submitted message directly by email and does not require a database. Configure the backend's mail credentials and frontend origin in Render:

```text
MAIL_USERNAME=your-sending-gmail@gmail.com
MAIL_PASSWORD=your-gmail-app-password
CONTACT_RECIPIENT=subashgoud12345@gmail.com
ALLOWED_ORIGINS=https://YOUR-FRONTEND.onrender.com
```

Set `API_URL` on the frontend service to the deployed backend URL, for example `https://subash-portfolio-api.onrender.com`. The Render build generates the frontend runtime configuration from that value. Do not leave it empty in production, because the local fallback is `http://localhost:8080`.

Do not commit email credentials or any other secret.
