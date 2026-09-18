export interface Certificate {
  title: string;
  issuer: string;
  type: string;
  date: string;
  area: string;
  featured: boolean;
  driveUrl: string;
}

export const certificates: Certificate[] = [
  {
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    type: 'Certification',
    date: 'June 2026',
    area: 'Cloud / Azure',
    featured: true,
    driveUrl: 'PASTE_GOOGLE_DRIVE_VIEW_LINK_HERE'
  },
  {
    title: 'Digital Skills Readiness Program: Java Full Stack',
    issuer: 'Wipro TalentNext',
    type: 'Course completion',
    date: '06 Oct 2023',
    area: 'Java Full Stack',
    featured: true,
    driveUrl: 'PASTE_GOOGLE_DRIVE_VIEW_LINK_HERE'
  },
  {
    title: 'Test Automation',
    issuer: 'EPAM Systems',
    type: 'Training / certificate',
    date: '19 Jun 2023',
    area: 'Testing / Automation',
    featured: true,
    driveUrl: 'PASTE_GOOGLE_DRIVE_VIEW_LINK_HERE'
  },
  {
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    type: 'Badge / certificate',
    date: '20 Feb 2024',
    area: 'Cloud',
    featured: true,
    driveUrl: 'PASTE_GOOGLE_DRIVE_VIEW_LINK_HERE'
  },
  {
    title: 'Fundamentals of Artificial Intelligence',
    issuer: 'NPTEL / IIT Guwahati',
    type: 'NPTEL certification',
    date: 'Jul-Oct 2023 • 76% • Top 5%',
    area: 'AI',
    featured: true,
    driveUrl: 'PASTE_GOOGLE_DRIVE_VIEW_LINK_HERE'
  },
  {
    title: 'Developer Job Simulation',
    issuer: 'Accenture Nordics / Forage',
    type: 'Job simulation',
    date: '20 Dec 2023',
    area: 'Software Development',
    featured: true,
    driveUrl: 'PASTE_GOOGLE_DRIVE_VIEW_LINK_HERE'
  },
  {
    title: 'AWS Academy Graduate - Machine Learning Foundations',
    issuer: 'AWS Academy',
    type: 'Badge / certificate',
    date: '01 Feb 2024',
    area: 'Machine Learning',
    featured: true,
    driveUrl: 'PASTE_GOOGLE_DRIVE_VIEW_LINK_HERE'
  },
  {
    title: 'Full Stack Web Development in MERN',
    issuer: 'WSA / Web Stack Academy',
    type: 'Internship',
    date: '16 Aug - 16 Oct 2023',
    area: 'Full Stack',
    featured: true,
    driveUrl: 'PASTE_GOOGLE_DRIVE_VIEW_LINK_HERE'
  },
  {
    title: 'Web Development Internship',
    issuer: 'PHN Technology Pvt Ltd',
    type: 'Internship',
    date: '06 Apr - 06 Jun 2023',
    area: 'Web Development',
    featured: false,
    driveUrl: 'PASTE_GOOGLE_DRIVE_VIEW_LINK_HERE'
  },
  {
    title: 'AI and Data Science Internship',
    issuer: 'YBI Foundation',
    type: 'Internship',
    date: '23 Mar 2024',
    area: 'AI / Data',
    featured: false,
    driveUrl: 'PASTE_GOOGLE_DRIVE_VIEW_LINK_HERE'
  },
  {
    title: 'Node JS Certification Course - Master the Fundamentals',
    issuer: 'Scaler Topics',
    type: 'Certificate of Excellence',
    date: '29 Feb 2024',
    area: 'Node.js',
    featured: false,
    driveUrl: 'PASTE_GOOGLE_DRIVE_VIEW_LINK_HERE'
  },
  {
    title: 'Python 3.4.3 Training',
    issuer: 'Spoken Tutorial Project at IIT Bombay',
    type: 'Training completion',
    date: '19 Nov 2022',
    area: 'Python',
    featured: false,
    driveUrl: 'PASTE_GOOGLE_DRIVE_VIEW_LINK_HERE'
  }
];

export const projects = [
  {
    title: 'TEDx GPREC Official Website',
    category: 'Web Development',
    description: 'Official website project built using HTML, CSS and JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    icon: '⌁',
    featured: true,
    url: 'https://github.com/Subashgoud123'
  },
  {
    title: 'Liver Disease Prediction System',
    category: 'Machine Learning',
    description: 'Machine-learning project for liver disease prediction using Python.',
    stack: ['Python', 'Machine Learning'],
    icon: '◉',
    featured: true,
    url: 'https://github.com/Subashgoud123'
  },
  {
    title: 'Agriculture Rover Vehicle',
    category: 'Embedded / Robotics',
    description: 'Agriculture rover vehicle project completed at IIITDM Kurnool.',
    stack: ['Embedded Systems', 'Robotics'],
    icon: '⌬',
    featured: true,
    url: 'https://github.com/Subashgoud123'
  },
  {
    title: 'Computer Vision Mini Projects',
    category: 'Python / Automation',
    description: 'Personal mini projects using OpenCV, MediaPipe and PyAutoGUI.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
    icon: '◌',
    featured: false,
    url: 'https://github.com/Subashgoud123'
  }
];

export const skillGroups = {
  Backend: ['Java', 'Spring Boot', 'Jersey', 'Quarkus', 'REST APIs', 'SQL'],
  'Cloud & DevOps': ['Azure', 'Docker', 'GitHub Actions', 'Argo CD', 'CI/CD', 'Grafana'],
  Programming: ['Java', 'Python', 'SQL'],
  'AI / Computer Vision': ['OpenCV', 'MediaPipe', 'Machine Learning'],
  Frontend: ['Angular', 'HTML', 'CSS', 'JavaScript']
};
