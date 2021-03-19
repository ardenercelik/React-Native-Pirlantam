import React, {useContext, useState} from 'react';
import {Icon, Layout, Menu, MenuItem, Text} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import {LoginContext} from '../../context/LoginContext';
import {signOut} from '../../helper/login';
import AreYouSureModal, {modalMsg} from '../../compontent/AreYouSure';
import {successNotification, msg} from '../../helper/notification';
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

const LoggedOutMenu = ({navigation}) => {
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

const LoggedInMenu = ({user, setUser, setToken}) => {
  const [visible, setVisible] = useState(false);
  const onSa = (msg) => {
    successNotification(msg);
  };

  return (
    <React.Fragment>
      <AreYouSureModal
        visible={visible}
        setVisible={setVisible}
        onYes={() => {
          signOut(user, setUser, setToken);
          setVisible(false);
          successNotification(msg.successLogout);
        }}
        onNo={() => setVisible(false)}
        text={<Text>{modalMsg.logout}</Text>}
      />
      <View style={styles.container}>
        <View style={styles.menuGroupContainer}>
          <Menu style={styles.menu}>
            <MenuItem
              accessoryRight={ForwardIcon}
              onPress={() => setVisible(true)}
              accessoryLeft={LoginIcon}
              title="Çıkış Yap"
            />
          </Menu>
        </View>
        <StyledText>Genel</StyledText>
        <View style={styles.menuGroupContainer}>
          <Menu style={styles.menu}>
            <ArrowMenuItem
              onPress={() => onSa('erfdg')}
              accessoryLeft={StarIcon}
              title="Favorilerim"
            />
            <ArrowMenuItem
              onPress={() => onSa('123')}
              accessoryLeft={HelpIcon}
              title="Yardım"
            />
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
  const {user, setUser, setToken, token} = useContext(LoginContext);
  console.log('user: ' + {user});
  return user ? (
    <LoggedInMenu
      navigation={navigation}
      setUser={setUser}
      setToken={setToken}
      user={user}
    />
  ) : (
    <LoggedOutMenu navigation={navigation} />
  );
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
