import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, YellowBox } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('This is the original text');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <StatusBar style="auto" />
      <Button title="Change Text" onPress={() => setOutputText('This is a new text')}/>
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

  Button: {
    backgroundColor: '#aaa',
  }
});
