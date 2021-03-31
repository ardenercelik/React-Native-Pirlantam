import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {MagazaLoggedInStack, MagazaLoggedOutStack} from './MagazaStack';
import {LoginLoggedInStack, LoginLoggedOutStack} from './LoginStack';
import SearchStack from './SearchStack';
import {LoginContext} from '../context/LoginContext';
import {useContext} from 'react';
import {isFirstTime} from '../helper/login';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}) => {
  return (
    <BottomNavigation
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {position: 'absolute'},
      }}
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title="Taş Ara" />
      <BottomNavigationTab title="Magaza" />
      <BottomNavigationTab title="Profil" />
    </BottomNavigation>
  );
};

const LoggedInTabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Ara" component={SearchStack} />
    <Screen name="Magaza" component={MagazaLoggedInStack} />
    <Screen name="Profil" component={LoginLoggedInStack} />
  </Navigator>
);

const LoggedOutTabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Ara" component={SearchStack} />
    <Screen name="Magaza" component={MagazaLoggedOutStack} />
    <Screen name="Profil" component={LoginLoggedOutStack} />
  </Navigator>
);

export const AppNavigator = () => {
  const {user} = useContext(LoginContext);
  return <NavigationContainer>{user ? <LoggedInTabNavigator /> : <LoggedOutTabNavigator />}</NavigationContainer>;
};
