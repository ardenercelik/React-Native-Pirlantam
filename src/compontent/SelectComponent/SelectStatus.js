import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Select, SelectItem} from '@ui-kitten/components';

export const SelectQuery = (props) => {
  const groupDisplayValues = props.values[props.index - 1];
  return (
    <View style={styles.container}>
      <Select
        style={styles.select}
        multiSelect={false}
        status="basic"
        placeholder={props.placeholder}
        value={groupDisplayValues}
        selectedIndex={props.index}
        onSelect={props.handleSelect}>
        {props.values.map((title) => (
          <SelectItem key={title} title={title} />
        ))}
      </Select>
    </View>
  );
};

const styles = StyleSheet.create({
  select: {},

  container: {
    marginVertical: 3,
    width: '100%',
  },
});
