import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import MagazaSearchScreen from '../screen/MagazaSearchScreen';
import MagazaStack from './MagazaStack';
import LoginStack from './LoginStack';
import SearchStack from './SearchStack';

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

const LoggedInTabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Ara" component={SearchStack} />
    <Screen name="Ana Ekran" component={MagazaSearchScreen} />
    <Screen name="Magaza" component={MagazaStack} />
    <Screen name="Profil" component={LoginStack} />
  </Navigator>
);

const LoggedOutTabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Ara" component={SearchStack} />
    <Screen name="Ana Ekran" component={FetchScreen} />
    <Screen name="Magaza" component={MagazaStack} />
    <Screen name="Profil" component={LoginStack} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <LoggedInTabNavigator />
  </NavigationContainer>
);
