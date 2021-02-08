import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {EnvanterAddPirlanta} from '../screen/magaza/EnvanterAddPirlanta';
import HeaderInput from '../screen/magaza/HeaderInput';
import MagazaScreen from '../screen/magaza/MagazaScreen';
import {magazaScreenNavs} from './Navs';

const Stack = createStackNavigator();

const MagazaStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Magaza">
      <Stack.Screen name={magazaScreenNavs.Magaza} component={MagazaScreen} />
      <Stack.Screen
        name={magazaScreenNavs.EditHeader}
        component={HeaderInput}
      />
      <Stack.Screen
        name={magazaScreenNavs.AddPirlanta}
        component={EnvanterAddPirlanta}
      />
    </Stack.Navigator>
  );
};

export default MagazaStack;
