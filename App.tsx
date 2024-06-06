/**
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './src/navigation/root';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#D8CCC3', height: '100%' }}>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      {/*  */}
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      {/*  */}
    </SafeAreaView>
  );
}

export default App;
