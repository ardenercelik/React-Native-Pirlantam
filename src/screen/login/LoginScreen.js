import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Input, Modal, Layout, Card} from '@ui-kitten/components';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import {LoginContext} from '../../context/LoginContext';
import {loginStackNavs} from '../../navigation/Navs';
import {CountryFlagCard} from '../../compontent/authorization';

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const schema = yup.object().shape({
  tel: yup.string().matches(phoneRegex, 'Geçersiz numara'),
});

function Login({navigation}) {
  const {user, setUser} = useContext(LoginContext);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [initializing, setInitializing] = useState(true);
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
    if (user) {
      setUser(user);
    }
    if (initializing) setInitializing(false);
  }

  const onSubmit = (data) => {
    console.log('+90' + data.tel);
    signInWithPhoneNumber('+90' + data.tel);
  };

  async function confirmCode(user) {
    try {
      console.log(code);
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    } finally {
    }
  }

  const {control, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
  });

  if (initializing) return null;

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View>
          <Button>Google ile giriş Yap</Button>
          <View style={{flexDirection: 'row', alignItems: 'flex-end', marginTop: '2%', marginBottom: '1%'}}>
            <CountryFlagCard />

            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <Input
                  keyboardType="number-pad"
                  size="large"
                  status={errors.tel ? 'danger' : 'basic'}
                  autoCompleteType="tel"
                  style={styles.inputMarginMargin}
                  placeholder="Cep Telefonu"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  style={{flex: 1}}
                />
              )}
              name="tel"
              defaultValue=""
            />
            {errors.tel && <Text style={styles.inputMarginMargin}>{errors.tel.message}</Text>}
          </View>

          <Button size="large" onPress={handleSubmit(onSubmit)}>
            Login
          </Button>
        </View>
        <Button onPress={() => navigation.navigate(loginStackNavs.Register)} style={{marginBottom: '5%'}}>
          Üye Ol!
        </Button>

        <Modal backdropStyle={{backgroundColor: 'rgba(0,0,0,0.9)'}} visible={visible}>
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
    marginHorizontal: '2%',
    marginTop: '5%',
  },
  uyeOl: {},
  input: {
    flexGrow: 1,
  },
  forgotTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputCard: {
    height: 48,
    marginBottom: 4,
    marginRight: '3%',
    borderRadius: 2,
  },
});

export default Login;
