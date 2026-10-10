# Subash Goud Ediga - Developer Portfolio

A recruiter-focused full-stack portfolio built with:

- Angular standalone components
- TypeScript
- Custom responsive CSS with glassmorphism, gradients, hover effects, reveal animations and horizontal carousels
- Java 21 + Spring Boot
- REST APIs
- Spring Validation
- Direct email delivery through the Resend API (no database required)
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

The Angular contact form posts to `POST /api/contact`. Spring Boot validates the
submission and sends it through Resend's HTTPS API to `CONTACT_RECIPIENT`
(defaults to `subashgoud12345@gmail.com`). The visitor's email is set as the
reply-to address. No database or SMTP connection is used.

Create a Resend account and an API key. For local development, set the key
before starting the backend:

```powershell
$env:RESEND_API_KEY = "re_your_api_key"
$env:CONTACT_RECIPIENT = "subashgoud12345@gmail.com"
cd backend
mvn spring-boot:run
```

The default sender is Resend's `onboarding@resend.dev`, which can only deliver
to the email address registered and verified with your Resend account. To send
to other recipients, verify a domain in Resend and configure `RESEND_FROM` to
use an address on that domain. Keep the API key secret; never commit it.

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
- Configure the Resend API key for contact-form email delivery.
- Put the Angular build behind Nginx or a CDN.
- Deploy Spring Boot behind HTTPS.
- Change `allowed-origins` from `http://localhost:4200` to your production domain.
- Add rate limiting / CAPTCHA to the contact endpoint before public deployment.

## Render deployment

This repository includes `render.yaml` for deploying the Angular frontend and Spring Boot backend on Render. The frontend is a Render Static Site and the backend is a Render Web Service. GitHub Pages is not required for this setup.

The contact endpoint sends the submitted message directly by email and does not require a database. Configure the backend's Resend API key and frontend origin in Render:

```text
RESEND_API_KEY=re_your_api_key
RESEND_FROM=Portfolio Contact <onboarding@resend.dev>
CONTACT_RECIPIENT=subashgoud12345@gmail.com
ALLOWED_ORIGINS=https://YOUR-FRONTEND.onrender.com
```

The default Resend sender is limited to the verified email address on your
Resend account. Verify your own sending domain and update `RESEND_FROM` if you
need delivery to other recipients.

Set `API_URL` on the frontend service to the deployed backend URL, for example `https://subash-portfolio-api.onrender.com`. The Render build generates the frontend runtime configuration from that value. Do not leave it empty in production, because the local fallback is `http://localhost:8080`.

Do not commit email credentials or any other secret.
