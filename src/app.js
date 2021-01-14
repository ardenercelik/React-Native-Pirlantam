import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as theme} from './theme';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ThemeProvider} from 'react-native-elements';
import {AppNavigator} from './navigation/BottomTab';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SelectContextProvider} from './context/Context';
import {PirlantaContextProvider} from './context/PirlantaContext';

export const Stack = createStackNavigator();

export default App = () => {
  return (
    <>
      <PirlantaContextProvider>
        <SelectContextProvider>
          <ThemeProvider>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={{...eva.light}}>
              <AppNavigator />
            </ApplicationProvider>
          </ThemeProvider>
        </SelectContextProvider>
      </PirlantaContextProvider>
    </>
  );
};
