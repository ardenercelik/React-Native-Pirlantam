import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button, ButtonGroup, Icon, Layout} from '@ui-kitten/components';

const SearchOutlineIcon = (props) => <Icon {...props} name="search-outline" />;
const FilterIcon = (props) => <Icon {...props} name="funnel-outline" />;
const SaveIcon = (props) => <Icon {...props} name="save-outline" />;
const DeleteIcon = (props) => <Icon {...props} name="trash-2-outline" />;

export const SearchButtonGroup = () => (
  <Layout style={styles.container}>
    <Button
      size="small"
      style={styles.button}
      accessoryLeft={SearchOutlineIcon}>
      Ara
    </Button>
    <Button size="small" style={styles.button} accessoryLeft={FilterIcon}>
      Sırala
    </Button>
    <Button size="small" style={styles.button} accessoryLeft={SaveIcon}>
      Kaydet
    </Button>
    <Button size="small" style={styles.button} accessoryLeft={DeleteIcon}>
      Temizle
    </Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonGroup: {
    borderRadius: 0,
    padding: 0,
    margin: 0,
  },
  button: {
    width: '25%',
    borderRadius: 0,
    flexDirection: 'column',
  },
});
