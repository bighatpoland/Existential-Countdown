import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';

export const CountdownTimerCard: React.FC<{
  title: string;
  description: string;
  timeRemaining: string;
  funFact?: string;
}> = ({ title, description, timeRemaining, funFact }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.countdown}>{timeRemaining}</Text>
        {funFact && <Text style={styles.funFact}>{funFact}</Text>}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111111',
    borderColor: '#222222',
    borderWidth: 1,
    marginBottom: 12,
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: '#888888',
    fontSize: 14,
    marginBottom: 12,
  },
  countdown: {
    color: '#ff4444',
    fontSize: 32,
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
    marginVertical: 12,
  },
  funFact: {
    color: '#44ff44',
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 8,
  },
});
