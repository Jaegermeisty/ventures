export interface Project {
  title: string;
  description: string;
  type: 'web' | 'ios';
  image: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Palescript',
    description:
      'A book-centric journaling web application for readers who write about what they read. Capture your thoughts, track your reading journey, and build a personal library of insights.',
    type: 'web',
    image: '/palescript.png',
    link: 'https://palescript.com',
    tags: ['Web App', 'JS', 'Journaling'],
  },
  {
    title: 'Summit',
    description:
      'Summit is a clean, powerful workout tracker that keeps your plans, sessions, and progress in one place. Build your routines, log your lifts, and see exactly how you’re getting stronger over time.',
    type: 'ios',
    image: '/summit.png',
    link: 'https://apps.apple.com/no/app/summit-workout-tracker/id6758953092',
    tags: ['iOS App', 'SwiftUI', 'Fitness'],
  },
  {
    title: 'Daily Catholic Quotes',
    description:
      'An iOS app that delivers a new inspirational quote every day directly to your home screen widget. Start each day with wisdom and reflection.',
    type: 'ios',
    image: '/catholic-quotes.png',
    link: 'https://apps.apple.com/no/app/daily-catholic-quotes/id6754383149',
    tags: ['iOS App', 'Swift', 'Widgets'],
  },
];

export default projects;
