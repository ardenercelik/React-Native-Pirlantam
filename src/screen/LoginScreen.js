import * as React from 'react';
import {StyleSheet} from 'react-native';
import LoginStack from '../navigation/LoginStack';

function LoginScreen() {
  return (
    <React.Fragment>
      <LoginStack />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});

export default LoginScreen;
//  ios ayarları yok
