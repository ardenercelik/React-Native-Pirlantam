import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Input} from '@ui-kitten/components';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginContext} from '../../context/LoginContext';
import {axiosPost, useMagazaLoading} from '../../helper/axios';
import {BASE_URL} from '../../constants';
import {useEffect} from 'react/cjs/react.development';
import {loginStackNavs} from '../../navigation/Navs';

const nameRegex = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+\s[[\s[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+/;
const schema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegex, 'Lütfen soyadınızı da giriniz')
    .required(),
  email: yup
    .string()
    .required('Lütfen mail adresinizi giriniz')
    .email('Geçersiz bir mail adresi girdiniz'),
  magazaName: yup.string().max(50),
  magazaAdres: yup.string().max(140),
});
function Register({navigation}) {
  const {user, token, setMagazaLoading} = useContext(LoginContext);

  //ekran buraya geldiğinde true çekiyor. magaszanın aramasını engelliyor. default false,
  //useMagazaLoading içinde geri false oluyor
  useEffect(() => {
    setMagazaLoading(true);
  }, []);

  const {control, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: 'Arden Erçelik',
      email: 'ardenerc@gmail.com',
      magazaName: '',
      magazaAdres: '',
    },
  });
  const onSubmit = (data) => {
    urlUser = `${BASE_URL}/users`;
    let userData = {
      uid: user.uid,
      name: data.name,
      mail: data.email,
      number: user.phoneNumber,
    };
    urlMagaza = `${BASE_URL}/magazas`;
    axiosPost(urlUser, userData, token);
    let magazaData = {
      uid: user.uid,
      number: user.phoneNumber,
      name: data.magazaName == '' ? data.name : data.magazaName,
      adres: data.magazaAdres,
    };

    //
    useMagazaLoading(urlMagaza, magazaData, token, setMagazaLoading);

    navigation.navigate(loginStackNavs.Menu);
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                size="large"
                status={errors.name ? 'danger' : 'primary'}
                style={styles.inputMarginMargin}
                placeholder="Ad ve Soyad"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                autoCapitalize={'words'}
              />
            )}
            name="name"
            defaultValue=""
          />
          {errors.name && (
            <Text style={styles.inputMarginMargin}>{errors.name.message}</Text>
          )}

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
          {errors.email && (
            <Text style={styles.inputMarginMargin}>{errors.email.message}</Text>
          )}
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                size="large"
                status={errors.email ? 'danger' : 'primary'}
                autoCompleteType="email"
                style={styles.inputMarginMargin}
                placeholder="Mağaza Adı"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="magazaName"
            defaultValue=""
          />
          {errors.magazaName && (
            <Text style={styles.inputMarginMargin}>
              {errors.magazaName.message}
            </Text>
          )}
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                multiline={true}
                size="large"
                status={errors.email ? 'danger' : 'primary'}
                autoCompleteType="street-address"
                style={styles.inputMarginMargin}
                placeholder="Mağaza Adresi"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="magazaAdres"
            defaultValue=""
          />
          {errors.magazaAdres && (
            <Text style={styles.inputMarginMargin}>
              {errors.magazaAdres.message}
            </Text>
          )}
        </View>

        <Button onPress={handleSubmit(onSubmit)} style={styles.uyeOl}>
          Kaydet
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
    justifyContent: 'flex-start',
  },
  uyeOl: {margin: 2},
  input: {
    flexGrow: 1,
    margin: 2,
  },
  inputMarginMargin: {
    margin: 3,
  },
  sifreContainer: {
    flexDirection: 'row',
  },
});

export default Register;
