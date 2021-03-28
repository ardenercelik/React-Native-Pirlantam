import React from 'react';
import {Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
export const StyledText = ({children, props}) => (
  <Text style={styles.mainColor} category="p1">
    {children}
  </Text>
);
const styles = StyleSheet.create({
  mainColor: {
    fontWeight: 'bold',
  },
});
