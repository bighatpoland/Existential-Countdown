import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Existential Countdown',
  slug: 'existential-countdown',
  version: '1.0.0',
  scheme: 'existentialcountdown',
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#000000',
    },
    package: 'com.existentialcountdown.app',
  },
  web: {
    bundler: 'metro',
  },
  plugins: [
    [
      'expo-notifications',
      {
        icons: ['./assets/notification-icon.png'],
        color: '#44ff44',
      },
    ],
    [
      'expo-location',
      {
        locationAlwaysAndWhenInUsePermission:
          'Allow Existential Countdown to access your location.',
      },
    ],
    ['expo-camera', { cameraPermission: 'Allow camera access' }],
  ],
});
