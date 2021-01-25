import React from 'react';
import {Text, Button, ListItem, Icon, Divider} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';

const EditIcon = (props) => <Icon {...props} name="edit-2-outline" />;

function HeaderEditIcon({visible}) {
  return (
    <Button
      onPress={visible}
      style={{left: 15, bottom: 10}}
      appearance="ghost"
      accessoryLeft={EditIcon}></Button>
  );
}

export default HeaderEditIcon;
