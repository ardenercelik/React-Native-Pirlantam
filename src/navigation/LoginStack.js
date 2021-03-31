import {createStackNavigator} from '@react-navigation/stack';
import Verify from '../compontent/authorization/Verify';
import * as React from 'react';
import {LoggedInMenu, LoggedOutMenu, Login, RegisterScreen, SubmitUserDataScreen} from '../screen/login';
import {loginStackNavs} from './Navs';

const Stack = createStackNavigator();

export const LoginLoggedInStack = () => {
  return (
    <React.Fragment>
      <Stack.Navigator initialRouteName={loginStackNavs.Menu}>
        <Stack.Screen name={loginStackNavs.Menu} component={LoggedInMenu} />
        <Stack.Screen name={loginStackNavs.SubmitUserData} component={SubmitUserDataScreen} />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export const LoginLoggedOutStack = () => {
  return (
    <React.Fragment>
      <Stack.Navigator initialRouteName={loginStackNavs.Menu}>
        <Stack.Screen name={loginStackNavs.Menu} component={LoggedOutMenu} />
        <Stack.Screen name={loginStackNavs.Register} component={RegisterScreen} />
        <Stack.Screen name={loginStackNavs.Login} component={Login} />
        <Stack.Screen name={loginStackNavs.Verify} component={Verify} />
      </Stack.Navigator>
    </React.Fragment>
  );
};
