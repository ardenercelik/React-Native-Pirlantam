import {createStackNavigator} from '@react-navigation/stack';
import {Layout, Text} from '@ui-kitten/components';
import * as React from 'react';
import MagazaVisitorScreen from '../screen/search/MagazaVisitorScreen';
import SearchScreen from '../screen/search/SearchScreen';
import {searchStackNavs} from './Navs';
const Stack = createStackNavigator();
const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {},
        headerStatusBarHeight: 10,
        animationEnabled: true,
        gestureEnabled: true,
        headerTitleStyle: {},
        headerTitleAlign: 'center',
      }}
      initialRouteName="Menu">
      <Stack.Screen name={searchStackNavs.Search} component={SearchScreen} />
      <Stack.Screen
        name={searchStackNavs.MagazaVisitor}
        component={MagazaVisitorScreen}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
