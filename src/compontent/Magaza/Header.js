import React from 'react';
import {
  Text,
  ListItem,
  Icon,
  Divider,
  Input,
  Layout,
  Avatar,
} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';

const PhoneIcon = (props) => <Icon {...props} name="smartphone-outline" />;
const MailIcon = (props) => <Icon {...props} name="email-outline" />;
const Header = ({data, children}) => (
  <Layout>
    <Layout>
      <Layout level="1" style={styles.headerContainer}>
        <Avatar size="giant" source={require('../../../assets/tst.png')} />
        <Text category="h4">{data.name}</Text>
        {children}
      </Layout>
      <Divider />
      <ListItem title={data.number} accessoryLeft={PhoneIcon}></ListItem>
      <Divider />
      <ListItem title={data.adres} accessoryLeft={MailIcon}></ListItem>
      <Divider />
    </Layout>
  </Layout>
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
