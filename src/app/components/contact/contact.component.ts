import { Component } from '@angular/core';
import { profileData } from '../../data/profile.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly profile = profileData;
}
