import React, {useState} from 'react';
import {Linking} from 'react-native';

import {
  Icon,
  OverflowMenu,
  MenuItem,
  TopNavigationAction,
  Text,
} from '@ui-kitten/components';
import {BASE_URL} from '../../constants';
import {deleteItem} from '../../helper/axios';
import AreYouSureModal, {modalMsg} from '../AreYouSure';
import {msg, successNotification} from '../../helper/notification';

const DELETE_URL = `${BASE_URL}/pirlantas/`;

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
const MagazaOwnerMenu = ({pirlantaId, search, token}) => {
  const [visible, setVisible] = useState(true);
  return (
    <React.Fragment>
      <AreYouSureModal
        visible={visible}
        setVisible={setVisible}
        onYes={async () => {
          const url = DELETE_URL + pirlantaId;
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
          console.log('edit');
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
    <MenuItem
      accessoryLeft={PhoneIcon}
      title="Ara"
      onPress={() => Linking.openURL(returnPhoneNumberForPlatform(phoneNumber))}
    />
    <MenuItem accessoryLeft={SaveIcon} title="Kaydet" />
  </React.Fragment>
);

const MagazaOverflowMenu = ({
  status,
  phoneNumber,
  pirlantaId,
  search,
  token,
  setVisible,
}) => {
  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );
  const [menuVisible, setMenuVisible] = React.useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <OverflowMenu
      setVisible={setVisible}
      anchor={renderMenuAction}
      visible={menuVisible}
      placement="bottom end"
      onBackdropPress={toggleMenu}>
      {status === 'visitor' ? (
        <MagazaVisitorMenu phoneNumber={phoneNumber} />
      ) : (
        <MagazaOwnerMenu
          search={search}
          token={token}
          pirlantaId={pirlantaId}
          setVisible={setVisible}
        />
      )}
    </OverflowMenu>
  );
};
export default MagazaOverflowMenu;
