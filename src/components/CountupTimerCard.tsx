import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';

export const CountupTimerCard: React.FC<{
  title: string;
  description: string;
  timeElapsed: string;
  funFact?: string;
}> = ({ title, description, timeElapsed, funFact }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.countup}>{timeElapsed}</Text>
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
  countup: {
    color: '#44ff44',
    fontSize: 32,
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
    marginVertical: 12,
  },
  funFact: {
    color: '#ffbb00',
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 8,
  },
});
