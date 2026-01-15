# Architecture Overview

## App Flow Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    App.tsx (Root)                        │
│  Provider (Redux) → PaperProvider → NavigationContainer │
└─────────────────────────────────────────────────────────┘
                           │
                ┌──────────┴──────────┐
                │                     │
        ┌───────▼────────┐   ┌────────▼────────┐
        │ BottomTabNav   │   │  Redux Store    │
        │                │   │                 │
        │ ├─ Home        │   │ ├─ userSlice    │
        │ ├─ Counters    │   │ ├─ permissions  │
        │ └─ Settings    │   │ └─ settings     │
        └────────────────┘   └─────────────────┘
```

## Redux State Tree

```
Store
├── user {
│   ├── userId: string
│   ├── birthYear: number
│   ├── location?: { latitude, longitude, timestamp }
│   ├── customCounters: Counter[]
│   └── savedCounters: string[] (IDs)
├── permissions {
│   ├── location: 'undetermined' | 'denied' | 'granted'
│   ├── camera: ...
│   ├── microphone: ...
│   ├── notifications: ...
│   └── motionSensors: ...
└── settings {
    ├── darkMode: boolean
    ├── themeName: 'dark' | 'custom-dark'
    ├── notificationsEnabled: boolean
    ├── weatherEnabled: boolean
    └── openWeatherMapApiKey?: string
}
```

## Data Flow Example: Adding a Custom Counter

```
User clicks "+ Add Counter" in CountersScreen
                    │
                    ▼
dispatch(addCustomCounter(newCounter))
                    │
                    ▼
userSlice.addCustomCounter action
                    │
                    ▼
Redux updates state.user.customCounters
                    │
                    ▼
useSelector(state => state.user) re-renders CountersScreen
                    │
                    ▼
StorageService.saveUserData() persists to AsyncStorage
```

## Component Hierarchy

```
App (Redux Provider)
└── AppNavigator
    └── Tab.Navigator
        ├── HomeScreen
        │   └── (renders built-in timers)
        ├── CountersScreen
        │   ├── CountdownTimerCard
        │   └── CountupTimerCard
        └── SettingsScreen
            └── (toggles & settings)
```

## Services & Utilities

```
src/utils/
├── theme.ts
│   └── Exports: darkTheme, customDarkTheme, themeConfig
├── storage.ts
│   └── Class: StorageService
│       ├── saveUserData()
│       ├── getUserData()
│       ├── saveSettings()
│       ├── savePermissions()
│       └── clearAll()
├── permissions.ts
│   └── Class: PermissionService
│       ├── requestLocationPermission()
│       ├── requestNotificationPermission()
│       └── getCurrentLocation()
└── weatherService.ts
    └── Class: WeatherService
        └── getWeather(lat, lon, apiKey)
```

## Data Persistence Flow

```
User Data (Redux)
      │
      ▼
dispatch(action)
      │
      ▼
   Reducer
      │
      ├─────────────────────────┐
      ▼                         ▼
   UI Updates          StorageService.save*()
                              │
                              ▼
                        AsyncStorage
                              │
                              ▼
                          Device Storage
                        (JSON files)
```

## Permission Request Flow

```
App.tsx (useEffect)
      │
      ├─ PermissionService.requestLocationPermission()
      │       └─ Location.requestForegroundPermissionsAsync()
      │       └─ dispatch(setLocationPermission())
      │
      └─ PermissionService.requestNotificationPermission()
              └─ Notifications.requestPermissionsAsync()
              └─ dispatch(setNotificationsPermission())
                      │
                      ▼
            Redux updates permissions state
```

## Timer Display Update Cycle

```
Counter passed to TimerDisplay component
              │
              ▼
        useEffect() hook
              │
    ┌─────────┴────────┐
    │                  │
Initial Render      setInterval(1000ms)
    │                  │
    ▼                  ▼
Calculate time    updateTimer()
    │                  │
    │         ┌────────┴────────┐
    │         ▼                 ▼
    │    If countdown:      If countup:
    │    now - targetDate   now - startDate
    │         │                  │
    └─────────┴──────────────────┘
              │
              ▼
      Convert to unit (days, years, etc)
              │
              ▼
        setDisplayValue()
              │
              ▼
        Re-render with new value
```

## Permission State Diagram

```
User Launch App
      │
      ▼
Check savedPermissions from Storage
      │
  ┌───┴────┐
  │        │
Found   Not Found
  │        │
  ▼        ▼
Load   Request (native dialog)
  │        │
  └───┬────┘
      │
      ▼
Store in Redux (setLocationPermission, etc)
      │
      ▼
Save to Storage (StorageService.savePermissions)
      │
      ▼
Available for app features
```

## Error Handling Strategy

```
API Call / Permission Request
              │
      ┌───────┴───────┐
      │               │
    Success        Error
      │               │
      ▼               ▼
  Update State   Console.error()
      │          (Don't crash app)
      ▼               │
Persist Data    Fallback/Retry
                      │
                      ▼
                  User notification
                 (optional toast/alert)
```

## Environment & Configuration

```
.env
├── OPENWEATHER_API_KEY

app.config.ts
├── App metadata
├── Permissions
├── Plugins (notifications, location, camera)
└── Platform configs (iOS, Android)

tsconfig.json
├── Compiler options
└── Path aliases (@/*)

babel.config.js
└── Babel presets & plugins
```

## Testing Architecture

```
src/
└── Component/Service

tests/
├── setup.ts (Jest mocks)
├── utils/
│   └── storage.test.ts
└── components/ (future)
    └── TimerDisplay.test.tsx
```

## Key Design Decisions

1. **Redux for State**: Centralized state for user data, permissions, and settings
2. **AsyncStorage for Persistence**: Simple key-value storage for user data
3. **Dark Theme Only**: Optimized for existential dread, no light mode
4. **Component-Based**: Modular, reusable timer components
5. **Services Pattern**: Isolated business logic in utility classes
6. **TypeScript Strict**: Full type safety with interfaces
7. **Bottom-Tab Navigation**: Intuitive 3-tab interface (Home, Counters, Settings)
8. **Optional APIs**: Weather integration is opt-in
9. **Privacy-First**: All data stored locally, no mandatory cloud
10. **Testable**: Mocked services and Redux reducers for unit tests

## Performance Considerations

- **Timer Updates**: Efficient `setInterval` with proper cleanup
- **Redux**: Reselect patterns used implicitly via hooks
- **Storage**: Async operations don't block UI thread
- **Navigation**: Bottom-tab navigator is lightweight
- **Rendering**: Functional components with React.memo where needed
