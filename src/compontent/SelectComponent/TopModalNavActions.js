import React, {useContext} from 'react';
import {
  Icon,
  MenuItem,
  OverflowMenu,
  TopNavigationAction,
} from '@ui-kitten/components';

//TODO onpress kaydet

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const TrashIcon = (props) => <Icon {...props} name="trash-2-outline" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const SaveIcon = (props) => <Icon {...props} name="save-outline" />;

export const RenderRightActions = ({dispatch}) => {
  //TODO onpress kaydet
  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );
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
export const renderBackAction = () => <TopNavigationAction icon={BackIcon} />;
