import React, {useEffect, useReducer, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Button, Input, Text} from '@ui-kitten/components';
import {
  typesArray,
  cutsArray,
  claritiesArray,
  colorsArray,
  certsArray,
  BASE_URL,
} from '../../constants';
import TopModelNav from '../../compontent/SelectComponent/TopModelNav';
import {SelectQuery} from '../../compontent/SelectComponent/SelectStatus';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import {returnStringFromArray} from '../../helper/validation';
import {axiosPost} from '../../helper/axios';
import {
  actionsEnum,
  initialPostState,
  postPirlantaReducer,
} from '../../hooks/PostActions';
const schema = yup.object().shape({
  carat: yup.number().positive().max(4).required(),
  adet: yup.number().positive().required(),
  price: yup.number().positive().required(),
});

//feedback verdirt

const SearchIcon = (props) => <Icon {...props} name="search-outline" />;
const PirlantaAddInput = (props) => (
  <Input
    {...props}
    keyboardType={'decimal-pad'}
    style={styles.inputComponent}
  />
);

export const EnvanterAddPirlanta = ({route, navigation}) => {
  const [state, dispatch] = useReducer(postPirlantaReducer, initialPostState);
  const {control, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    params = {
      color: returnStringFromArray(state.color, colorsArray),
      type: returnStringFromArray(state.types, typesArray),
      cut: returnStringFromArray(state.cut, cutsArray),
      cert: returnStringFromArray(state.cert, certsArray),
      clarity: returnStringFromArray(state.clarity, claritiesArray),
      adet: data.adet,
      carat: data.carat,
      price: data.price,
      magazaId: route.params.magazaId,
    };
    const url = `${BASE_URL}/pirlantas`;
    await axiosPost(url, params, route.params.token);
    route.params.search();
    navigation.goBack();
  };

  const PostPirlantaButton = () => (
    <Button
      accessoryLeft={SearchIcon}
      onPress={handleSubmit(onSubmit)}
      style={{marginVertical: 6}}>
      Ekle
    </Button>
  );

  const PutPirlantaButton = () => (
    <Button
      accessoryLeft={SearchIcon}
      onPress={handleSubmit(onSubmit)}
      style={{marginVertical: 6}}>
      Ekle
    </Button>
  );

  return (
    <View style={styles.container}>
      <TopModelNav title={'pirlanta ekle'} />
      <View style={styles.queryContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputComponent}>Fiyat </Text>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <PirlantaAddInput
                status={errors.price ? 'danger' : 'primary'}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="price"
            defaultValue=""
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputComponent}>Adet </Text>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <PirlantaAddInput
                status={errors.adet ? 'danger' : 'primary'}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="adet"
            defaultValue=""
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputComponent}>Karat </Text>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <PirlantaAddInput
                status={errors.carat ? 'danger' : 'primary'}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="carat"
            defaultValue=""
          />
        </View>
        <SelectQuery
          values={typesArray}
          placeholder="Kesim Tipleri"
          index={state.types}
          handleSelect={(index) => {
            return dispatch({type: actionsEnum.SET_TYPE, types: index});
          }}
        />
        <SelectQuery
          values={cutsArray}
          placeholder="Kesim Tipleri"
          index={state.cut}
          handleSelect={(index) => {
            return dispatch({type: actionsEnum.SET_CUT, cut: index});
          }}
        />
        <View style={styles.selectContainer}>
          <SelectQuery
            values={colorsArray}
            placeholder="Renk"
            index={state.color}
            handleSelect={(index) => {
              return dispatch({type: actionsEnum.SET_COLOR, color: index});
            }}
          />

          <SelectQuery
            values={certsArray}
            placeholder="Sertifika"
            index={state.cert}
            handleSelect={(index) => {
              return dispatch({type: actionsEnum.SET_CERT, cert: index});
            }}
          />
        </View>
        <SelectQuery
          values={claritiesArray}
          placeholder="Berraklık"
          index={state.clarity}
          handleSelect={(index) => {
            return dispatch({type: actionsEnum.SET_CLARITY, clarity: index});
          }}
        />
        <PostPirlantaButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 20,
    paddingTop: 5,
  },
  queryContainer: {margin: 15, marginTop: 0},
  selectContainer: {
    flex: 0,
    flexDirection: 'row',
    width: '50%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  inputComponent: {
    width: '50%',
  },
});
