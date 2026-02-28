import { Project } from '../models/project.model';

export const projectsData: Project[] = [
  {
    title: 'Enterprise HR Management Platform',
    summary:
      'Microservices-based HR system built with Spring Boot and Angular, including payroll integration, secure authentication, and workforce tracking.',
    tags: ['Spring Boot', 'Angular', 'Microservices', 'PostgreSQL'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Workforce Mobile Application',
    summary:
      'Flutter app with offline-first synchronization, real-time notifications, and biometric authentication for field teams.',
    tags: ['Flutter', 'Riverpod/Bloc', 'Offline-first', 'FCM'],
    demoUrl: '#',
    codeUrl: '#',
  },
];
