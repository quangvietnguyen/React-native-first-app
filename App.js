import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput placeholder="Course Goal" style={{padding: 15, borderBottomColor: 'black', borderBottomWidth: 2, width: '80%'}}/>
        <Button title="ADD"/>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
});
