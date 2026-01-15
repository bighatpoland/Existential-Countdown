import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getSunset } from 'sunrise-sunset-js';

interface SunsetCountdownProps {
  latitude?: number;
  longitude?: number;
  unit: 'hours' | 'minutes';
}

export const SunsetCountdown: React.FC<SunsetCountdownProps> = ({ latitude, longitude, unit }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (!latitude || !longitude) {
      // Default to a general location, e.g., New York for estimate
      const defaultLat = 40.7128;
      const defaultLon = -74.0060;
      const now = new Date();
      const sunset = getSunset(defaultLat, defaultLon, now);
      if (sunset && sunset > now) {
        const difference = sunset.getTime() - now.getTime();
        const value = unit === 'hours' ? Math.floor(difference / (1000 * 60 * 60)) : Math.floor(difference / (1000 * 60));
        setTimeLeft(Math.max(0, value));
      } else {
        setTimeLeft(0);
      }
      return;
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      const sunset = getSunset(latitude, longitude, now);
      
      if (!sunset || sunset < now) {
        // Next day or no sunset
        const tomorrow = new Date(now);
        tomorrow.setDate(now.getDate() + 1);
        const nextSunset = getSunset(latitude, longitude, tomorrow);
        if (nextSunset) {
          const difference = nextSunset.getTime() - now.getTime();
          const value = unit === 'hours' ? Math.floor(difference / (1000 * 60 * 60)) : Math.floor(difference / (1000 * 60));
          setTimeLeft(Math.max(0, value));
        } else {
          setTimeLeft(0);
        }
      } else {
        const difference = sunset.getTime() - now.getTime();
        const value = unit === 'hours' ? Math.floor(difference / (1000 * 60 * 60)) : Math.floor(difference / (1000 * 60));
        setTimeLeft(Math.max(0, value));
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [latitude, longitude, unit]);

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  };

  return (
    <View style={styles.container} accessibilityLabel={`Sunset countdown showing ${formatNumber(timeLeft)} ${unit} remaining`}>
      <Text style={styles.number} accessibilityRole="text">{formatNumber(timeLeft)}</Text>
      <Text style={styles.unit} accessibilityRole="text">{unit} until sunset</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#0a0a0a',
    borderRadius: 8,
  },
  number: {
    color: '#ff4444',
    fontSize: 48,
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
    textShadowColor: '#ff4444',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  unit: {
    color: '#888888',
    fontSize: 14,
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});