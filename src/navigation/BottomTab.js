import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import FetchScreen from '../screen/PirlantaScreen';
import LoginScreen from '../screen/LoginScreen';
import MagazaScreen from '../screen/magaza/MagazaScreen';
import SearchScreenStack from '../screen/SearchScreenStack';
import MagazaScreenStack from '../screen/MagazaScreenStack';
const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Taş Ara" />
    <BottomNavigationTab title="Ana Ekran" />
    <BottomNavigationTab title="Magaza" />
    <BottomNavigationTab title="Profil" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Ara" component={SearchScreenStack} />
    <Screen name="Ana Ekran" component={FetchScreen} />
    <Screen name="Magaza" component={MagazaScreenStack} />
    <Screen name="Profil" component={LoginScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
