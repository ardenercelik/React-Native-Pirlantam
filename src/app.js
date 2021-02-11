import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as theme} from './theme';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppNavigator} from './navigation/BottomTab';

import {createStackNavigator} from '@react-navigation/stack';
import {LoginContextProvider} from './context/LoginContext';
import {NotifierWrapper} from 'react-native-notifier';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

export const Stack = createStackNavigator();
const queryClient = new QueryClient();

export default App = () => {
  return (
    <>
      <LoginContextProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{...eva.light}}>
          <QueryClientProvider client={queryClient}>
            <NotifierWrapper>
              <AppNavigator />
            </NotifierWrapper>
          </QueryClientProvider>
        </ApplicationProvider>
      </LoginContextProvider>
    </>
  );
};
