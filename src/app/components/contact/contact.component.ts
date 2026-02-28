import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { profileData } from '../../data/profile.data';

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SendState = 'idle' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  profile = profileData;

  form: ContactPayload = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSending = false;
  sendState: SendState = 'idle';
  sendMessage = '';

  private validate(payload: ContactPayload): string | null {
    if (!payload.name.trim()) return 'Name is required.';
    if (!payload.email.trim()) return 'Email is required.';
    if (!/^\S+@\S+\.\S+$/.test(payload.email.trim())) return 'Email is invalid.';
    if (!payload.subject.trim()) return 'Subject is required.';
    if (!payload.message.trim()) return 'Message is required.';
    return null;
  }

  async submit(): Promise<void> {
    if (this.isSending) return;

    this.sendState = 'idle';
    this.sendMessage = '';

    const error = this.validate(this.form);
    if (error) {
      this.sendState = 'error';
      this.sendMessage = error;
      return;
    }

    this.isSending = true;

    try {
      // TODO: replace with real API call
      await new Promise((r) => setTimeout(r, 400));

      this.sendState = 'success';
      this.sendMessage = 'Message sent successfully. I will get back to you soon.';
      this.form = { name: '', email: '', subject: '', message: '' };
    } catch (e) {
      this.sendState = 'error';
      this.sendMessage = e instanceof Error ? e.message : 'Something went wrong while sending your message.';
    } finally {
      this.isSending = false;
    }
  }
}