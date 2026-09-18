# Google Drive integration

The portfolio does not upload certificates into the Angular application.

Instead, each credential card contains a `driveUrl`.

Use a viewer link such as:

https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing

Do not put private files in the repository.

## Recommended Drive folder layout

Subash Goud Portfolio/
├── Resume/
│   └── Subash_Goud_Ediga_Resume.pdf
└── Certificates/
    ├── 01_AZ900.pdf
    ├── 02_Wipro_Java_Full_Stack.pdf
    ├── 03_EPAM_Test_Automation.pdf
    └── ...

For every file:
- General access: Anyone with the link
- Role: Viewer

Then paste the viewer link into the matching `driveUrl` field.

For the resume, edit:

`frontend/src/app/app.component.ts`

and replace:

`PASTE_GOOGLE_DRIVE_RESUME_VIEW_LINK_HERE`

with the actual viewer link.
