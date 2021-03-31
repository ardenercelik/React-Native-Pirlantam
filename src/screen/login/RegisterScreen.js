import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Input} from '@ui-kitten/components';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginContext} from '../../context/LoginContext';
import {BASE_URL} from '../../constants';
import {loginStackNavs} from '../../navigation/Navs';
import {CountryFlagCard} from '../../compontent/authorization';

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const schema = yup.object().shape({
  name: yup.string().required('Lütfen adınızı ve soyadınızı giriniz'),
  email: yup.string().required('Lütfen mail adresinizi giriniz').email('Geçersiz bir mail adresi girdiniz'),
  password: yup.string().required('Lütfen şifre giriniz').min(6, 'Şifre en az 6 karakter içermelidir'),
  passwordRepeat: yup.string().oneOf([yup.ref('password'), null], 'Şifreler uyuşmuyor'),
  tel: yup.string().matches(phoneRegex, 'Geçersiz numara'),
});
function SubmitUserDataScreen({navigation}) {
  const {user, token} = useContext(LoginContext);

  const {control, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      magazaName: '',
      magazaAdres: '',
      password: '',
      passwordRepeat: '',
    },
  });

  const onSubmit = (data) => {
    console.log({data});
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Button>Google ile giriş Yap</Button>
        <View>
          <View style={styles.phoneNumber}>
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
          </View>
        </View>
        <View>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                size="large"
                status={errors.email ? 'danger' : 'primary'}
                autoCompleteType="email"
                style={styles.inputMarginMargin}
                placeholder="E-Mail"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="email"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                autoCapitalize={'words'}
                autoCompleteType="name"
                size="large"
                status={errors.name ? 'danger' : 'primary'}
                style={styles.inputMarginMargin}
                placeholder="İsim Soyisim"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="name"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                multiline={true}
                size="large"
                status={errors.password ? 'danger' : 'primary'}
                style={styles.inputMarginMargin}
                placeholder="Şifre"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                secureTextEntry={true}
                multiline={false}
              />
            )}
            name="password"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                secureTextEntry={true}
                multiline={true}
                size="large"
                status={errors.passwordRepeat ? 'danger' : 'primary'}
                style={styles.inputMarginMargin}
                placeholder="Şifre (Tekrar)"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                multiline={false}
              />
            )}
            name="passwordRepeat"
            defaultValue=""
          />
        </View>

        <Button onPress={handleSubmit(onSubmit)} style={styles.uyeOl}>
          Üye ol
        </Button>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '3%',
    marginTop: '5%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  uyeOl: {margin: 2},
  input: {
    flexGrow: 1,
    margin: 2,
  },
  inputMarginMargin: {marginVertical: '1%'},
  sifreContainer: {
    flexDirection: 'row',
  },
  phoneNumber: {flexDirection: 'row', alignItems: 'flex-end', marginTop: '2%'},
});

export default SubmitUserDataScreen;
