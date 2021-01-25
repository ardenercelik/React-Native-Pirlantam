import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Input, Modal} from '@ui-kitten/components';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {LoginContext} from '../../context/LoginContext';
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const userMetadataRegex = /^(\w+-\w+-\w+)T(\w+:\w+:\w+).+Z$/;

const schema = yup.object().shape({
  tel: yup.string().matches(phoneRegex, 'Geçersiz numara'),
});

const isFirstTime = (user) => {
  if (user) {
    const cre = user.metadata.creationTime.match(userMetadataRegex);
    const lst = user.metadata.lastSignInTime.match(userMetadataRegex);
    let CrDate = cre[1];
    let CrTime = cre[2];
    let LsDate = lst[1];
    let LsTime = lst[2];
    if (CrDate === LsDate && CrTime === LsTime) {
      console.log('first sign in');
    } else {
      console.log('welcome back');
    }
  }
};

function Login({navigation}) {
  const {user, setUser} = useContext(LoginContext);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [initializing, setInitializing] = useState(true);
  //const [user, setUser] = useState();
  const [visible, setVisible] = useState(false);

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
    setVisible(true);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  function onAuthStateChanged(user) {
    setUser(user);
    isFirstTime(user);
    if (initializing) setInitializing(false);
  }
  const onSubmit = (data) => {
    console.log('+44' + data.tel);
    signInWithPhoneNumber('+44' + data.tel);
  };
  // const getToken = async () => {
  //   if (user) {
  //     const user = await auth().currentUser;
  //     // const idTokenResult = await auth().currentUser.getIdToken(
  //     //   /* forceRefresh */ true,
  //     // );
  //     // setUser(user);
  //     // idTokenResult = user.getIdToken;
  //     // console.log('User JWT: ', idTokenResult);
  //     // console.log(user.uid);
  //   }
  // };
  // useEffect(() => {
  //   getToken();
  // }, []);

  async function confirmCode() {
    try {
      console.log(code);
      await confirm.confirm(code);
      navigation.navigate('Verify');
    } catch (error) {
      console.log('Invalid code.');
    } finally {
    }
  }
  const signOut = () => {
    if (user) {
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
      setUser(null);
    } else {
      console.log('no user signed in');
    }
  };
  const {register, control, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
  });

  if (initializing) return null;

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View>
          <Text>Login</Text>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                keyboardType="number-pad"
                size="large"
                status={errors.tel ? 'danger' : 'primary'}
                autoCompleteType="tel"
                style={styles.inputMarginMargin}
                placeholder="Cep Telefonu"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                accessoryLeft={() => <Text>+90</Text>}
              />
            )}
            name="tel"
            defaultValue=""
          />
          {errors.tel && (
            <Text style={styles.inputMarginMargin}>{errors.tel.message}</Text>
          )}

          <Button onPress={handleSubmit(onSubmit)}>Login</Button>
        </View>
        <View>
          <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log('login has error: ' + result.error);
              } else if (result.isCancelled) {
                console.log('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                  console.log(data.accessToken.toString());
                });
              }
            }}
            onLogoutFinished={() => console.log('logout.')}
          />
        </View>

        <Modal
          backdropStyle={{backgroundColor: 'rgba(0,0,0,0.9)'}}
          visible={visible}>
          <Input value={code} onChangeText={(text) => setCode(text)} />
          <Button
            title="Confirm Code"
            onPress={() => {
              confirmCode();
              setVisible(false);
            }}>
            Confirm Code
          </Button>
        </Modal>

        <Button title="Confirm Code" onPress={() => signOut()}>
          Sign Out
        </Button>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 2,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  uyeOl: {},
  input: {
    flexGrow: 1,
  },
  forgotTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Login;
