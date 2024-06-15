/**
 * @format
*/

import React from 'react';
import { useColorScheme } from 'react-native';

import AppTemplate from './src/components/templates/AppTemplate';
import RootStack from './src/navigation/root';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AppTemplate>
      <RootStack />
    </AppTemplate>
  );
}

export default App;
