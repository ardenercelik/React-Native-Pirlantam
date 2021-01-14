import React, {useRef, useEffect, useReducer, useContext} from 'react';
import {View, Animated} from 'react-native';
import Inputs from './inputs';
import TopModelNav from './TopModelNav';
import {Icon, Button} from '@ui-kitten/components';
import {
  typesArray,
  cutsArray,
  claritiesArray,
  colorsArray,
  certsArray,
} from '../constants';
import {SelectQuery} from './SelectStatus';
import {SelectContext} from '../context/Context';

const SearchIcon = (props) => <Icon {...props} name="search-outline" />;

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
  return (
    <Animated.View style={{width: '100%', height: '100%', opacity: fadeAnim}}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          backgroundColor: '#FFF',
          borderRadius: 20,
          paddingTop: 5,
        }}>
        <TopModelNav />

        <View style={{margin: 15, marginTop: 0}}>
          <Inputs
            onMinChangeText={() => {
              dispatch({
                type: 'SET_MIN',
                min: state.min,
              });
            }}
            onMaxChangeText={() => {
              dispatch({
                type: 'SET_MAX',
                max: state.max,
              });
            }}
          />
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
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              width: '50%',
            }}>
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
            status="success"
            style={{margin: 3}}
            onPress={props.toggle}
            status="danger">
            Ara
          </Button>
        </View>
      </View>
    </Animated.View>
  );
};
2;
