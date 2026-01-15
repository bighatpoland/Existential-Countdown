import { StorageService } from '../../src/utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserData } from '../../src/types';

jest.mock('@react-native-async-storage/async-storage');

describe('StorageService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('saveUserData', () => {
    it('should save user data to AsyncStorage', async () => {
      const userData: UserData = {
        userId: 'test-user',
        birthYear: 1990,
        dailyHabits: {
          coffeeIntake: 2,
          yawnFrequency: 10,
        },
        customCounters: [],
        savedCounters: [],
      };

      await StorageService.saveUserData(userData);

      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        '@existential_user_data',
        JSON.stringify(userData)
      );
    });
  });

  describe('getUserData', () => {
    it('should retrieve user data from AsyncStorage', async () => {
      const userData: UserData = {
        userId: 'test-user',
        birthYear: 1990,
        dailyHabits: {
          coffeeIntake: 2,
          yawnFrequency: 10,
        },
        customCounters: [],
        savedCounters: [],
      };

      (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(
        JSON.stringify(userData)
      );

      const result = await StorageService.getUserData();

      expect(result).toEqual(userData);
    });

    it('should return null if no data found', async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null);

      const result = await StorageService.getUserData();

      expect(result).toBeNull();
    });
  });
});
