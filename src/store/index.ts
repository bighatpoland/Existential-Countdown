import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import permissionsReducer from './slices/permissionsSlice';
import settingsReducer from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    permissions: permissionsReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
