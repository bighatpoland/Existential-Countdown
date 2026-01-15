export interface Timer {
  id: string;
  title: string;
  description: string;
  type: 'countdown' | 'countup';
  targetDate?: Date;
  startDate?: Date;
  unit: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'years' | 'steps' | 'coffees' | 'bulbs' | 'sundays' | 'phrases' | 'eyelashes' | 'breaths' | 'entries' | 'forks' | 'raindrops' | 'yawns' | 'socks' | 'heartbeats' | 'scrolls' | 'cycles' | 'lies' | 'blades' | 'waves' | 'inhales';
  funFact?: string;
}

// Helper function to calculate dates
const getDate = (years: number, months: number = 0, days: number = 0): Date => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + years);
  date.setMonth(date.getMonth() + months);
  date.setDate(date.getDate() + days);
  return date;
};

// Average human lifespan: 80 years from birth (adjust based on your age)
const birthYear = 1990; // Change this to your birth year
const currentYear = new Date().getFullYear();
const currentAge = currentYear - birthYear;
const remainingYears = 80 - currentAge;

export const timers: Timer[] = [
  {
    id: 'life-expectancy',
    title: 'Your Statistical Death',
    description: 'Assuming average life expectancy of 80 years',
    type: 'countdown',
    targetDate: getDate(remainingYears),
    unit: 'days',
    funFact: 'Every day, you lose exactly one day of your life. Groundbreaking.',
  },
  {
    id: 'heat-death',
    title: 'Heat Death of the Universe',
    description: 'When entropy wins and everything becomes meaningless soup',
    type: 'countdown',
    targetDate: new Date('2100-01-01'), // Placeholder - actual date is ~10^100 years
    unit: 'years',
    funFact: 'At least your problems will definitely be solved by then.',
  },
  {
    id: 'weekend-over',
    title: 'Until Monday Morning',
    description: 'The slow, inevitable march toward your alarm clock',
    type: 'countdown',
    targetDate: (() => {
      const now = new Date();
      const daysUntilMonday = (8 - now.getDay()) % 7 || 7;
      const nextMonday = new Date(now);
      nextMonday.setDate(now.getDate() + daysUntilMonday);
      nextMonday.setHours(9, 0, 0, 0);
      return nextMonday;
    })(),
    unit: 'hours',
    funFact: 'The weekend is just a brief pause in your regularly scheduled despair.',
  },
  {
    id: 'time-wasted-phone',
    title: 'Time Wasted on This App',
    description: 'Seconds you could have spent doing literally anything else',
    type: 'countup',
    startDate: new Date(),
    unit: 'seconds',
    funFact: 'Congratulations, you are actively watching time slip away.',
  },
  {
    id: 'retirement',
    title: 'Until Retirement',
    description: 'When you can finally relax (if you can afford it)',
    type: 'countdown',
    targetDate: (() => {
      const retirementAge = 67;
      const yearsUntilRetirement = retirementAge - currentAge;
      return getDate(yearsUntilRetirement);
    })(),
    unit: 'weeks',
    funFact: 'Assuming retirement still exists when you get there. Bold assumption.',
  },
  {
    id: 'earth-sun',
    title: 'Sun Swallows Earth',
    description: 'When our home planet becomes a light snack for the sun',
    type: 'countdown',
    targetDate: new Date('7000000000-01-01'), // ~5 billion years
    unit: 'years',
    funFact: 'Good news: you will definitely not have to pay off your student loans.',
  },
  {
    id: 'coffee-needed',
    title: 'Since Your Last Coffee',
    description: 'The growing void where caffeine should be',
    type: 'countup',
    startDate: (() => {
      const lastCoffee = new Date();
      lastCoffee.setHours(lastCoffee.getHours() - 3);
      return lastCoffee;
    })(),
    unit: 'minutes',
    funFact: 'Your brain is basically a coffee-powered meat computer.',
  },
  {
    id: 'new-years',
    title: 'Until New Year\'s',
    description: 'When you will definitely not keep those resolutions',
    type: 'countdown',
    targetDate: new Date(`${new Date().getFullYear() + 1}-01-01T00:00:00`),
    unit: 'days',
    funFact: 'This year will be different, you keep lying to yourself.',
  },
  {
    id: 'birthday',
    title: 'Until Your Next Birthday',
    description: 'Another lap around the sun, another year closer to the void',
    type: 'countdown',
    targetDate: (() => {
      const birthday = new Date();
      birthday.setMonth(0); // January
      birthday.setDate(1); // Change to your birthday
      if (birthday < new Date()) {
        birthday.setFullYear(birthday.getFullYear() + 1);
      }
      return birthday;
    })(),
    unit: 'days',
    funFact: 'Age is just a number that keeps getting uncomfortably larger.',
  },
  {
    id: 'sunset',
    title: 'Until Sunset',
    description: 'When the day finally gives up and darkness takes over',
    type: 'countdown',
    unit: 'hours',
    funFact: 'Sunset is just the universe reminding you that everything ends.',
  },
  {
    id: 'coffees-left',
    title: 'Estimated Coffees Left in Your Life',
    description: 'Based on life expectancy, daily intake, and inevitable spills',
    type: 'countdown',
    unit: 'coffees',
    funFact: 'Caffeine: the only thing keeping your existential dread at bay.',
  },
  {
    id: 'bulbs-broken',
    title: 'Bulbs That Will Get Broken in Your Lifetime',
    description: 'Tracked via device movements and AR shatter effects',
    type: 'countup',
    startDate: new Date(),
    unit: 'bulbs',
    funFact: 'Light bulbs are fragile, just like your hopes and dreams.',
  },
  {
    id: 'remaining-sundays',
    title: 'Remaining Sundays',
    description: 'Weeks left, accounting for laundry mishaps',
    type: 'countdown',
    unit: 'sundays',
    funFact: 'Sundays are for pretending you have your life together.',
  },
  {
    id: 'steps-to-lamp',
    title: 'Steps Until the Next Street Lamp',
    description: 'GPS-tracked distance to the nearest light source',
    type: 'countup',
    startDate: new Date(),
    unit: 'steps',
    funFact: 'Street lamps: guiding you through the darkness of existence.',
  },
  {
    id: 'procrastination-count',
    title: 'Times You’ll Say "Next Week I’ll Start"',
    description: 'Voice-detected procrastination phrases',
    type: 'countup',
    startDate: new Date(),
    unit: 'phrases',
    funFact: 'Procrastination is just death by a thousand tomorrows.',
  },
  {
    id: 'eyelashes-shed',
    title: 'Eyelashes Shed',
    description: 'Facial recognition monitoring for lost lashes',
    type: 'countup',
    startDate: new Date(),
    unit: 'eyelashes',
    funFact: 'Each lash is a tiny farewell to your vision.',
  },
  {
    id: 'breaths-until-crisis',
    title: 'Breaths Until Crisis',
    description: 'Mic-detected breathing rate until panic attack',
    type: 'countdown',
    targetDate: (() => {
      const now = new Date();
      now.setMinutes(now.getMinutes() + 30); // Placeholder: 30 minutes until crisis
      return now;
    })(),
    unit: 'breaths',
    funFact: 'Every breath is a step closer to hyperventilation.',
  },
  {
    id: 'room-forgetfulness',
    title: 'Room Forgetfulness',
    description: 'Motion sensors tracking entries and pauses',
    type: 'countup',
    startDate: new Date(),
    unit: 'entries',
    funFact: 'How many times will you forget why you entered?',
  },
  {
    id: 'microwave-fork',
    title: 'Microwave Fork Incidents',
    description: 'Predicted based on time-of-day usage patterns',
    type: 'countup',
    startDate: new Date(),
    unit: 'forks',
    funFact: 'Sparks fly when you forget the basics.',
  },
  {
    id: 'raindrops-umbrella',
    title: 'Raindrops on Umbrella',
    description: 'Weather API + location for precipitation tracking',
    type: 'countup',
    startDate: new Date(),
    unit: 'raindrops',
    funFact: 'Each drop mocks your futile attempt at dryness.',
  },
  {
    id: 'yawns-left',
    title: 'Yawns Left in Life',
    description: 'Camera detection for yawn frequency',
    type: 'countdown',
    targetDate: getDate(remainingYears),
    unit: 'yawns',
    funFact: 'Yawning: your body\'s way of saying "I\'m bored of existing."',
  },
  {
    id: 'lost-socks',
    title: 'Lost Socks',
    description: 'Simulated with random loss rate',
    type: 'countup',
    startDate: new Date(),
    unit: 'socks',
    funFact: 'Where do they go? The void, probably.',
  },
  {
    id: 'heartbeats-exercise',
    title: 'Heartbeats to Exercise Thought',
    description: 'Heart rate sensors until you consider working out',
    type: 'countdown',
    targetDate: (() => {
      const now = new Date();
      now.setHours(now.getHours() + 24); // Placeholder: 24 hours
      return now;
    })(),
    unit: 'heartbeats',
    funFact: 'Your heart beats on, waiting for motivation.',
  },
  {
    id: 'ad-scrolls',
    title: 'Ad Scrolls',
    description: 'Tracked in-app gestures (mock for external)',
    type: 'countup',
    startDate: new Date(),
    unit: 'scrolls',
    funFact: 'Each scroll funds the algorithm that knows you too well.',
  },
  {
    id: 'ant-steps',
    title: 'Ant Steps',
    description: 'Pedometer + eco-factor for ant perspective',
    type: 'countup',
    startDate: new Date(),
    unit: 'steps',
    funFact: 'From an ant\'s view, you\'re a walking apocalypse.',
  },
  {
    id: 'battery-heat-death',
    title: 'Battery Heat Death',
    description: 'Device battery API, extrapolated to universe',
    type: 'countdown',
    targetDate: new Date('2100-01-01'), // Placeholder
    unit: 'cycles',
    funFact: 'Your phone dies before the universe does. Small victories.',
  },
  {
    id: 'episode-lies',
    title: 'Episode Lies',
    description: 'Streaming API integration for binge-watching fibs',
    type: 'countup',
    startDate: new Date(),
    unit: 'lies',
    funFact: '"Just one more episode" is the biggest lie of all.',
  },
  {
    id: 'grass-blades',
    title: 'Grass Blades',
    description: 'AR scanner for lawn blade counting',
    type: 'countup',
    startDate: new Date(),
    unit: 'blades',
    funFact: 'Grass grows, you mow, repeat until death.',
  },
  {
    id: 'wrong-waves',
    title: 'Wrong Waves',
    description: 'Camera for gesture detection of awkward waves',
    type: 'countup',
    startDate: new Date(),
    unit: 'waves',
    funFact: 'Waving at strangers: the universal language of regret.',
  },
  {
    id: 'dust-inhales',
    title: 'Dust Inhales',
    description: 'Air quality API or simulated dust particles',
    type: 'countup',
    startDate: new Date(),
    unit: 'inhales',
    funFact: 'Breathing in the universe, one speck at a time.',
  },
];
