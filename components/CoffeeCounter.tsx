import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CoffeeCounterProps {
  unit: 'coffees';
  birthYear: number;
  coffeeIntake: number;
}

export const CoffeeCounter: React.FC<CoffeeCounterProps> = ({ unit, birthYear, coffeeIntake }) => {
  const [coffeesLeft, setCoffeesLeft] = useState<number>(0);

  useEffect(() => {
    const calculateCoffeesLeft = () => {
      const currentYear = new Date().getFullYear();
      const currentAge = currentYear - birthYear;
      const lifeExpectancy = 80;
      const remainingYears = lifeExpectancy - currentAge;
      const dailyIntake = coffeeIntake;
      const spillFactor = 0.1; // 10% spills
      const totalDays = remainingYears * 365;
      const totalCoffees = totalDays * dailyIntake * (1 - spillFactor);
      setCoffeesLeft(Math.max(0, Math.floor(totalCoffees)));
    };

    calculateCoffeesLeft();
    // Update daily
    const interval = setInterval(calculateCoffeesLeft, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [birthYear, coffeeIntake]);

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  };

  return (
    <View style={styles.container} accessibilityLabel={`Coffee counter showing ${formatNumber(coffeesLeft)} coffees left in your lifetime`}>
      <Text style={styles.timerText} accessibilityRole="text">{formatNumber(coffeesLeft)}</Text>
      <Text style={styles.unitText}>coffees left</Text>
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