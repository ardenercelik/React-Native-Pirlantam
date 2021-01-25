import React from 'react';
import {
  Text,
  ListItem,
  Icon,
  Divider,
  Input,
  Button,
} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const schema = yup.object().shape({
  tel: yup.string().matches(phoneRegex, 'Invalid phone.'),
  name: yup.string().required().max(30),
  adres: yup.string().required('Lütfen mail adresinizi giriniz'),
});

const PhoneIcon = (props) => <Icon {...props} name="smartphone-outline" />;
const MailIcon = (props) => <Icon {...props} name="email-outline" />;

const HeaderInput = ({data, visible}) => {
  const {getValues, register, reset, control, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: data.name,
      adres: data.adres,
      tel: data.number,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
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
                  //accessoryLeft={() => <Text>+90</Text>}
                />
              )}
              name="name"
            />
          </View>
        </View>
        <Divider />
        <ListItem>
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
        </ListItem>
        <Divider />
        <ListItem accessoryLeft={MailIcon}>
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
        </ListItem>
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
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: 5,
  },
  maincontainer: {
    margin: 15,
  },
  button: {
    margin: 5,
    marginVertical: 10,
  },
});

export default HeaderInput;
