import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { darkTheme } from './src/utils/theme';
import { PermissionService } from './src/utils/permissions';
import { StorageService } from './src/utils/storage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './src/store';
import { HomeScreen } from './src/screens/HomeScreen';
import { CountersScreen } from './src/screens/CountersScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // Load persisted data from storage
      const userData = await StorageService.getUserData();
      const settings = await StorageService.getSettings();
      const permissions = await StorageService.getPermissions();

      // Request critical permissions
      await PermissionService.requestLocationPermission(dispatch);
      await PermissionService.requestNotificationPermission(dispatch);

      console.log('App initialized successfully');
    } catch (error) {
      console.error('Error initializing app:', error);
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarStyle: {
            backgroundColor: '#111111',
            borderTopColor: '#222222',
          },
          tabBarActiveTintColor: '#44ff44',
          tabBarInactiveTintColor: '#888888',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Existential Countdown',
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Counters"
          component={CountersScreen}
          options={{
            title: 'My Counters',
            tabBarLabel: 'Counters',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Settings',
            tabBarLabel: 'Settings',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={darkTheme}>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
