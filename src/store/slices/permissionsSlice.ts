import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PermissionState } from '@/types/index';

const initialState: PermissionState = {
  location: 'undetermined',
  camera: 'undetermined',
  microphone: 'undetermined',
  notifications: 'undetermined',
  motionSensors: 'undetermined',
};

const permissionsSlice = createSlice({
  name: 'permissions',
  initialState,
  reducers: {
    setLocationPermission: (
      state,
      action: PayloadAction<'denied' | 'granted'>
    ) => {
      state.location = action.payload;
    },
    setCameraPermission: (
      state,
      action: PayloadAction<'denied' | 'granted'>
    ) => {
      state.camera = action.payload;
    },
    setMicrophonePermission: (
      state,
      action: PayloadAction<'denied' | 'granted'>
    ) => {
      state.microphone = action.payload;
    },
    setNotificationsPermission: (
      state,
      action: PayloadAction<'denied' | 'granted'>
    ) => {
      state.notifications = action.payload;
    },
    setMotionSensorsPermission: (
      state,
      action: PayloadAction<'denied' | 'granted'>
    ) => {
      state.motionSensors = action.payload;
    },
    loadPermissions: (state, action: PayloadAction<PermissionState>) => {
      return action.payload;
    },
  },
});

export const {
  setLocationPermission,
  setCameraPermission,
  setMicrophonePermission,
  setNotificationsPermission,
  setMotionSensorsPermission,
  loadPermissions,
} = permissionsSlice.actions;

export default permissionsSlice.reducer;
