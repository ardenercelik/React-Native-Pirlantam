import {Input} from '@ui-kitten/components';
import React from 'react';
import {View, StyleSheet} from 'react-native';
const Inputs = ({onMinChangeText, onMaxChangeText, valueMin, valueMax}) => {
  return (
    <View style={styles.container}>
      <Input
        onChangeText={onMinChangeText}
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Min"
        value={valueMin}
      />
      <Input
        value={valueMax}
        onChangeText={onMaxChangeText}
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Max"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    width: '50%',
  },
});

export default Inputs;
