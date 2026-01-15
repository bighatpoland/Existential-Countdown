import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSettings } from '@/types/index';

const initialState: AppSettings = {
  darkMode: true,
  themeName: 'dark',
  notificationsEnabled: true,
  weatherEnabled: false,
  openWeatherMapApiKey: undefined,
  onboardingCompleted: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    setThemeName: (state, action: PayloadAction<'dark' | 'custom-dark'>) => {
      state.themeName = action.payload;
    },
    setNotificationsEnabled: (state, action: PayloadAction<boolean>) => {
      state.notificationsEnabled = action.payload;
    },
    setWeatherEnabled: (state, action: PayloadAction<boolean>) => {
      state.weatherEnabled = action.payload;
    },
    setOpenWeatherMapApiKey: (state, action: PayloadAction<string>) => {
      state.openWeatherMapApiKey = action.payload;
    },
    setOnboardingCompleted: (state, action: PayloadAction<boolean>) => {
      state.onboardingCompleted = action.payload;
    },
    loadSettings: (state, action: PayloadAction<AppSettings>) => {
      return action.payload;
    },
  },
});

export const {
  setDarkMode,
  setThemeName,
  setNotificationsEnabled,
  setWeatherEnabled,
  setOpenWeatherMapApiKey,
  setOnboardingCompleted,
  loadSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;
