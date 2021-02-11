import React, {useContext} from 'react';
import {View, TextInput, Modal} from 'react-native';
import {useState} from 'react/cjs/react.development';

import {
  Button,
  ListItem,
  Divider,
  Icon,
  List,
  OverflowMenu,
  MenuItem,
  TopNavigationAction,
  Text,
} from '@ui-kitten/components';
import {fetchData} from '../helper/axios';
import {useQuery, useQueryClient} from 'react-query';

const MenuIcon = (props) => <Icon {...props} name="more-vertical-outline" />;
const PhoneIcon = (props) => <Icon {...props} name="phone-outline" />;
const SaveIcon = (props) => <Icon {...props} name="star-outline" />;
const StoreIcon = (props) => <Icon {...props} name="home-outline" />;

function FetchScreen({navigation}) {
  const [visible, setVisible] = useState(false);
  const [menuVisible, setMenuVisible] = React.useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  // const {isLoading, error, data, isFetching} = useQuery('repoData', () =>
  //   fetchData('https://api.github.com/repos/tannerlinsley/react-query'),
  // );

  return (
    <View style={{flex: 1, padding: 24, margin: 10}}>
      <Text>Magaza?</Text>
    </View>
  );
}

export default FetchScreen;
