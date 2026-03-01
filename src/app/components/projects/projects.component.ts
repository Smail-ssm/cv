import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { projectsData } from '../../data/projects.data';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects = projectsData;
  searchQuery = '';

  get filteredProjects(): Project[] {
    const query = this.searchQuery.trim().toLowerCase();

    if (!query) {
      return this.projects;
    }

    return this.projects.filter((project) => {
      const searchableText = [project.title, project.summary, ...project.tags]
        .join(' ')
        .toLowerCase();
      return searchableText.includes(query);
    });
  }

  onSearch(query: string): void {
    this.searchQuery = query;
  }
}
