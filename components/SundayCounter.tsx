import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SundayCounterProps {
  unit: 'sundays';
}

export const SundayCounter: React.FC<SundayCounterProps> = ({ unit }) => {
  const [sundaysLeft, setSundaysLeft] = useState<number>(0);

  useEffect(() => {
    const calculateSundaysLeft = () => {
      const birthYear = 1990; // From store
      const currentYear = new Date().getFullYear();
      const currentAge = currentYear - birthYear;
      const lifeExpectancy = 80;
      const remainingYears = lifeExpectancy - currentAge;
      const weeksLeft = remainingYears * 52;
      const laundryWasteFactor = 0.05; // 5% wasted on laundry
      const sundaysLeft = weeksLeft * (1 - laundryWasteFactor);
      setSundaysLeft(Math.max(0, Math.floor(sundaysLeft)));
    };

    calculateSundaysLeft();
    // Update yearly
    const interval = setInterval(calculateSundaysLeft, 365 * 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatNumber(sundaysLeft)}</Text>
      <Text style={styles.unitText}>Sundays left</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff4444',
    fontVariant: ['tabular-nums'],
  },
  unitText: {
    fontSize: 16,
    color: '#888888',
    marginTop: 5,
  },
});