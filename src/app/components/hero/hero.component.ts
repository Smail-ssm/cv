import { Component } from '@angular/core';
import { profileData } from '../../data/profile.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly profile = profileData;
}
