# Development Setup Guide

## Prerequisites

- Node.js 18+ and npm
- Expo CLI: `npm install -g expo-cli`
- iOS Simulator (Mac) or Android Emulator
- Expo Go app (for quick testing on physical devices)

## Initial Setup

### 1. Install Dependencies

```bash
npm install
```

This installs all required packages including:
- React Native + Expo
- Redux Toolkit for state management
- React Native Paper for UI components
- Permissions & storage libraries
- Testing frameworks (Jest, Detox)

### 2. Environment Configuration

Create a `.env` file in the project root:

```env
OPENWEATHER_API_KEY=your_openweathermap_api_key
```

To get a free API key:
1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key from your account dashboard

### 3. iOS Setup (Mac Only)

```bash
npm run ios
```

Or manually:
```bash
npx expo run:ios
```

### 4. Android Setup

```bash
npm run android
```

Or manually:
```bash
npx expo run:android
```

### 5. Development Server

```bash
npm start
```

Then:
- Press `i` for iOS Simulator
- Press `a` for Android Emulator
- Scan QR code with Expo Go app

## Project Structure Explained

```
src/
├── components/
│   ├── CountdownTimerCard.tsx      # Countdown timer UI component
│   └── CountupTimerCard.tsx        # Countup timer UI component
├── screens/
│   ├── HomeScreen.tsx              # Main home screen
│   ├── CountersScreen.tsx          # Custom counters management
│   └── SettingsScreen.tsx          # App settings
├── store/
│   ├── index.ts                    # Redux store configuration
│   └── slices/
│       ├── userSlice.ts            # User data & custom counters
│       ├── permissionsSlice.ts     # App permissions state
│       └── settingsSlice.ts        # App settings state
├── types/
│   └── index.ts                    # TypeScript interfaces
└── utils/
    ├── theme.ts                    # Dark theme configuration
    ├── storage.ts                  # AsyncStorage service
    ├── permissions.ts              # Permission requests & location
    └── weatherService.ts           # OpenWeatherMap integration
```

## Adding Features

### Add a Custom Timer

Edit `src/screens/CountersScreen.tsx` and modify the `handleAddCounter` function with desired properties from the `Counter` interface in `src/types/index.ts`.

### Add a Built-in Timer

1. Create a new `Counter` object in a constants file
2. Display it in `HomeScreen.tsx`
3. Add to `savedCounters` when user selects it

### Request New Permission

1. Add permission state to `PermissionState` in `src/types/index.ts`
2. Create a reducer in `src/store/slices/permissionsSlice.ts`
3. Add request method in `src/utils/permissions.ts`
4. Call from app initialization in `App.tsx`

## Testing

### Run Unit Tests

```bash
npm test
```

### Run E2E Tests (Detox)

First build the app for testing:
```bash
detox build-framework-cache
detox build-framework --framework ios --version
```

Then run tests:
```bash
npm run test:e2e
```

## Debugging

### Console Logs

All `console.log()` statements appear in the terminal running `npm start`.

### Redux DevTools

For Redux debugging, install Redux DevTools browser extension and enable in store configuration (optional advanced setup).

### Network Requests

For debugging API calls (like weather), check network tab or add logging to `src/utils/weatherService.ts`.

## Building for Production

### Using Expo EAS

```bash
npm install -g eas-cli
eas login
eas build --platform ios
eas build --platform android
eas submit --platform ios   # Submit to App Store
eas submit --platform android # Submit to Google Play
```

### Manual Build

```bash
npx expo export
```

Then follow platform-specific build instructions.

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 8081
lsof -ti:8081 | xargs kill -9
```

### Metro Bundler Issues

```bash
npm start -- --reset-cache
```

### Permissions Not Working

Check app permissions in device settings:
- iOS: Settings > Existential Countdown > Permissions
- Android: Settings > Apps > Existential Countdown > Permissions

### AsyncStorage Issues

Clear storage cache:
```javascript
// In DevTools or app code
import AsyncStorage from '@react-native-async-storage/async-storage';
AsyncStorage.clear();
```

## Environment Notes

- **Dark Theme Only:** The app is optimized for dark mode. All colors use dark palette.
- **Local First:** All data stored locally via AsyncStorage for privacy.
- **Optional Cloud:** Weather API is optional and requires API key.
- **No Authentication:** Current implementation doesn't require user login.

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [React Navigation Docs](https://reactnavigation.org/)
- [React Native Paper Docs](https://callstack.github.io/react-native-paper/)
