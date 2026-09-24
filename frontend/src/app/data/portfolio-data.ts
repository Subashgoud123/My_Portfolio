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
    title: 'GATE 2026 - Graduate Aptitude Test in Engineering',
    issuer: 'NIT Agartala',
    type: 'GATE score card',
    date: '2026',
    area: 'DA and CS',
    featured: true,
    driveUrl: '/assets/DA and CS GATE Score card.pdf'
  },
  {
    title: 'GATE 2024 - Graduate Aptitude Test in Engineering',
    issuer: 'IISc Bangalore',
    type: 'GATE score card',
    date: '2024',
    area: 'EC',
    featured: true,
    driveUrl: '/assets/GATE%20EC24S71206794_ScoreCard.pdf'
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    type: 'Certification',
    date: 'June 2026',
    area: 'Cloud / Azure',
    featured: true,
    driveUrl: '/assets/azure-documents-microsoft.pdf'
  },
  {
    title: 'Digital Skills Readiness Program: Java Full Stack',
    issuer: 'Wipro TalentNext',
    type: 'Course completion',
    date: '06 Oct 2023',
    area: 'Java Full Stack',
    featured: true,
    driveUrl: '/assets/Wipro%20TalentNext%20Java%20Full%20Stack.pdf'
  },
  {
    title: 'Test Automation',
    issuer: 'EPAM Systems',
    type: 'Training / certificate',
    date: '19 Jun 2023',
    area: 'Testing / Automation',
    featured: true,
    driveUrl: '/assets/epam-coe%20test%20automation.jpg'
  },
  {
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    type: 'Badge / certificate',
    date: '20 Feb 2024',
    area: 'Cloud',
    featured: true,
    driveUrl: '/assets/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20240302-29-4bq3qa.pdf'
  },
  {
    title: 'Fundamentals of Artificial Intelligence',
    issuer: 'NPTEL / IIT Guwahati',
    type: 'NPTEL certification',
    date: 'Jul-Oct 2023 • 76%',
    area: 'AI',
    featured: true,
    driveUrl: '/assets/SUBASH-GOUD-EDIGA-Participant-Certificate%20(1).pdf'
  },
  {
    title: 'Developer Job Simulation',
    issuer: 'Accenture Nordics / Forage',
    type: 'Job simulation',
    date: '20 Dec 2023',
    area: 'Software Development',
    featured: true,
    driveUrl: '/assets/Accenture%20Nordics_developer_completion_certificate.pdf'
  },
  {
    title: 'AWS Academy Graduate - Machine Learning Foundations',
    issuer: 'AWS Academy',
    type: 'Badge / certificate',
    date: '01 Feb 2024',
    area: 'Machine Learning',
    featured: true,
    driveUrl: '/assets/AWS_Academy_Graduate___AWS_Academy_Machine_Learning_Foundations_Badge20240302-29-kg70az.pdf'
  },
  {
    title: 'Full Stack Web Development in MERN',
    issuer: 'WSA / Web Stack Academy',
    type: 'Internship',
    date: '16 Aug - 16 Oct 2023',
    area: 'Full Stack',
    featured: true,
    driveUrl: '/assets/wsa_internship_certificate_Subash%20GoudEdiga.pdf'
  },
  {
    title: 'Web Development Internship',
    issuer: 'PHN Technology Pvt Ltd',
    type: 'Internship',
    date: '06 Apr - 06 Jun 2023',
    area: 'Web Development',
    featured: false,
    driveUrl: '/assets/PHN%20Technology%20web%20development%20internship.pdf'
  },
  {
    title: 'AI and Data Science Internship',
    issuer: 'YBI Foundation',
    type: 'Internship',
    date: '23 Mar 2024',
    area: 'AI / Data',
    featured: false,
    driveUrl: '/assets/YBI%20Foundation%27s%20ALML%20Internship.pdf'
  },
  {
    title: 'Node JS Certification Course - Master the Fundamentals',
    issuer: 'Scaler Topics',
    type: 'Certificate of Excellence',
    date: '29 Feb 2024',
    area: 'Node.js',
    featured: false,
    driveUrl: '/assets/Scaler%20Nodejs%20course%20.png'
  },
  {
    title: 'Python 3.4.3 Training',
    issuer: 'Spoken Tutorial Project at IIT Bombay',
    type: 'Training completion',
    date: '19 Nov 2022',
    area: 'Python',
    featured: false,
    driveUrl: '/assets/mta-introduction-to-programming-using-python-certified-2022.png'
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
