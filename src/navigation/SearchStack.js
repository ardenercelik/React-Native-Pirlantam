import {createStackNavigator} from '@react-navigation/stack';
import Login from '../compontent/authorization/LoginScreen';
import Register from '../compontent/authorization/Register';
import * as React from 'react';
import SearchScreen from '../compontent/SearchScreen';
import MagazaVisitorScreen from '../compontent/Magaza/MagazaVisitorScreen';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Magaza" component={MagazaVisitorScreen} />
    </Stack.Navigator>
  );
};

export default LoginStack;
