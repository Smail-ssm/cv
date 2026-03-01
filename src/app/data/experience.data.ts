import { Experience } from '../models/experience.model';

export const experienceData: Experience[] = [
  {
    role: 'Senior Full Stack Developer',
    company: 'RHIS SOFTWARE — Tunis, Tunisia',
    period: 'July 2022 – Present',
    highlights: [
      'Designed and maintained Spring Boot microservices architecture.',
      'Implemented authentication/authorization with Spring Security and JWT.',
      'Developed REST APIs consumed by Angular and Flutter applications.',
      'Integrated external payroll API (Silae) with complex business logic.',
      'Optimized cron processes for employee activation workflows.',
      'Integrated biometric authentication (IDBio) into Angular systems.',
      'Implemented real-time communication using Firebase.',
      'Managed Linux production deployments with Nginx and Caddy.',
      'Optimized PostgreSQL queries and JSONB data structures.',
    ],
  },
  {
    role: 'Technical Support Engineer',
    company: 'RHIS SOFTWARE — Tunis, Tunisia',
    period: 'December 2020 – July 2022',
    highlights: [
      'Managed migration of clients from legacy HR systems.',
      'Resolved database-level issues and SQL errors.',
      'Provided technical support and system troubleshooting.',
    ],
  },
];
