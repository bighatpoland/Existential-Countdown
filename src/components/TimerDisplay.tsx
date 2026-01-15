import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, ActivityIndicator } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { Counter } from '../types';

interface TimerDisplayProps {
  counter: Counter;
}

/**
 * TimerDisplay component
 * Handles real-time countdown/countup calculations
 * Updates every 1000ms (1 second)
 */
export const TimerDisplay: React.FC<TimerDisplayProps> = ({ counter }) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;

    const updateTimer = () => {
      const now = Date.now();
      let difference = 0;

      if (counter.type === 'countdown' && counter.targetDate) {
        difference = Math.max(0, counter.targetDate - now);
      } else if (counter.type === 'countup' && counter.startDate) {
        difference = Math.max(0, now - counter.startDate);
      }

      // Convert milliseconds to requested unit
      let value = 0;
      switch (counter.unit) {
        case 'seconds':
          value = Math.floor(difference / 1000);
          break;
        case 'minutes':
          value = Math.floor(difference / 60000);
          break;
        case 'hours':
          value = Math.floor(difference / 3600000);
          break;
        case 'days':
          value = Math.floor(difference / 86400000);
          break;
        case 'weeks':
          value = Math.floor(difference / 604800000);
          break;
        case 'years':
          value = Math.floor(difference / 31557600000); // 365.25 days average
          break;
      }

      setDisplayValue(value.toLocaleString('en-US'));
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [counter, isActive]);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.value,
          counter.type === 'countdown' ? styles.countdown : styles.countup,
        ]}
      >
        {displayValue}
      </Text>
      <Text style={styles.unit}>{counter.unit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 16,
  },
  value: {
    fontSize: 48,
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
  },
  countdown: {
    color: '#ff4444',
  },
  countup: {
    color: '#44ff44',
  },
  unit: {
    color: '#888888',
    fontSize: 14,
    marginTop: 8,
    textTransform: 'lowercase',
  },
});
