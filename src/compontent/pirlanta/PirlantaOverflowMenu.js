import React from 'react';
import {Linking} from 'react-native';

import {
  Icon,
  OverflowMenu,
  MenuItem,
  TopNavigationAction,
} from '@ui-kitten/components';
import {searchStackNavs} from '../../navigation/Navs';

const MenuIcon = (props) => <Icon {...props} name="more-vertical-outline" />;
const PhoneIcon = (props) => <Icon {...props} name="phone-outline" />;
const SaveIcon = (props) => <Icon {...props} name="star-outline" />;
const StoreIcon = (props) => <Icon {...props} name="home-outline" />;

const PirlantaOverflow = ({magazaId, number, navigation}) => {
  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );
  const [menuVisible, setMenuVisible] = React.useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  let phoneNumber = '';

  if (Platform.OS === 'android') {
    phoneNumber = `tel:${number}`;
  } else {
    phoneNumber = `telpromt:${number}`;
  }
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
          navigation.navigate(searchStackNavs.MagazaVisitor, {
            magazaId: magazaId,
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
export default PirlantaOverflow;
