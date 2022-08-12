import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import screens
import { AuthScreen, MapScreen, ReviewScreen, SettingScreen, DeckScreen, WelcomeScreen } from './screens/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> to start working on your app!</Text>
      <StatusBar style="auto" />
      <AuthScreen />
      <MapScreen />
      <ReviewScreen />
      <WelcomeScreen />
      <SettingScreen />
      <DeckScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
