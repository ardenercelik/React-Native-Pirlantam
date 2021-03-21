import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import MagazaVisitorScreen from '../screen/search/MagazaVisitorScreen';
import SearchScreen from '../screen/search/SearchScreen';
import {searchStackNavs} from './Navs';
const Stack = createStackNavigator();
const SearchStack = () => {
  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {},
          headerStatusBarHeight: 5,
          animationEnabled: true,
          gestureEnabled: true,
          headerTitleStyle: {},
          headerTitleAlign: 'center',
        }}
        initialRouteName={searchStackNavs.Search}>
        <Stack.Screen name={searchStackNavs.Search} component={SearchScreen} />
        <Stack.Screen
          name={searchStackNavs.MagazaVisitor}
          component={MagazaVisitorScreen}
        />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default SearchStack;
