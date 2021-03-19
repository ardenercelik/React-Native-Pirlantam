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
import NoData from './assets/no-data.svg';
export const Stack = createStackNavigator();
const queryClient = new QueryClient();
//validasyon bozuk ikisi de yanıyo
//Performance Monitoring
//Crashlytics
//Storage
export default App = () => {
  return (
    <>
      <LoginContextProvider>
        <IconRegistry icons={[EvaIconsPack, MyIconPack]} />
        <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
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

const MyIconProvider = (source) => ({
  toReactElement: ({animation, ...props}) => <NoData />,
});

const MyIconPack = {
  name: 'my-icon',
  icons: {
    'no-data': <MyIconProvider />,
  },
};
