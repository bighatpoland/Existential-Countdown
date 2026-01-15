import axios from 'axios';
import { WeatherData } from '../types';

const OPENWEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export class WeatherService {
  static async getWeather(
    latitude: number,
    longitude: number,
    apiKey: string
  ): Promise<WeatherData | null> {
    try {
      const response = await axios.get(OPENWEATHER_API_URL, {
        params: {
          lat: latitude,
          lon: longitude,
          appid: apiKey,
          units: 'metric', // Celsius
        },
      });

      const { main, weather, wind, name } = response.data;

      return {
        temperature: main.temp,
        condition: weather[0].main,
        humidity: main.humidity,
        windSpeed: wind.speed,
        location: name,
        timestamp: Date.now(),
      };
    } catch (error) {
      console.error('Error fetching weather:', error);
      return null;
    }
  }
}
