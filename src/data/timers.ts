import { Counter } from '../types';

/**
 * Built-in existential timers
 * These represent various existential/astronomical events
 */

const currentYear = new Date().getFullYear();
const currentUser = {
  birthYear: 1990, // Update this based on user data
};

// Helper function to create dates
const getDate = (year: number, month: number = 0, day: number = 1): number => {
  return new Date(year, month, day).getTime();
};

// Calculate user age-based dates
const userAge = currentYear - currentUser.birthYear;
const estimatedDeathYear = currentUser.birthYear + 80; // Assuming 80-year lifespan

export const builtInTimers: Counter[] = [
  {
    id: 'heat-death',
    title: 'Heat Death of Universe',
    description: 'Time until maximum entropy wins',
    type: 'countdown',
    targetDate: getDate(currentYear + 10 ** 100), // Placeholder: far future
    unit: 'years',
    funFact:
      'The universe will reach maximum entropy in approximately 10^100 years. Good luck.',
    color: '#ff4444',
    isCustom: false,
    createdAt: Date.now(),
  },
  {
    id: 'estimated-death',
    title: 'Estimated Life Expectancy',
    description: `You've got ~${80 - userAge} years left (statistically)`,
    type: 'countdown',
    targetDate: getDate(estimatedDeathYear),
    unit: 'days',
    funFact:
      "That's 26,297 days if you make it to 80. Better make them count.",
    color: '#ff4444',
    isCustom: false,
    createdAt: Date.now(),
  },
  {
    id: 'earth-destruction',
    title: 'Earth Consumed by Sun',
    description: 'When our planet becomes a cinder',
    type: 'countdown',
    targetDate: getDate(currentYear + 5000),
    unit: 'years',
    funFact:
      'In about 5 billion years, the Sun will expand and obliterate Earth. No pressure.',
    color: '#ff4444',
    isCustom: false,
    createdAt: Date.now(),
  },
  {
    id: 'time-alive',
    title: 'Time Since Birth',
    description: `You've been alive for ${userAge} years`,
    type: 'countup',
    startDate: getDate(currentUser.birthYear),
    unit: 'days',
    funFact:
      'Every day that passes is a day you can never get back. Cherish them.',
    color: '#44ff44',
    isCustom: false,
    createdAt: Date.now(),
  },
  {
    id: 'universe-age',
    title: 'Age of Universe',
    description: 'How long the universe has existed',
    type: 'countup',
    startDate: getDate(1970) - 13800000000 * 365.25 * 24 * 60 * 60 * 1000, // Approximate
    unit: 'years',
    funFact:
      'The universe is approximately 13.8 billion years old. You are a fleeting moment.',
    color: '#44ff44',
    isCustom: false,
    createdAt: Date.now(),
  },
  {
    id: 'millenium',
    title: 'Next Millennium',
    description: 'Time until year 3000',
    type: 'countdown',
    targetDate: getDate(3000),
    unit: 'years',
    funFact:
      'Will anyone care about deadlines in the year 3000? Probably not.',
    color: '#ffbb00',
    isCustom: false,
    createdAt: Date.now(),
  },
];
