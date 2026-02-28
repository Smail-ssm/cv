import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { profileData } from '../../data/profile.data';

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly profile = profileData;

  form: ContactPayload = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSending = false;
  sendState: 'idle' | 'success' | 'error' = 'idle';
  sendMessage = '';

  async submitContact(): Promise<void> {
    if (this.isSending) {
      return;
    }

    this.isSending = true;
    this.sendState = 'idle';
    this.sendMessage = '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form),
      });

      if (!response.ok) {
        throw new Error('Unable to send message right now.');
      }

      this.sendState = 'success';
      this.sendMessage = 'Message sent successfully. I will get back to you soon.';
      this.form = { name: '', email: '', subject: '', message: '' };
    } catch (error) {
      this.sendState = 'error';
      this.sendMessage =
        error instanceof Error ? error.message : 'Something went wrong while sending your message.';
    } finally {
      this.isSending = false;
    }
  }
}
