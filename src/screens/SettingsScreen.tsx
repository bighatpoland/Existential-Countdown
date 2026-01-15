import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'react-native-paper';
import { RootState, AppDispatch } from '../store';
import {
  setDarkMode,
  setNotificationsEnabled,
  setWeatherEnabled,
} from '../store/slices/settingsSlice';
import { StorageService } from '../utils/storage';

export const SettingsScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const settings = useSelector((state: RootState) => state.settings);

  const handleDarkModeToggle = async (value: boolean) => {
    dispatch(setDarkMode(value));
    await StorageService.saveSettings({ ...settings, darkMode: value });
  };

  const handleNotificationsToggle = async (value: boolean) => {
    dispatch(setNotificationsEnabled(value));
    await StorageService.saveSettings({
      ...settings,
      notificationsEnabled: value,
    });
  };

  const handleWeatherToggle = async (value: boolean) => {
    dispatch(setWeatherEnabled(value));
    await StorageService.saveSettings({ ...settings, weatherEnabled: value });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch
          value={settings.darkMode}
          onValueChange={handleDarkModeToggle}
          color="#44ff44"
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Notifications</Text>
        <Switch
          value={settings.notificationsEnabled}
          onValueChange={handleNotificationsToggle}
          color="#44ff44"
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Weather Integration</Text>
        <Switch
          value={settings.weatherEnabled}
          onValueChange={handleWeatherToggle}
          color="#44ff44"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 16,
  },
  heading: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#111111',
    borderColor: '#222222',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
  },
  settingLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});
