/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import MainScreen from './src/screens/MainScreen';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
