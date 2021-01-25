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

function PirlantaListItem({item, index, navigation}) {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  console.log(item);
  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );
  let phoneNumber = '';

  if (Platform.OS === 'android') {
    phoneNumber = `tel:${item.magaza.numara}`;
  } else {
    phoneNumber = `telpromt:${item.magaza.numara}`;
  }

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
        <MenuItem
          onPress={() => {
            navigation.navigate('Magaza', {
              magazaId: item.magaza.magazaId,
            });
            toggleMenu();
          }}
          accessoryLeft={StoreIcon}
          title="Mağaza"
        />
        <MenuItem accessoryLeft={SaveIcon} title="Kaydet" />
      </OverflowMenu>
    );
  };

  return (
    <ListItem
      style={{borderRadius: 5}}
      title={`Magaza: ${item.magaza.name} | Adet: ${item.adet} | Karat: ${item.carat}`}
      description={`${item.type} - ${item.color} - ${item.clarity} - ${item.cut} - ${item.certficate}`}
      accessoryRight={PirlantaOverflow}
      accessoryLeft={() => <Text category="h6">${item.price}</Text>}
    />
  );
}

export default PirlantaListItem;
