import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Pedometer } from 'expo-sensors';

interface LampStepsCounterProps {
  unit: 'steps';
}

export const LampStepsCounter: React.FC<LampStepsCounterProps> = ({ unit }) => {
  const [stepsToLamp, setStepsToLamp] = useState<number>(100); // Simulate 100 steps to next lamp
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  useEffect(() => {
    let subscription: any = null;

    const subscribe = async () => {
      const isAvailable = await Pedometer.isAvailableAsync();
      setIsAvailable(isAvailable);

      if (isAvailable) {
        const end = new Date();
        const start = new Date();
        start.setHours(0, 0, 0, 0);

        const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
        if (pastStepCountResult) {
          setStepsToLamp(100 - (pastStepCountResult.steps % 100));
        }

        subscription = Pedometer.watchStepCount(result => {
          setStepsToLamp(prev => Math.max(0, prev - result.steps));
          if (stepsToLamp - result.steps <= 0) {
            setStepsToLamp(100); // Reset to next lamp
          }
        });
      }
    };

    subscribe();

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  };

  if (!isAvailable) {
    return (
      <View style={styles.container}>
        <Text style={styles.timerText}>N/A</Text>
        <Text style={styles.unitText}>pedometer not available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatNumber(stepsToLamp)}</Text>
      <Text style={styles.unitText}>steps to lamp</Text>
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
    color: '#44ff44',
    fontVariant: ['tabular-nums'],
  },
  unitText: {
    fontSize: 16,
    color: '#888888',
    marginTop: 5,
  },
});