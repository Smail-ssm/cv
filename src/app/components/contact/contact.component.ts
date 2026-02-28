import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly profile = profileData;

  isSending = false;
  sendState: 'idle' | 'success' | 'error' = 'idle';
  sendMessage = '';

  async submitContact(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    if (this.isSending) {
      return;
    }

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);

    const payload: ContactPayload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      subject: String(formData.get('subject') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    };

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      this.sendState = 'error';
      this.sendMessage = 'Please fill in all fields before sending.';
      return;
    }

    this.isSending = true;
    this.sendState = 'idle';
    this.sendMessage = '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Unable to send message right now.');
      }

      this.sendState = 'success';
      this.sendMessage = 'Message sent successfully. I will get back to you soon.';
      formElement.reset();
    } catch (error) {
      this.sendState = 'error';
      const baseMessage =
        error instanceof Error ? error.message : 'Something went wrong while sending your message.';
      this.sendMessage = `${baseMessage} If this site is hosted on GitHub Pages, use direct email: ${this.profile.email}`;
    } finally {
      this.isSending = false;
    }
  }
}
