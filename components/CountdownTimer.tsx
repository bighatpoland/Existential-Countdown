import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CountdownTimerProps {
  targetDate: Date;
  unit: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'years';
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, unit }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      let value = 0;
      switch (unit) {
        case 'seconds':
          value = Math.floor(difference / 1000);
          break;
        case 'minutes':
          value = Math.floor(difference / (1000 * 60));
          break;
        case 'hours':
          value = Math.floor(difference / (1000 * 60 * 60));
          break;
        case 'days':
          value = Math.floor(difference / (1000 * 60 * 60 * 24));
          break;
        case 'weeks':
          value = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
          break;
        case 'years':
          value = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
          break;
      }
      
      setTimeLeft(Math.max(0, value));
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate, unit]);

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  };

  return (
    <View style={styles.container} accessibilityLabel={`Countdown timer showing ${formatNumber(timeLeft)} ${unit} remaining`}>
      <Text style={styles.number} accessibilityRole="text">{formatNumber(timeLeft)}</Text>
      <Text style={styles.unit} accessibilityRole="text">{unit} remaining</Text>
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
