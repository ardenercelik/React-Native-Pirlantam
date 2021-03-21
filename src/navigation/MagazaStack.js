import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {EnvanterAddPirlanta} from '../screen/magaza/EnvanterAddPirlanta';
import HeaderInput from '../screen/magaza/HeaderInput';
import MagazaScreen from '../screen/magaza/MagazaScreen';
import {magazaScreenNavs} from './Navs';

const Stack = createStackNavigator();

const MagazaStack = () => {
  return (
    <React.Fragment>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={magazaScreenNavs.Magaza}>
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
    </React.Fragment>
  );
};

export default MagazaStack;
