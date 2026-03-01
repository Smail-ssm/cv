import { Component, HostListener } from '@angular/core';

type SectionId = 'hero' | 'experience' | 'projects' | 'skills' | 'contact';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent {
  activeSection: SectionId = 'hero';
  private readonly sections: SectionId[] = ['hero', 'experience', 'projects', 'skills', 'contact'];

  @HostListener('window:scroll')
  onScroll(): void {
    const offset = 160;
    let current: SectionId | undefined;

    for (const section of this.sections) {
      const element = document.getElementById(section);

      if (element && element.getBoundingClientRect().top <= offset) {
        current = section;
      }
    }

    this.activeSection = current ?? 'hero';
  }
}
