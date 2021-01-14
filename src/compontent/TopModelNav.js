import React, {useContext} from 'react';
import {
  Button,
  Icon,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {StyleSheet, Pressable} from 'react-native';
import {SelectContext} from '../context/Context';
import {View} from 'react-native';

//TODO onpress kaydet

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const TrashIcon = (props) => <Icon {...props} name="trash-2-outline" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const SaveIcon = (props) => <Icon {...props} name="save-outline" />;

const TopModelNav = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderRightActions = () => {
    const {state, dispatch} = useContext(SelectContext);
    return (
      <React.Fragment>
        <OverflowMenu
          anchor={renderMenuAction}
          visible={menuVisible}
          onBackdropPress={toggleMenu}>
          <MenuItem
            title="Temizle"
            onPress={() => {
              dispatch({type: 'CLEAR'});
              setMenuVisible(false);
            }}
            accessoryLeft={TrashIcon}
          />

          <MenuItem accessoryLeft={SaveIcon} title="Kaydet" />
        </OverflowMenu>
      </React.Fragment>
    );
  };
  const renderBackAction = () => <TopNavigationAction icon={BackIcon} />;

  return (
    <TopNavigation
      alignment="center"
      title="Arama Yap"
      style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
      accessoryLeft={renderBackAction}
      accessoryRight={renderRightActions}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
});
export default TopModelNav;
