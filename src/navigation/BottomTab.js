import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import LoginScreen from '../screen/LoginScreen';
import SearchScreenStack from '../screen/SearchScreenStack';
import MagazaScreenStack from '../screen/MagazaScreenStack';
import MagazaSearchScreen from '../screen/MagazaSearchScreen';

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
    <Screen name="Ara" component={SearchScreenStack} />
    <Screen name="Ana Ekran" component={MagazaSearchScreen} />
    <Screen name="Magaza" component={MagazaScreenStack} />
    <Screen name="Profil" component={LoginScreen} />
  </Navigator>
);

const LoggedOutTabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Ara" component={SearchScreenStack} />
    <Screen name="Ana Ekran" component={FetchScreen} />
    <Screen name="Magaza" component={MagazaScreenStack} />
    <Screen name="Profil" component={LoginScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <LoggedInTabNavigator />
  </NavigationContainer>
);
