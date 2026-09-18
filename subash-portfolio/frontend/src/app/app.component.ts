import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService, ContactPayload } from './services/portfolio.service';
import { certificates, projects, skillGroups, Certificate } from './data/portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private service = inject(PortfolioService);

  profile: any = {
    name: 'Subash Goud Ediga',
    headline: 'Java Backend Developer',
    location: 'Hyderabad, India',
    email: 'subashgoud12345@gmail.com',
    phone: '+91-9553663580',
    github: 'https://github.com/Subashgoud123',
    linkedin: 'https://www.linkedin.com/in/subash-goud/'
  };

  experience: any[] = [];
  education: any[] = [];
  projects = projects;
  certifications: Certificate[] = certificates;
  skills = skillGroups;

  activeFilter = 'All';
  certIndex = 0;
  menuOpen = false;
  scrolled = false;
  contactStatus = '';
  contactSending = false;

  contact: ContactPayload = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  ngOnInit(): void {
    this.service.profile().subscribe(data => this.profile = data);
    this.service.experience().subscribe(data => this.experience = data);
    this.service.education().subscribe(data => this.education = data);
    this.service.projects().subscribe(data => this.projects = data);
    this.service.certifications().subscribe(data => {
      const apiCerts = data as Certificate[];
      if (apiCerts?.length) this.certifications = apiCerts;
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 40;
    this.revealSections();
  }

  private revealSections(): void {
    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) el.classList.add('visible');
    });
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }

  downloadResume(): void {
    const url = 'PASTE_GOOGLE_DRIVE_RESUME_VIEW_LINK_HERE';
    if (!url.includes('PASTE_')) window.open(url, '_blank', 'noopener');
    else alert('Add your Google Drive resume link in app.component.ts.');
  }

  openDrive(url: string): void {
    if (!url || url.includes('PASTE_')) {
      alert('Add the Google Drive view link for this credential first.');
      return;
    }
    window.open(url, '_blank', 'noopener');
  }

  projectFilters(): string[] {
    return ['All', ...Array.from(new Set(this.projects.map(p => p.category)))];
  }

  filteredProjects() {
    return this.activeFilter === 'All'
      ? this.projects
      : this.projects.filter(p => p.category === this.activeFilter);
  }

  featuredCertificates(): Certificate[] {
    return this.certifications.filter(c => c.featured);
  }

  nextCert(): void {
    const max = Math.max(0, this.featuredCertificates().length - 1);
    this.certIndex = Math.min(this.certIndex + 1, max);
  }

  prevCert(): void {
    this.certIndex = Math.max(this.certIndex - 1, 0);
  }

  visibleCerts(): Certificate[] {
    const all = this.featuredCertificates();
    if (!all.length) return [];
    const start = this.certIndex;
    return [0, 1, 2].map(offset => all[(start + offset) % all.length]).filter(Boolean);
  }

  submitContact(): void {
    if (!this.contact.name || !this.contact.email || !this.contact.subject || !this.contact.message) {
      this.contactStatus = 'Please complete every field.';
      return;
    }

    this.contactSending = true;
    this.contactStatus = '';

    this.service.sendMessage(this.contact).subscribe({
      next: res => {
        this.contactStatus = res.message || 'Message sent successfully.';
        this.contact = { name: '', email: '', subject: '', message: '' };
        this.contactSending = false;
      },
      error: () => {
        this.contactStatus = 'Could not reach the backend. Make sure Spring Boot is running on port 8080.';
        this.contactSending = false;
      }
    });
  }
}
