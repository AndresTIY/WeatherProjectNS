/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import styles from './src/styles';
import Main from './src/components/Main';

const App = () => {
  return (
    <SafeAreaView style={styles.f1}>
      <Main />
    </SafeAreaView>
  );
};

export default App;
