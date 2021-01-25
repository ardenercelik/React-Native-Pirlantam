import {createStackNavigator} from '@react-navigation/stack';
import Login from '../compontent/authorization/LoginScreen';
import Register from '../compontent/authorization/Register';
import Verify from '../compontent/authorization/Verify';
import * as React from 'react';
import MenuScreen from '../compontent/authorization/MenuScreen';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Verify" component={Verify} />
    </Stack.Navigator>
  );
};

export default LoginStack;
