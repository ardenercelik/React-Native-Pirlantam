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

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const PirlantaOverflow = () => {
    return (
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        placement="bottom end"
        onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={PhoneIcon} title="Ara" />
        <MenuItem accessoryLeft={StoreIcon} title="Mağaza" />
        <MenuItem accessoryLeft={SaveIcon} title="Kaydet" />
      </OverflowMenu>
    );
  };

  return (
    <View style={{flex: 1, padding: 24, margin: 10}}>
      <Text>Magaza?</Text>
      {/* <List styl ItemSeparatorComponent={Divider}></List> */}
      <ListItem
        style={{borderRadius: 5}}
        onLongPress={() => setVisible(true)}
        title="Magaza: Alacam | Adet: 12 | Karat: 0.5"
        description="EMERALD - S - I2 - GOOD - GIA"
        accessoryRight={PirlantaOverflow}
        accessoryLeft={() => <Text category="h6">50$</Text>}
      />
    </View>
  );
}

export default FetchScreen;
