import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import { useDispatch } from 'react-redux';
import {
  setLocationPermission,
  setCameraPermission,
  setMicrophonePermission,
  setNotificationsPermission,
  setMotionSensorsPermission,
} from '../store/slices/permissionsSlice';
import { AppDispatch } from '../store';

export class PermissionService {
  static async requestLocationPermission(
    dispatch: AppDispatch
  ): Promise<boolean> {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      const granted = status === 'granted';
      dispatch(
        setLocationPermission(granted ? 'granted' : 'denied')
      );
      return granted;
    } catch (error) {
      console.error('Error requesting location permission:', error);
      dispatch(setLocationPermission('denied'));
      return false;
    }
  }

  static async requestNotificationPermission(
    dispatch: AppDispatch
  ): Promise<boolean> {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      const granted = status === 'granted';
      dispatch(
        setNotificationsPermission(granted ? 'granted' : 'denied')
      );

      if (granted) {
        Notifications.setNotificationHandler({
          handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: false,
          }),
        });
      }

      return granted;
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      dispatch(setNotificationsPermission('denied'));
      return false;
    }
  }

  static async requestCameraPermission(): Promise<boolean> {
    try {
      // Camera permissions handled through expo-camera
      return true;
    } catch (error) {
      console.error('Error requesting camera permission:', error);
      return false;
    }
  }

  static async getCurrentLocation(): Promise<{
    latitude: number;
    longitude: number;
  } | null> {
    try {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
    } catch (error) {
      console.error('Error getting current location:', error);
      return null;
    }
  }
}
