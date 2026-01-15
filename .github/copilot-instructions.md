# Copilot Instructions - Existential Countdown

## Project Overview
React Native countdown/countup timer app using Expo Router and TypeScript. Dark-themed timer display tracks existential events (life expectancy, heat death, etc.) with dark humor. File-based routing in `app/` with Expo Router—no traditional navigation library navigation setup needed.

## Architecture & Data Flow

**Timer System** (`data/timers.ts`):
- Export `Timer` interface defining id, title, description, type ('countdown'|'countup'), targetDate/startDate, unit, funFact
- Two specialized components consume these:
  - `CountdownTimer`: Shows milliseconds difference between now and targetDate divided by unit scale
  - `CountupTimer`: Shows elapsed time from startDate with green color (#44ff44) vs red for countdown (#ff4444)
- Both recalculate every 1000ms via `setInterval` and cleanup on unmount
- Time unit conversion logic duplicated in both components (seconds, minutes, hours, days, weeks, years)

**UI Structure** (`app/index.tsx` → Home screen):
- Maps `timers` array, renders each as a card with title, description, component choice based on type, and optional funFact
- StatusBar + Stack navigator configured in `_layout.tsx` with black (#000000) background, white text, light icons
- No state management library—all state local to components

## Key Patterns & Conventions

1. **Time Calculations**: Use `Math.floor(difference / UNIT_MS)` to convert milliseconds. Use `Math.max(0, value)` to prevent negative counts.
2. **Styling**: Inline StyleSheet objects scoped to each component. Dark palette: #000000 (black), #111111 (card bg), #222222 (borders), #888888 (gray text), #ff4444 (countdown red), #44ff44 (countup green).
3. **TypeScript**: Strict mode enabled. Use `React.FC<Props>` pattern with interface for props on components.
4. **Number Display**: Use `toLocaleString('en-US')` for thousand separators in timer values.
5. **Path Aliases**: `@/*` maps to root directory (`tsconfig.json` baseUrl: "."), use for imports like `@/components/CountdownTimer`.

## Development Workflow

**Start Dev Server**: `npm start` → Press `i` (iOS) or `a` (Android) or scan QR code with Expo Go app.

**Add Timers**: Edit `data/timers.ts`—add to `timers` array. Use `getDate()` helper for relative dates. Calculate age from `birthYear` constant (currently 1990, update as needed).

**Add Components**: Create in `components/` with TypeScript interfaces for props. Follow Timer interface requirements (targetDate for countdown, startDate for countup, unit type).

**Styling**: StyleSheet objects at component bottom. Use established color palette. Numbers should be fontVariant `['tabular-nums']` for alignment.

## Testing Commands

- `npm start` – Launch dev server
- `npm run ios` – Direct iOS launch (Mac only)
- `npm run android` – Direct Android launch
- `npx tsc --noEmit` – Type-check without emit (verify TypeScript)

## Important Files

- [app/index.tsx](app/index.tsx) – Home screen, timer layout
- [data/timers.ts](data/timers.ts) – Timer definitions, edit for customization
- [components/CountdownTimer.tsx](components/CountdownTimer.tsx) – Countdown logic pattern
- [components/CountupTimer.tsx](components/CountupTimer.tsx) – Countup logic pattern
- [app/_layout.tsx](app/_layout.tsx) – Navigation setup, styling inheritance

## Gotchas

- Both timer components recalculate on *every* second—avoid expensive computations in render
- Time unit scaling: weeks use 7-day basis, years use 365.25 average
- Negative time values are clamped to 0 (no "overdue" display)
- Placeholder assets in `assets/` need replacement before production build
- `birthYear` in timers.ts hardcoded to 1990—update for new features dependent on age

