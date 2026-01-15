import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData, Counter } from '@/types/index';

const initialState: UserData = {
  userId: '',
  birthYear: 1990,
  username: undefined,
  dailyHabits: {
    coffeeIntake: 0,
    yawnFrequency: 0,
  },
  customCounters: [],
  savedCounters: ['life-expectancy', 'heat-death', 'weekend-over', 'time-wasted-phone', 'retirement', 'earth-sun', 'coffee-needed', 'new-years', 'birthday', 'procrastination'], // all by default
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setBirthYear: (state, action: PayloadAction<number>) => {
      state.birthYear = action.payload;
    },
    setDailyHabits: (state, action: PayloadAction<{ coffeeIntake: number; yawnFrequency: number }>) => {
      state.dailyHabits = action.payload;
    },
    setLocation: (
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>
    ) => {
      state.location = {
        ...action.payload,
        timestamp: Date.now(),
      };
    },
    addCustomCounter: (state, action: PayloadAction<Counter>) => {
      state.customCounters.push(action.payload);
    },
    removeCustomCounter: (state, action: PayloadAction<string>) => {
      state.customCounters = state.customCounters.filter(
        (c: Counter) => c.id !== action.payload
      );
    },
    toggleSavedCounter: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.savedCounters.indexOf(id);
      if (index > -1) {
        state.savedCounters.splice(index, 1);
      } else {
        state.savedCounters.push(id);
      }
    },
    loadUserData: (state, action: PayloadAction<UserData>) => {
      return action.payload;
    },
  },
});

export const {
  setUserId,
  setUsername,
  setBirthYear,
  setDailyHabits,
  setLocation,
  addCustomCounter,
  removeCustomCounter,
  toggleSavedCounter,
  loadUserData,
} = userSlice.actions;

export default userSlice.reducer;
