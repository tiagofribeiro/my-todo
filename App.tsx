/**
 * @format
 */

import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppTemplate from './src/components/templates/AppTemplate';
import RootStack from './src/navigation/root';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AppTemplate>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AppTemplate>
  );
}

export default App;
