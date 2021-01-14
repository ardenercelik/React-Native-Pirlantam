import React from 'react';
import {View, TextInput} from 'react-native';

const Inputs = (props) => {
  return (
    <View
      style={{
        margin: 3,
        width: '100%',
        flexDirection: 'row',
      }}>
      <TextInput
        onChangeText={props.onMinChangeText}
        value={props.minValue}
        style={{
          flexGrow: 1,
        }}
        keyboardType="number-pad"
        placeholder="Min"></TextInput>
      <TextInput
        onChangeText={props.onMaxChangeText}
        value={props.maxValue}
        style={{flexGrow: 1}}
        keyboardType="number-pad"
        placeholder="Max"></TextInput>
    </View>
  );
};

export default Inputs;
