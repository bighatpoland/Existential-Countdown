import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ProcrastinationCounterProps {
  unit: 'phrases';
}

export const ProcrastinationCounter: React.FC<ProcrastinationCounterProps> = ({ unit }) => {
  const [phrasesCount, setPhrasesCount] = useState<number>(0);

  // In real implementation, use speech recognition to detect phrases
  // For now, simulate with a button

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatNumber(phrasesCount)}</Text>
      <Text style={styles.unitText}>procrastination phrases</Text>
      <TouchableOpacity style={styles.button} onPress={() => setPhrasesCount(prev => prev + 1)}>
        <Text style={styles.buttonText}>I said it again</Text>
      </TouchableOpacity>
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
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});