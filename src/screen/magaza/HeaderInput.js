import React, {useContext} from 'react';
import {Text, Icon, Divider, Input, Button} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {phoneRegex} from '../../helper/validation';
import {LoginContext} from '../../context/LoginContext';
import {URLS} from '../../constants';
import {axiosPut} from '../../helper/axios';
import {msg, successNotification} from '../../helper/notification';

const schema = yup.object().shape({
  tel: yup.string().matches(phoneRegex, 'Invalid phone.'),
  name: yup.string().required().max(30),
  adres: yup.string().required('Lütfen mail adresinizi giriniz'),
});

const PhoneIcon = (props) => <Icon {...props} name="smartphone-outline" />;
const MailIcon = (props) => <Icon {...props} name="email-outline" />;

const HeaderInput = ({route, navigation}) => {
  const {token, user} = useContext(LoginContext);
  const {getValues, reset, control, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: route.params.data.name,
      adres: route.params.data.adres,
      tel: route.params.data.number,
    },
  });

  //console.log(data.magazaId);
  const onSubmit = async (data) => {
    let putData = {
      name: data.name,
      adres: data.adres,
      number: data.tel,
      magazaId: route.params.magazaId,
      uid: user.uid,
    };
    const url = `${URLS.PUT_MAGAZA}/${route.params.magazaId}`;
    await axiosPut(url, putData, token);
    route.params.search();
    navigation.goBack();
    successNotification(msg.successMagazaChange);
  };
  return (
    <View>
      <View style={styles.maincontainer}>
        <View style={styles.headerContainer}>
          <View style={{width: '50%'}}>
            <Controller
              control={control}
              onFocus={(value) => (value = '')}
              render={({onChange, onBlur, value}) => (
                <Input
                  onFocus={() => reset({...getValues(), name: ''})}
                  size="large"
                  status={errors.tel ? 'danger' : 'primary'}
                  autoCompleteType="tel"
                  style={styles.inputMarginMargin}
                  placeholder="Mağaza Adı"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="name"
            />
          </View>
        </View>
        <Divider />

        <View style={{width: '100%'}}>
          <Controller
            size="large"
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                onFocus={() => reset({...getValues(), tel: ''})}
                size="large"
                status={errors.tel ? 'danger' : 'primary'}
                autoCompleteType="tel"
                placeholder="Cep Telefonu"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                accessoryLeft={() => <Text>+90</Text>}
              />
            )}
            name="tel"
          />
        </View>

        <Divider />

        <View style={{width: '100%'}}>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                onFocus={() => reset({...getValues(), adres: ''})}
                size="large"
                status={errors.email ? 'danger' : 'primary'}
                autoCompleteType="street-address"
                placeholder="Adres"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="adres"
          />
        </View>

        <Button onPress={handleSubmit(onSubmit)} style={styles.button}>
          Kaydet
        </Button>
        <Divider />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  maincontainer: {
    margin: 15,
  },
  button: {
    marginVertical: 10,
  },
});

export default HeaderInput;
