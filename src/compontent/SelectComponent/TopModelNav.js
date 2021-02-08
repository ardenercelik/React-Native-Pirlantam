import React, {useContext} from 'react';
import {TopNavigation} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const TopModelNav = ({accessoryLeft, accessoryRight, title}) => {
  return (
    <TopNavigation
      alignment="center"
      title={title}
      style={styles.navigation}
      accessoryLeft={accessoryLeft}
      accessoryRight={accessoryRight}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
  navigation: {backgroundColor: 'rgba(0, 0, 0, 0)'},
});
export default TopModelNav;
