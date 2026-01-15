import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CountupTimerProps {
  startDate: Date;
  unit: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'years';
}

export const CountupTimer: React.FC<CountupTimerProps> = ({ startDate, unit }) => {
  const [timePassed, setTimePassed] = useState<number>(0);

  useEffect(() => {
    const calculateTimePassed = () => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();
      
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
      
      setTimePassed(Math.max(0, value));
    };

    calculateTimePassed();
    const interval = setInterval(calculateTimePassed, 1000);

    return () => clearInterval(interval);
  }, [startDate, unit]);

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  };

  return (
    <View style={styles.container} accessibilityLabel={`Countup timer showing ${formatNumber(timePassed)} ${unit} elapsed`}>
      <Text style={styles.number} accessibilityRole="text">{formatNumber(timePassed)}</Text>
      <Text style={styles.unit} accessibilityRole="text">{unit} elapsed</Text>
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
    color: '#44ff44',
    fontSize: 48,
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
    textShadowColor: '#44ff44',
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
