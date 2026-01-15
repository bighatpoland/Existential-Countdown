import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from '../src/store';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            contentStyle: {
              backgroundColor: '#000000',
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: 'Existential Countdown',
              headerShown: true,
              headerLargeTitle: true, // iOS large title
            }}
          />
          <Stack.Screen
            name="onboarding"
            options={{
              title: 'Onboarding',
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </Provider>
  );
}
