import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/login/LoginScreen';
import Register from '../screen/login/Register';
import Verify from '../compontent/authorization/Verify';
import * as React from 'react';
import MenuScreen from '../screen/login/MenuScreen';
import {loginStackNavs} from './Navs';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <React.Fragment>
      <Stack.Navigator initialRouteName={loginStackNavs.Menu}>
        <Stack.Screen name={loginStackNavs.Menu} component={MenuScreen} />
        <Stack.Screen name={loginStackNavs.Login} component={Login} />
        <Stack.Screen name={loginStackNavs.Register} component={Register} />
        <Stack.Screen name={loginStackNavs.Verify} component={Verify} />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default LoginStack;
