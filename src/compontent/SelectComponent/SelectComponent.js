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

const SearchIcon = (props) => <Icon {...props} name="search-outline" />;

export const SelectComponent = ({
  toggle,
  visible,
  accessoryLeft,
  accessoryRight,
  title,
  state,
  dispatch,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, visible]);

  return (
    <Animated.View style={{width: '100%', height: '100%', opacity: fadeAnim}}>
      <View style={styles.container}>
        <TopModelNav
          accessoryLeft={accessoryLeft}
          accessoryRight={() => accessoryRight(dispatch)}
          title={title}
        />
        <View style={styles.queryContainer}>
          <View>
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
            style={{marginVertical: 3}}
            onPress={toggle}>
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
