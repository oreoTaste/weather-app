import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellow_container}>This is Yellow part</Text>
      <Text style={styles.blue_container}>This is blue part </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yellow_container: {
    flex : 1,
    backgroundColor: "yellow",
  },
  blue_container: {
    flex : 2,
    backgroundColor: "blue",
  }

});
