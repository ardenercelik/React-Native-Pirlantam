import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as theme} from './theme';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppNavigator} from './navigation/BottomTab';
import 'react-native-gesture-handler';
import {default as mapping} from './mapping.json';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginContextProvider} from './context/LoginContext';
import {NotifierWrapper} from 'react-native-notifier';
import {QueryClientProvider} from 'react-query';
import {queryClient} from './helper/query-client';
import {SafeAreaProvider} from 'react-native-safe-area-context';
export const Stack = createStackNavigator();
//validasyon bozuk ikisi de yanıyo
export default App = () => {
  return (
    <>
      <LoginContextProvider>
        <SafeAreaProvider>
          <IconRegistry icons={[EvaIconsPack]} />
          <ApplicationProvider {...eva} customMapping={mapping} theme={{...eva.light, ...theme}}>
            <QueryClientProvider client={queryClient}>
              <NotifierWrapper>
                <AppNavigator />
              </NotifierWrapper>
            </QueryClientProvider>
          </ApplicationProvider>
        </SafeAreaProvider>
      </LoginContextProvider>
    </>
  );
};
