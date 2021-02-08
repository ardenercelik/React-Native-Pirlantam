import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import MagazaVisitorScreen from '../screen/search/MagazaVisitorScreen';
import SearchScreen from '../screen/search/SearchScreen';
import {searchStackNavs} from './Navs';
const Stack = createStackNavigator();
const SearchStack = () => {
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen name={searchStackNavs.Search} component={SearchScreen} />
      <Stack.Screen
        name={searchStackNavs.MagazaVisitor}
        component={MagazaVisitorScreen}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
