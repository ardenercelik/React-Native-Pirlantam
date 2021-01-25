import React, {useContext} from 'react';
import {Linking, Text, View} from 'react-native';

import {
  ListItem,
  Icon,
  OverflowMenu,
  MenuItem,
  TopNavigationAction,
} from '@ui-kitten/components';

const MenuIcon = (props) => <Icon {...props} name="more-vertical-outline" />;
const PhoneIcon = (props) => <Icon {...props} name="phone-outline" />;
const SaveIcon = (props) => <Icon {...props} name="star-outline" />;
const StoreIcon = (props) => <Icon {...props} name="home-outline" />;

function MagazaListItem({item, index, props}) {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );
  let phoneNumber = '';

  const PirlantaOverflow = () => {
    return (
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        placement="bottom end"
        onBackdropPress={toggleMenu}>
        <MenuItem
          accessoryLeft={PhoneIcon}
          title="Ara"
          onPress={() => Linking.openURL(phoneNumber)}
        />
        <MenuItem accessoryLeft={StoreIcon} title="Mağaza" />
        <MenuItem accessoryLeft={SaveIcon} title="Kaydet" />
      </OverflowMenu>
    );
  };
  //console.log('item');
  //console.log({item});

  return (
    <ListItem
      style={{borderRadius: 5}}
      title={`Adet: ${item.adet} | Karat: ${item.carat}`}
      description={`${item.type} - ${item.color} - ${item.clarity} - ${item.cut} - ${item.certficate}`}
      accessoryRight={PirlantaOverflow}
      accessoryLeft={() => <Text category="h6">${item.price}</Text>}
    />
  );
}

export default MagazaListItem;
