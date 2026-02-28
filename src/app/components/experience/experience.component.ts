import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { experienceData } from '../../data/experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experience = experienceData;
}
