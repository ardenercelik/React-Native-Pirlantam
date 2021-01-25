import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Button, Text, Input} from '@ui-kitten/components';
import {useForm, Controller} from 'react-hook-form';
import {isPhoneNum} from '../../helper/validation';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const nameRegex = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+\s[[\s[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+/;
const schema = yup.object().shape({
  tel: yup.string().matches(phoneRegex, 'Invalid phone.'),
  password: yup
    .string()
    .min(6, 'Şifreniz en az 6 karakter olmalı')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Mismatched passwords'),

  name: yup.string().matches(nameRegex, 'Lütfen soyadınızı da giriniz'),
  email: yup
    .string()
    .required('Lütfen mail adresinizi giriniz')
    .email('Geçersiz bir mail adresi girdiniz'),
});

function Register({navigation}) {
  const {register, control, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  function onChange(value) {
    console.log(value);
  }

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
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

          <View style={styles.sifreContainer}>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <Input
                  size="large"
                  status={errors.password ? 'danger' : 'primary'}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Şifre"
                />
              )}
              name="password"
              defaultValue=""
            />

            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <Input
                  size="large"
                  status={errors.confirmPassword ? 'danger' : 'primary'}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Şifre (Tekrar)"
                />
              )}
              name="confirmPassword"
              defaultValue=""
            />
          </View>
          {errors.password && (
            <Text style={styles.inputMarginMargin}>
              {errors.password.message}{' '}
            </Text>
          )}
          {errors.confirmPassword && (
            <Text style={styles.inputMarginMargin}>
              {errors.confirmPassword.message}
            </Text>
          )}
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
        </View>
        <KeyboardAvoidingView enabled behavior="height">
          <Button onPress={handleSubmit(onSubmit)} style={styles.uyeOl}>
            Üye Ol
          </Button>
        </KeyboardAvoidingView>
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
    margin: 3,
  },
  inputMarginMargin: {
    margin: 3,
  },
  sifreContainer: {
    flexDirection: 'row',
  },
});

export default Register;
