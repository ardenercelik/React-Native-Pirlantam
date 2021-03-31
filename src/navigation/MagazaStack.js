import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {MagazaLoggedInScreen, MagazaLoggedOutScreen} from '../screen/magaza';
import {EnvanterAddPirlanta} from '../screen/magaza/EnvanterAddPirlanta';
import HeaderInput from '../screen/magaza/HeaderInput';
import {magazaScreenNavs, NavBar, primary} from './Navs';
const Stack = createStackNavigator();

export const MagazaLoggedInStack = () => {
  return (
    <React.Fragment>
      <Stack.Navigator headerMode="none" initialRouteName={magazaScreenNavs.Magaza}>
        <Stack.Screen name={magazaScreenNavs.Magaza} component={MagazaLoggedInScreen} />
        <Stack.Screen name={magazaScreenNavs.EditHeader} component={HeaderInput} />
        <Stack.Screen name={magazaScreenNavs.AddPirlanta} component={EnvanterAddPirlanta} />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export const MagazaLoggedOutStack = () => {
  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: primary},
          headerStatusBarHeight: 5,
          animationEnabled: true,
          gestureEnabled: true,
          headerTitleStyle: {},
          headerTitleAlign: 'center',
          headerTitle: (props) => <NavBar />,
        }}>
        <Stack.Screen name={magazaScreenNavs.Magaza} component={MagazaLoggedOutScreen} />
      </Stack.Navigator>
    </React.Fragment>
  );
};
