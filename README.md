# 🕰️ Existential Countdown

> *"Tick-tock your way to mild despair. Because why live in the moment when you can quantify its end?"*

A React Native mobile app that quantifies the absurd and existential aspects of life through countdown and countup timers. Built with React Native and Expo for iOS and Android.

## 🏗️ Tech Stack

- **Framework:** React Native (with Expo for easier development)
- **State Management:** Redux Toolkit
- **UI Library:** React Native Paper (dark-themed components)
- **Navigation:** React Navigation (bottom-tab navigation)
- **Permissions:** Location (GPS), Camera, Microphone, Notifications, Motion Sensors
- **Storage:** AsyncStorage for persisting user data
- **API Integration:** OpenWeatherMap for weather data
- **Notifications:** expo-notifications for reminder alerts
- **Testing:** Jest for unit tests, Detox for E2E testing
- **Deployment:** Expo EAS for building and app store submission

## 📁 Project Structure

```
Existential-countdown/
├── src/
│   ├── components/         # Reusable UI components (timer cards)
│   ├── screens/            # App screens (Home, Counters, Settings)
│   ├── store/              # Redux store & slices
│   │   └── slices/         # userSlice, permissionsSlice, settingsSlice
│   ├── types/              # TypeScript interfaces
│   └── utils/              # Services
│       ├── theme.ts        # Dark theme configuration
│       ├── storage.ts      # AsyncStorage service
│       ├── permissions.ts  # Permission requests & location
│       └── weatherService.ts # OpenWeatherMap API
├── tests/                  # Unit & E2E tests
├── App.tsx                 # Main app with Redux & navigation setup
├── app.config.ts           # Expo configuration with plugins
├── tsconfig.json           # TypeScript config with path aliases
└── babel.config.js         # Babel configuration
```

## 🎯 Features

- **Built-in Existential Timers:** Life expectancy, heat death of universe, etc.
- **Custom Timers:** Users can create personalized countdown/countup timers
- **Dark Theme Only:** Minimalist dark UI optimized for existential contemplation
- **Real-time Updates:** Every second counts (literally)
- **Permission Management:** Handles GPS, camera, microphone, notifications
- **Local Data Persistence:** All user data stored locally via AsyncStorage
- **Weather Integration:** Optional OpenWeatherMap API integration
- **Notifications:** Optional reminder notifications for milestones
- **Redux State Management:** Centralized user data, permissions, and settings
- Need a reminder that time waits for no one
- Are procrastinating right now (you are, aren't you?)

## 🛠️ Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development and build tooling
- **TypeScript** - Type-safe existential crisis
- **Expo Router** - File-based navigation

## 📦 Installation

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac only) or Android Emulator

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd existential-countdown
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on a device**
   - Press `i` for iOS simulator (Mac only)
   - Press `a` for Android emulator
   - Scan the QR code with Expo Go app on your physical device

## 🎮 Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Launch on Android emulator
- `npm run ios` - Launch on iOS simulator (Mac only)
- `npm run web` - Launch in web browser (experimental)

## 📂 Project Structure

```
existential-countdown/
├── app/                      # Main application screens
│   ├── _layout.tsx          # Root layout and navigation setup
│   └── index.tsx            # Home screen with timer list
├── components/              # Reusable components
│   ├── CountdownTimer.tsx   # Countdown timer component
│   └── CountupTimer.tsx     # Countup timer component
├── data/                    # App data and configuration
│   └── timers.ts           # Timer definitions and configurations
├── assets/                  # Images and static assets
│   └── *.placeholder       # Placeholder files (replace with actual images)
├── app.json                # Expo configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md              # You are here
```

## 🎨 Customization

### Adding Your Own Timers

Edit [`data/timers.ts`](data/timers.ts) to add new existential countdowns:

```typescript
{
  id: 'unique-id',
  title: 'Your Timer Title',
  description: 'A brief description of what we\'re counting',
  type: 'countdown', // or 'countup'
  targetDate: new Date('2030-01-01'), // for countdown
  // OR
  startDate: new Date('2020-01-01'), // for countup
  unit: 'days', // seconds, minutes, hours, days, weeks, years
  funFact: 'An optional darkly humorous observation',
}
```

### Personalizing Timers

Some timers use the `birthYear` variable in [`data/timers.ts`](data/timers.ts). Update this to your birth year for accurate personal countdowns:

```typescript
const birthYear = 1990; // Change to your birth year
```

### Replacing Asset Placeholders

The app includes placeholder files in the `assets/` directory. Replace these with actual images:

- `icon.png` - App icon (1024x1024 PNG)
- `splash.png` - Splash screen (1242x2436 PNG)
- `adaptive-icon.png` - Android adaptive icon (1024x1024 PNG)
- `favicon.png` - Web favicon (48x48 PNG)

**Design Suggestions:**
- Minimalist clock or hourglass icon
- Dark color scheme (black, dark gray, red accents)
- Simple, bold design that reflects the app's existential theme

## 🌈 Current Timers

The app includes the following pre-configured timers:

1. **Your Statistical Death** - Average life expectancy countdown
2. **Heat Death of the Universe** - The ultimate deadline
3. **Until Monday Morning** - Weekend freedom countdown
4. **Time Wasted on This App** - Seconds you'll never get back
5. **Until Retirement** - Financial freedom (maybe)
6. **Sun Swallows Earth** - Planetary extinction countdown
7. **Since Your Last Coffee** - Caffeine deficit tracker
8. **Until New Year's** - Resolution disappointment countdown
9. **Until Your Next Birthday** - Age increment timer
10. **Time Spent Procrastinating Today** - Productivity avoidance counter

## 🚀 Building for Production

### iOS

1. Build the app:
   ```bash
   npx expo build:ios
   ```

2. Follow Expo's prompts to configure your Apple Developer account

### Android

1. Build the app:
   ```bash
   npx expo build:android
   ```

2. Choose your build type (APK or App Bundle)

For more details, see [Expo's build documentation](https://docs.expo.dev/build/introduction/).

## 🤔 Philosophy

This app embraces the absurdist philosophy that life's meaninglessness can be both humorous and liberating. By quantifying time's passage, we acknowledge its relentless nature while finding humor in our shared human condition.

> "The existentialist says at once, 'I am condemned to be free.' This means that no limits to my freedom can be found except freedom itself or, if you prefer, that we are not free to cease being free."
> — Jean-Paul Sartre (probably didn't have a countdown app)

## 🐛 Troubleshooting

### TypeScript Errors

If you see TypeScript errors after installation:
1. Close and reopen VS Code
2. Run `npm install` again
3. Check that all dependencies are installed correctly

### Expo Not Starting

```bash
# Clear Expo cache
npx expo start -c
```

### Simulator Issues

- **iOS**: Ensure Xcode and Command Line Tools are installed
- **Android**: Verify Android Studio and emulator are properly configured

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Contributing

Contributions are welcome! Feel free to:
- Add new existential timers
- Improve the dark humor
- Fix bugs
- Enhance the UI/UX
- Add more ways to quantify despair

## 💬 Disclaimer

This app is for entertainment purposes only. If contemplating mortality causes genuine distress, please talk to someone. The app developer is not responsible for existential crises, though they're happy you're thinking deeply about time.

Remember: Time is an illusion, but this app makes it a quantifiable one.

---

Made with ⏳ and a healthy dose of existential dread
