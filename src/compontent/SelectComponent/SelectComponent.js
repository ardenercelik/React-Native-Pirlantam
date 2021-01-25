import React, {useRef, useEffect, useContext} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import Inputs from './inputs';
import TopModelNav from './TopModelNav';
import {Icon, Button} from '@ui-kitten/components';
import {
  typesArray,
  cutsArray,
  claritiesArray,
  colorsArray,
  certsArray,
} from '../../constants';
import {SelectQuery} from './SelectStatus';
import {SelectContext} from '../../context/Context';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const SearchIcon = (props) => <Icon {...props} name="search-outline" />;

const schema = yup.object().shape({
  tel: yup.number(),
});

export const SelectComponent = (props) => {
  const {state, dispatch} = useContext(SelectContext);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, props.visible]);

  const {getValues, register, reset, control, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      min: 0,
      max: 4.0,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Animated.View style={{width: '100%', height: '100%', opacity: fadeAnim}}>
      <View style={styles.container}>
        <TopModelNav />
        <View style={styles.queryContainer}>
          <View style={{marginHorizontal: 3}}>
            <Inputs
              valueMax={state.max.toString()}
              valueMin={state.min.toString()}
              onMinChangeText={(value) => {
                dispatch({
                  type: 'SET_MIN',
                  min: value,
                });
                console.log('state: ' + state.min.toString());
              }}
              onMaxChangeText={(value) => {
                dispatch({
                  type: 'SET_MAX',
                  max: value,
                });
                console.log('state: ' + state.max);
              }}
            />
          </View>

          <SelectQuery
            values={typesArray}
            placeholder="Kesim Tipleri"
            index={state.types}
            handleSelect={(index) => {
              return dispatch({type: 'SET_TYPE', types: index});
            }}
          />
          <SelectQuery
            values={cutsArray}
            placeholder="Kesim Tipleri"
            index={state.cut}
            handleSelect={(index) => {
              return dispatch({type: 'SET_CUT', cut: index});
            }}
          />
          <View style={styles.selectContainer}>
            <SelectQuery
              values={colorsArray}
              placeholder="Renk"
              index={state.color}
              handleSelect={(index) => {
                return dispatch({type: 'SET_COLOR', color: index});
              }}
            />

            <SelectQuery
              values={certsArray}
              placeholder="Sertifika"
              index={state.cert}
              handleSelect={(index) => {
                return dispatch({type: 'SET_CERT', cert: index});
              }}
            />
          </View>
          <SelectQuery
            values={claritiesArray}
            placeholder="Berraklık"
            index={state.clarity}
            handleSelect={(index) => {
              return dispatch({type: 'SET_CLARITY', clarity: index});
            }}
          />
          <Button
            accessoryLeft={SearchIcon}
            style={{margin: 3}}
            onPress={props.toggle}>
            Ara
          </Button>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingTop: 5,
  },
  queryContainer: {margin: 15, marginTop: 0},
  selectContainer: {
    flex: 0,
    flexDirection: 'row',
    width: '50%',
  },
});
