import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../src/store';
import { setBirthYear, setUsername, setDailyHabits } from '../src/store/slices/userSlice';
import { setOnboardingCompleted } from '../src/store/slices/settingsSlice';

type OnboardingStep = 'splash' | 'age' | 'habits' | 'permissions' | 'profile';

export default function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('splash');
  const [age, setAge] = useState('');
  const [coffee, setCoffee] = useState(0);
  const [yawns, setYawns] = useState(0);
  const [username, setUsernameInput] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (currentStep === 'splash') {
      const timer = setTimeout(() => setCurrentStep('age'), 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const handleAgeSubmit = () => {
    const birthYear = new Date().getFullYear() - parseInt(age);
    dispatch(setBirthYear(birthYear));
    setCurrentStep('habits');
  };

  const handleHabitsSubmit = () => {
    dispatch(setDailyHabits({ coffeeIntake: coffee, yawnFrequency: yawns }));
    setCurrentStep('permissions');
  };

  const handlePermissionsSubmit = async () => {
    // Mock permissions request
    setCurrentStep('profile');
  };

  const handleProfileSubmit = () => {
    if (username.trim()) {
      dispatch(setUsername(username.trim()));
    }
    dispatch(setOnboardingCompleted(true));
    router.replace('/');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'splash':
        return (
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#ffffff" />
            <Text style={styles.title}>Loading your existential dread...</Text>
            <Text style={styles.subtitle}>Just kidding, it's just a clock.</Text>
          </View>
        );
      case 'age':
        return (
          <View style={styles.center}>
            <Text style={styles.title}>How old are you?</Text>
            <Text style={styles.subtitle}>Don't worry, we won't judge... much.</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your age"
              placeholderTextColor="#888888"
              keyboardType="numeric"
              value={age}
              onChangeText={setAge}
            />
            <TouchableOpacity style={styles.button} onPress={handleAgeSubmit} disabled={!age}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        );
      case 'habits':
        return (
          <View style={styles.center}>
            <Text style={styles.title}>Daily Habits</Text>
            <Text style={styles.subtitle}>How much coffee do you drink per day?</Text>
            <TextInput
              style={styles.input}
              placeholder="Number of cups"
              placeholderTextColor="#888888"
              keyboardType="numeric"
              value={coffee.toString()}
              onChangeText={(text) => setCoffee(parseInt(text) || 0)}
            />
            <Text style={styles.subtitle}>How many times do you yawn daily?</Text>
            <TextInput
              style={styles.input}
              placeholder="Number of yawns"
              placeholderTextColor="#888888"
              keyboardType="numeric"
              value={yawns.toString()}
              onChangeText={(text) => setYawns(parseInt(text) || 0)}
            />
            <TouchableOpacity style={styles.button} onPress={handleHabitsSubmit}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        );
      case 'permissions':
        return (
          <View style={styles.center}>
            <Text style={styles.title}>Permissions</Text>
            <Text style={styles.subtitle}>Grant access to your soul? (Camera required)</Text>
            <TouchableOpacity style={styles.button} onPress={handlePermissionsSubmit}>
              <Text style={styles.buttonText}>Grant Permissions</Text>
            </TouchableOpacity>
          </View>
        );
      case 'profile':
        return (
          <View style={styles.center}>
            <Text style={styles.title}>Profile Setup</Text>
            <Text style={styles.subtitle}>Optional username for social features</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter username (optional)"
              placeholderTextColor="#888888"
              value={username}
              onChangeText={setUsernameInput}
            />
            <TouchableOpacity style={styles.button} onPress={handleProfileSubmit}>
              <Text style={styles.buttonText}>Finish</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      {renderStep()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    padding: 20,
  },
  center: {
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#888888',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#111111',
    borderColor: '#222222',
    borderWidth: 1,
    borderRadius: 8,
    color: '#ffffff',
    padding: 15,
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#44ff44',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});