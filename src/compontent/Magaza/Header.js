import React from 'react';
import {Text, ListItem, Icon, Divider, Input} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';

const PhoneIcon = (props) => <Icon {...props} name="smartphone-outline" />;
const MailIcon = (props) => <Icon {...props} name="email-outline" />;
const Header = ({data, children}) => (
  <View>
    <View>
      <View style={styles.headerContainer}>
        <Text category="h4">{data.name}</Text>
        {children}
      </View>
      <Divider />
      <ListItem title={data.number} accessoryLeft={PhoneIcon}></ListItem>
      <Divider />
      <ListItem title={data.adres} accessoryLeft={MailIcon}></ListItem>
      <Divider />
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: 5,
  },
});

export default Header;
