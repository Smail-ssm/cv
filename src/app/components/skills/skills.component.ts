import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { skillsData } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly skills = skillsData;
}
