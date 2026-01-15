# Quick Start Guide

## ⚡ Get Running in 3 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Dev Server
```bash
npm start
```

### Step 3: Run on Device
- **iOS**: Press `i` in terminal
- **Android**: Press `a` in terminal
- **Physical Device**: Scan QR code with Expo Go app

## 🎮 What to Try First

1. Navigate between **Home**, **Counters**, and **Settings** tabs
2. Go to **Counters** → Click **+ Add Counter** to create a custom timer
3. Go to **Settings** → Toggle notifications and weather

## 📱 Built-in Timers

The app includes existential counters like:
- Heat death of the universe ☀️💀
- Your estimated life expectancy ⏳
- Time since you were born 🎂
- Age of the universe 🌌

Find them in `src/data/timers.ts` - customize for your dark sense of humor!

## 🔧 Common Tasks

### Add Your OpenWeatherMap API Key
Create `.env` file:
```env
OPENWEATHER_API_KEY=your_api_key_here
```

Get free API key at: https://openweathermap.org/api

### Modify Timer Colors
Edit `src/utils/theme.ts`:
```typescript
#ff4444 = Countdown color (red)
#44ff44 = Countup color (green)
#ffbb00 = Accent color (gold)
```

### Add a New Screen Tab
1. Create component in `src/screens/YourScreen.tsx`
2. Add to Tab.Navigator in `App.tsx`:
```tsx
<Tab.Screen
  name="YourTab"
  component={YourScreen}
  options={{ title: "Your Title" }}
/>
```

### Store Custom Data
Use Redux actions:
```typescript
dispatch(addCustomCounter(counterObject));
dispatch(setLocationPermission('granted'));
dispatch(setDarkMode(false));
```

## 📚 Documentation

- **[SETUP.md](SETUP.md)** - Detailed setup & development
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - What was built
- **[README.md](README.md)** - Project overview

## 🐛 Troubleshooting

**Metro bundler issues?**
```bash
npm start -- --reset-cache
```

**Port 8081 in use?**
```bash
lsof -ti:8081 | xargs kill -9
```

**Clear AsyncStorage?**
```javascript
// In your component
import AsyncStorage from '@react-native-async-storage/async-storage';
AsyncStorage.clear();
```

## 📦 Tech Stack at a Glance

| Layer | Tech |
|-------|------|
| Framework | React Native + Expo |
| State | Redux Toolkit |
| UI | React Native Paper |
| Nav | React Navigation |
| Storage | AsyncStorage |
| Tests | Jest + Detox |
| Types | TypeScript |

## 🚀 Production Ready

Your app is fully configured for:
- ✅ iOS & Android deployment
- ✅ Unit & E2E testing
- ✅ Dark theme optimization
- ✅ Permission handling
- ✅ Local data persistence
- ✅ Weather API integration
- ✅ Notification support

## 📝 Next: Deep Dive

Ready to build features? Check [SETUP.md](SETUP.md) for:
- Adding permissions
- Integrating new APIs
- Building custom components
- Testing strategies
- Production deployment

---

**Enjoy tracking the end of existence! ☀️💀**
