import React from 'react';
import {Linking} from 'react-native';

import {
  ListItem,
  Icon,
  OverflowMenu,
  MenuItem,
  TopNavigationAction,
} from '@ui-kitten/components';
import {BASE_URL} from '../../constants';
import {deleteItem} from '../../helper/axios';

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
  return (
    <React.Fragment>
      <MenuItem
        onPress={() => {
          console.log('edit');
        }}
        accessoryLeft={EditIcon}
        title="Düzenle"
      />
      <MenuItem
        onPress={async () => {
          const url = DELETE_URL + pirlantaId;
          await deleteItem(url, token);
          search();
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
        />
      )}
    </OverflowMenu>
  );
};
export default MagazaOverflowMenu;
