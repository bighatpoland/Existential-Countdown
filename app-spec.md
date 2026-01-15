## Development Plan
1. **Setup Project:**
   - `npx create-expo-app ExistentialCountdown --template blank`.
   - Install dependencies: expo install [list above]. Add iOS-specific libs like react-native-ios-kit if needed for HIG compliance.

2. **Implement Core Components:**
   - App.js: Root navigation (React Navigation). Use platform modules for iOS-specific tab bars or navigation bars styled per HIG.
   - DashboardScreen: FlatList of CounterWidgets. On iOS, enable large titles and search bars if applicable.
   - CounterWidget: Component with useEffect for real-time updates. Apply iOS vibrancy effects for text overlays.

3. **Sensor Integrations:**
   - Use useState/useEffect hooks for sensor data. Handle iOS privacy manifests for sensor access.

4. **Testing:**
   - Unit: Test formulas.
   - E2E: Simulate user flows. Test on iOS simulators for HIG adherence (e.g., no overlapping safe areas).

5. **Polish:**
   - Animations: Lottie for ticking clocks. Use spring animations on iOS for natural feel.
   - Accessibility: VoiceOver support for counters. Follow HIG accessibility guidelines, including dynamic type and color contrast.

## Potential Challenges
- Permissions: Handle denials gracefully (fallback to estimates). On iOS, comply with App Privacy Report and HIG for user trust.
- Battery Drain: Optimize sensor usage.
- App Store Review: Ensure humor doesn't violate guidelines (frame as "fun calculator"). For iOS, strictly follow HIG to avoid rejection; test for dark mode, accessibility, and performance.

This spec is designed for VS Code Copilot: Copy-paste into a new file (e.g., app-spec.md or as comments in App.js), and use Copilot to generate code snippets, components, and functions step-by-step. For example, start with "// Generate React Native component for Coffee Counter with iOS HIG styling" and let Copilot suggest the code.</content>
<parameter name="filePath">/Users/konstancjatanjga/Documents/Coding/Existential-countdown/app-spec.md