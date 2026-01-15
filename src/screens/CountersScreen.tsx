import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-native-paper';
import { RootState, AppDispatch } from '../store';
import {
  addCustomCounter,
  removeCustomCounter,
} from '../store/slices/userSlice';
import { Counter } from '../types';
import { CountdownTimerCard } from '../components/CountdownTimerCard';

export const CountersScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  const handleAddCounter = () => {
    const newCounter: Counter = {
      id: `counter_${Date.now()}`,
      title: 'New Counter',
      description: 'A custom countdown timer',
      type: 'countdown',
      targetDate: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
      unit: 'days',
      isCustom: true,
      createdAt: Date.now(),
    };
    dispatch(addCustomCounter(newCounter));
  };

  const handleRemoveCounter = (id: string) => {
    dispatch(removeCustomCounter(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Counters</Text>

      <FlatList
        data={user.customCounters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.counterItem}>
            <CountdownTimerCard
              title={item.title}
              description={item.description}
              timeRemaining="Calculating..."
              funFact={item.funFact}
            />
            <Button
              mode="outlined"
              onPress={() => handleRemoveCounter(item.id)}
              labelStyle={styles.deleteButtonText}
              style={styles.deleteButton}
            >
              Delete
            </Button>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No custom counters yet</Text>
        }
      />

      <Button
        mode="contained"
        onPress={handleAddCounter}
        buttonColor="#44ff44"
        textColor="#000000"
        style={styles.addButton}
      >
        + Add Counter
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 16,
  },
  heading: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  counterItem: {
    marginBottom: 16,
  },
  deleteButton: {
    borderColor: '#ff4444',
  },
  deleteButtonText: {
    color: '#ff4444',
  },
  addButton: {
    marginTop: 16,
    paddingVertical: 8,
  },
  emptyText: {
    color: '#888888',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
