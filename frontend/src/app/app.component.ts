import { AfterViewInit, Component, ElementRef, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { PortfolioService, ContactPayload } from './services/portfolio.service';
import { certificates, experienceData, projects, skillGroups, Certificate } from './data/portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  private service = inject(PortfolioService);
  private host = inject(ElementRef<HTMLElement>);
  private certTouchStart: { x: number; y: number } | null = null;
  private lastStarPoint: { x: number; y: number } | null = null;
  private nextStarId = 0;

  profile: any = {
    name: 'Subash Goud Ediga',
    headline: 'Java Backend Developer',
    location: 'Hyderabad, India',
    email: 'subashgoud12345@gmail.com',
    phone: '+91-9553663580',
    github: 'https://github.com/Subashgoud123',
    linkedin: 'https://www.linkedin.com/in/subash-goud/'
  };

  experience: any[] = experienceData;
  education: any[] = [];
  projects = projects;
  certifications: Certificate[] = certificates;
  skills = skillGroups;
  cursorStars: { id: number; x: number; y: number; drift: number; duration: number; size: number }[] = [];

  activeFilter = 'All';
  projectsExpanded = false;
  private readonly initialProjectCount = 4;
  certIndex = 0;
  certsPerPage = 3;
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
    this.updateCertsPerPage();
    this.service.profile().subscribe(data => this.profile = data);
    this.service.experience().subscribe(data => this.experience = data);
    this.service.education().subscribe(data => this.education = data);
    this.service.projects().subscribe(data => this.projects = data);
  }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => this.revealSections());
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 40;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    this.host.nativeElement.style.setProperty('--scroll-progress', `${progress}`);
    this.revealSections();
  }

  @HostListener('window:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return;
    this.host.nativeElement.style.setProperty('--pointer-x', `${event.clientX}px`);
    this.host.nativeElement.style.setProperty('--pointer-y', `${event.clientY}px`);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!this.lastStarPoint) {
      this.lastStarPoint = { x: event.clientX, y: event.clientY };
      return;
    }

    const dx = event.clientX - this.lastStarPoint.x;
    const dy = event.clientY - this.lastStarPoint.y;
    if (Math.hypot(dx, dy) < 22) return;

    this.lastStarPoint = { x: event.clientX, y: event.clientY };
    this.cursorStars = [
      ...this.cursorStars,
      {
        id: this.nextStarId++,
        x: event.clientX,
        y: event.clientY,
        drift: (Math.random() - 0.5) * 54,
        duration: 650 + Math.random() * 350,
        size: 8 + Math.random() * 7
      }
    ].slice(-18);
  }

  removeCursorStar(id: number): void {
    this.cursorStars = this.cursorStars.filter(star => star.id !== id);
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
    window.open('/assets/Ediga_Subash_Goud_Resume.pdf', '_blank', 'noopener');
  }

  openDrive(url: string): void {
    if (!url) {
      alert('This credential file is not available yet.');
      return;
    }
    window.open(url, '_blank', 'noopener');
  }

  projectFilters(): string[] {
    return ['All', ...Array.from(new Set(this.projects.map(p => p.category)))];
  }

  setProjectFilter(filter: string): void {
    this.activeFilter = filter;
    this.projectsExpanded = false;
  }

  toggleProjects(): void {
    this.projectsExpanded = !this.projectsExpanded;
    requestAnimationFrame(() => this.revealSections());
  }

  hasMoreProjects(): boolean {
    return this.matchingProjects().length > this.initialProjectCount;
  }

  filteredProjects() {
    const matchingProjects = this.matchingProjects();
    return this.projectsExpanded
      ? matchingProjects
      : matchingProjects.slice(0, this.initialProjectCount);
  }

  private matchingProjects() {
    return this.activeFilter === 'All'
      ? this.projects
      : this.projects.filter(p => p.category === this.activeFilter);
  }

  tiltProject(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return;
    const card = event.currentTarget as HTMLElement;
    const bounds = card.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.setProperty('--tilt-x', `${-vertical * 5}deg`);
    card.style.setProperty('--tilt-y', `${horizontal * 5}deg`);
  }

  resetProjectTilt(event: PointerEvent): void {
    const card = event.currentTarget as HTMLElement;
    card.style.removeProperty('--tilt-x');
    card.style.removeProperty('--tilt-y');
  }

  featuredCertificates(): Certificate[] {
    return this.certifications.filter(c => c.featured);
  }

  nextCert(): void {
    this.certIndex = Math.min(this.certIndex + 1, this.maxCertIndex());
  }

  maxCertIndex(): number {
    return Math.max(0, this.featuredCertificates().length - this.certsPerPage);
  }

  @HostListener('window:resize')
  private updateCertsPerPage(): void {
    this.certsPerPage = window.matchMedia('(max-width: 720px)').matches
      ? 1
      : window.matchMedia('(max-width: 1000px)').matches ? 2 : 3;
    this.certIndex = Math.min(this.certIndex, this.maxCertIndex());
  }

  prevCert(): void {
    this.certIndex = Math.max(this.certIndex - 1, 0);
  }

  onCertTouchStart(event: TouchEvent): void {
    const touch = event.changedTouches[0];
    this.certTouchStart = { x: touch.clientX, y: touch.clientY };
  }

  onCertTouchEnd(event: TouchEvent): void {
    if (!this.certTouchStart) return;
    const touch = event.changedTouches[0];
    const horizontalDelta = touch.clientX - this.certTouchStart.x;
    const verticalDelta = touch.clientY - this.certTouchStart.y;
    this.certTouchStart = null;

    if (Math.abs(horizontalDelta) < 45 || Math.abs(horizontalDelta) < Math.abs(verticalDelta)) return;
    if (horizontalDelta < 0) this.nextCert();
    else this.prevCert();
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
      error: (error: HttpErrorResponse) => {
        if (error.status === 0) {
          this.contactStatus = 'Could not connect to the portfolio API. Check that the Render backend is live and the frontend API_URL points to its HTTPS URL.';
        } else if (error.status === 503) {
          this.contactStatus = 'Could not send your message because email delivery is not configured. Add the Resend API key to the backend service on Render.';
        } else if (error.status === 502) {
          this.contactStatus = 'Could not send your message because Resend rejected it. Check the API key and sender verification in Render.';
        } else {
          this.contactStatus = `Could not send your message (server returned HTTP ${error.status}). Please check the backend logs and email configuration.`;
        }
        this.contactSending = false;
      }
    });
  }
}
