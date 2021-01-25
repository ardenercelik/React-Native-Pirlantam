import React from 'react';
import {Icon, Layout, Menu, MenuItem, Text} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';

const StarIcon = (props) => <Icon {...props} name="star" />;

const ForwardIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
const LoginIcon = (props) => <Icon {...props} name="log-in-outline" />;
const HelpIcon = (props) => (
  <Icon {...props} name="question-mark-circle-outline" />
);

const ArrowMenuItem = ({accessoryLeft, title, onPress, props}) => {
  return (
    <MenuItem
      onPress={onPress}
      {...props}
      accessoryRight={ForwardIcon}
      title={title}
      accessoryLeft={accessoryLeft}
    />
  );
};

const StyledText = (props) => <Text style={styles.text}>{props.children}</Text>;

const LogoutMenu = ({navigation}) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.menuGroupContainer}>
          <Menu style={styles.menu}>
            <MenuItem
              accessoryRight={ForwardIcon}
              onPress={() => navigation.navigate('Login')}
              accessoryLeft={LoginIcon}
              title="Giriş Yap"
            />
          </Menu>
        </View>
        <StyledText>Genel</StyledText>
        <View style={styles.menuGroupContainer}>
          <Menu style={styles.menu}>
            <ArrowMenuItem accessoryLeft={StarIcon} title="Favorilerim" />
            <ArrowMenuItem accessoryLeft={HelpIcon} title="Yardım" />
          </Menu>
        </View>
        <StyledText>Dil</StyledText>
        <View style={styles.menuGroupContainer}>
          <Menu style={styles.menu}>
            <ArrowMenuItem title="Türkçe" />
          </Menu>
        </View>
        <StyledText>Versiyon</StyledText>
        <View style={styles.menuGroupContainer}>
          <Menu style={styles.menu}>
            <ArrowMenuItem title="0.0.1" />
          </Menu>
        </View>
      </View>
    </React.Fragment>
  );
};

const MenuScreen = ({navigation}) => {
  return <LogoutMenu navigation={navigation} />;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  menu: {},
  menuGroupContainer: {
    marginBottom: '5%',
  },
  text: {
    margin: 5,
  },
});
export default MenuScreen;
