import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.configureSeo();
  }

  private configureSeo(): void {
    const pageTitle = 'Ismail Mansouri | Senior Full Stack Software Engineer';
    const description =
      'Portfolio and CV of Ismail Mansouri, Senior Full Stack Software Engineer specialized in Spring Boot microservices, Angular frontend, and Flutter mobile apps.';

    this.titleService.setTitle(pageTitle);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ property: 'og:title', content: pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ name: 'twitter:title', content: pageTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: description });

    this.ensureCanonicalLink();
    this.ensureStructuredData();
  }

  private ensureCanonicalLink(): void {
    const canonicalHref = this.document.defaultView?.location?.href;

    if (!canonicalHref) {
      return;
    }

    let linkEl = this.document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

    if (!linkEl) {
      linkEl = this.document.createElement('link');
      linkEl.setAttribute('rel', 'canonical');
      this.document.head.appendChild(linkEl);
    }

    linkEl.href = canonicalHref;
  }

  private ensureStructuredData(): void {
    const schemaId = 'person-schema';
    const existingSchema = this.document.getElementById(schemaId);

    if (existingSchema) {
      return;
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Ismail Mansouri',
      jobTitle: 'Senior Full Stack Software Engineer',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tunis',
        addressCountry: 'TN',
      },
      email: 'ismailmansouri571@gmail.com',
      telephone: '+21651182717',
      sameAs: ['https://github.com/ismailmansouri', 'https://linkedin.com/in/ismail-mansouri'],
      knowsAbout: ['Spring Boot', 'Angular', 'Flutter', 'Microservices', 'PostgreSQL'],
    };

    const script = this.document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }
}
