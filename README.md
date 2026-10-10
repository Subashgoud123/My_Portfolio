# Subash Goud Ediga - Developer Portfolio

A recruiter-focused full-stack portfolio built with:

- Angular standalone components
- TypeScript
- Custom responsive CSS with glassmorphism, gradients, hover effects, reveal animations and horizontal carousels
- Java 21 + Spring Boot
- REST APIs
- Spring Validation
- Contact form storage in PostgreSQL and email delivery through FormSubmit
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

The contact form first saves the submission to the backend PostgreSQL database,
then sends an email using FormSubmit to `subashgoud12345@gmail.com`. If the email
service is unavailable, the submission remains stored. FormSubmit requires
confirmation the first time: submit one real message, then open the activation
email delivered to the recipient inbox and approve the form.

### Connect the backend to Neon

In Neon, open your project and select **Connect**. Choose the branch and database
for the portfolio, enable the pooled connection option, choose the Java/JDBC
connection string, and copy its host, database, user, and password. In the
Render Dashboard, open the `subash-portfolio-api` service, select **Environment**,
and add these variables before deploying the database changes:

```text
SPRING_DATASOURCE_URL=jdbc:postgresql://<Neon-pooled-host>/<database>?sslmode=require
SPRING_DATASOURCE_USERNAME=<Neon-role>
SPRING_DATASOURCE_PASSWORD=<Neon-password>
```

Use the pooled host and database shown in Neon. Keep `?sslmode=require` on the
JDBC URL, and put the role and password in their separate Render variables;
never commit credentials or post them in chat. Save the variables first, then
deploy the code. The backend creates the `contact_submissions` table
automatically. Submissions are not exposed through a public read API; view them
in Neon's **SQL Editor** with:

```sql
SELECT id, name, email, subject, message, submitted_at
FROM contact_submissions
ORDER BY submitted_at DESC;
```

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
- Activate the contact form using the confirmation email from FormSubmit.
- Put the Angular build behind Nginx or a CDN.
- Deploy Spring Boot behind HTTPS.
- Change `allowed-origins` from `http://localhost:4200` to your production domain.
- Keep FormSubmit's default CAPTCHA protection enabled.

## Render deployment

This repository includes `render.yaml` for deploying the Angular frontend and Spring Boot backend on Render. The frontend is a Render Static Site and the backend is a Render Web Service. GitHub Pages is not required for this setup.

The contact form stores messages in Neon and sends notification email using
FormSubmit. Set the three `SPRING_DATASOURCE_*` variables on the backend service
before deploying the database changes. The frontend `API_URL` is used for
portfolio content and saving contact submissions. FormSubmit requires one-time
activation by confirming the email it sends to `subashgoud12345@gmail.com`.
