import React from 'react';
import {Text, ListItem, Icon, Divider, Input, Layout, Avatar, Card} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';
import {StyledText} from '../StyledText';
import {Image} from 'react-native-svg';

const PhoneIcon = (props) => <Icon {...props} name="smartphone-outline" />;
const MailIcon = (props) => <Icon {...props} name="email-outline" />;
const Header = ({data, children}) => (
  <Layout>
    <Layout level="1" style={styles.headerContainer}>
      <Text category="h4">{data.name}</Text>
      {children}
    </Layout>
    <Divider />
    <ListItem title={() => <StyledText>{data.number}</StyledText>} accessoryLeft={PhoneIcon}></ListItem>
    <Divider />
    <ListItem title={() => <StyledText>{data.adres}</StyledText>} accessoryLeft={MailIcon}></ListItem>
    <Divider />
  </Layout>
);

const styles = StyleSheet.create({
  headerContainer: {
    margin: 20,
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'space-between',
  },
});

export default Header;
