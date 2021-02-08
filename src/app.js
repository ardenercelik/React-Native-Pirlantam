import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as theme} from './theme';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ThemeProvider} from 'react-native-elements';
import {AppNavigator} from './navigation/BottomTab';

import {createStackNavigator} from '@react-navigation/stack';
import {LoginContextProvider} from './context/LoginContext';

export const Stack = createStackNavigator();

export default App = () => {
  return (
    <>
      <LoginContextProvider>
        <ThemeProvider>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={{...eva.light}}>
            <AppNavigator />
          </ApplicationProvider>
        </ThemeProvider>
      </LoginContextProvider>
    </>
  );
};
