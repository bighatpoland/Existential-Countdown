// User and App Data Types
export interface Counter {
  id: string;
  title: string;
  description: string;
  targetDate?: number; // Unix timestamp for countdown
  startDate?: number; // Unix timestamp for countup
  type: 'countdown' | 'countup';
  unit: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'years' | 'steps' | 'coffees' | 'bulbs' | 'sundays' | 'phrases';
  funFact?: string;
  color?: string;
  isCustom: boolean;
  createdAt: number;
}

export interface UserData {
  userId: string;
  birthYear: number;
  username?: string;
  dailyHabits: {
    coffeeIntake: number; // cups per day
    yawnFrequency: number; // per day
  };
  location?: {
    latitude: number;
    longitude: number;
    timestamp: number;
  };
  customCounters: Counter[];
  savedCounters: string[]; // IDs of saved built-in counters
}

export interface PermissionState {
  location: 'undetermined' | 'denied' | 'granted';
  camera: 'undetermined' | 'denied' | 'granted';
  microphone: 'undetermined' | 'denied' | 'granted';
  notifications: 'undetermined' | 'denied' | 'granted';
  motionSensors: 'undetermined' | 'denied' | 'granted';
}

export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  location: string;
  timestamp: number;
}

export interface AppSettings {
  darkMode: boolean;
  themeName: 'dark' | 'custom-dark';
  notificationsEnabled: boolean;
  weatherEnabled: boolean;
  openWeatherMapApiKey?: string;
  onboardingCompleted: boolean;
}
