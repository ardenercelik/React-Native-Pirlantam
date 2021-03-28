import React, {useState} from 'react';
import {Linking} from 'react-native';

import {Icon, OverflowMenu, MenuItem, TopNavigationAction, Text, Layout} from '@ui-kitten/components';
import {URLS} from '../../constants';
import {deleteItem} from '../../helper/axios';
import AreYouSureModal, {modalMsg} from '../AreYouSure';
import {msg, successNotification} from '../../helper/notification';
import {magazaScreenNavs} from '../../navigation/Navs';
import {generatePrevState} from '../../hooks/PostActions';

const PhoneIcon = (props) => <Icon {...props} name="phone-outline" />;
const SaveIcon = (props) => <Icon {...props} name="star-outline" />;
const MenuIcon = (props) => <Icon {...props} name="more-vertical-outline" />;
const DeleteIcon = (props) => <Icon {...props} name="trash-2-outline" />;
const EditIcon = (props) => <Icon {...props} name="edit-2-outline" />;

const returnPhoneNumberForPlatform = (number) => {
  if (Platform.OS === 'android') {
    return `tel:${number}`;
  } else {
    return `telpromt:${number}`;
  }
};
//TODO
//emin misiniz ekle
//düzelt, düzelte bide sıfırla ekle
const MagazaOwnerMenu = ({pirlantaId, search, token, item, navigation, closeMenu}) => {
  const [visible, setVisible] = useState(false);
  return (
    <React.Fragment>
      <AreYouSureModal
        visible={visible}
        setVisible={setVisible}
        onYes={async () => {
          const url = URLS.DELETE_PIRLANTA + pirlantaId;
          await deleteItem(url, token);
          setVisible(false);
          search();
          successNotification(msg.successfulDelete);
        }}
        onNo={() => setVisible(false)}
        text={<Text>{modalMsg.pirlantaDelete}</Text>}
      />

      <MenuItem
        onPress={() => {
          navigation.navigate(magazaScreenNavs.AddPirlanta, {
            magazaId: item.magazaId,
            pirlantaId: pirlantaId,
            token: token,
            search: search,
            prevState: generatePrevState(item),
            action: 'put',
          });
          // overflow menusunu kapatıyor.
          closeMenu();
        }}
        accessoryLeft={EditIcon}
        title="Düzenle"
      />
      <MenuItem
        onPress={() => {
          setVisible(true);
        }}
        accessoryLeft={DeleteIcon}
        title="Sil"
      />
    </React.Fragment>
  );
};

const MagazaVisitorMenu = ({phoneNumber}) => (
  <React.Fragment>
    <MenuItem accessoryLeft={PhoneIcon} title="Ara" onPress={() => Linking.openURL(returnPhoneNumberForPlatform(phoneNumber))} />
    <MenuItem accessoryLeft={SaveIcon} title="Kaydet" />
  </React.Fragment>
);

export const MagazaOwnerOverflowMenu = ({pirlantaId, search, token, setVisible, navigation, item}) => {
  const renderMenuAction = () => <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />;
  const [menuVisible, setMenuVisible] = React.useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Layout>
      <OverflowMenu setVisible={setVisible} anchor={renderMenuAction} visible={menuVisible} placement="bottom end" onBackdropPress={toggleMenu}>
        <MagazaOwnerMenu closeMenu={() => setMenuVisible(false)} item={item} search={search} token={token} pirlantaId={pirlantaId} setVisible={setVisible} navigation={navigation} />
      </OverflowMenu>
    </Layout>
  );
};

export const MagazaVisitorOverflowMenu = ({phoneNumber, setVisible}) => {
  const renderMenuAction = () => <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />;
  const [menuVisible, setMenuVisible] = React.useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Layout>
      <OverflowMenu setVisible={setVisible} anchor={renderMenuAction} visible={menuVisible} placement="bottom end" onBackdropPress={toggleMenu}>
        <MagazaVisitorMenu phoneNumber={phoneNumber} />
      </OverflowMenu>
    </Layout>
  );
};
