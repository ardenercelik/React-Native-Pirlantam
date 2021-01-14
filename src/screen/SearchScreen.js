import React, {useState, useReducer, useEffect, useContext} from 'react';
import {Button} from '@ui-kitten/components';
import {
  typesArray,
  cutsArray,
  claritiesArray,
  colorsArray,
  certsArray,
} from '../constants';
import {Text} from 'react-native-elements';
import {
  Animated,
  ListViewBase,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import SelectModal from '../compontent/SelectModal';
import {SelectContext} from '../context/Context';
import {PirlantaContext} from '../context/PirlantaContext';
import PirlantaApi from '../api/PirlantaService';
import {FlatList} from 'react-native-gesture-handler';

function isItNumber(str) {
  return /^\-?[0-9]+(e[0-9]+)?(\.[0-9]+)?$/.test(str);
}
const checkIfNull = (value, array) => {
  return array[value - 1] != null ? array[value - 1] : '';
};
const changeInputDisplayValue = (value) => {
  if (!isItNumber(value)) {
    return '0';
  } else if (value < 1.0) {
    return (value * 10).toFixed(2);
  }
  return value < 4.0 ? value.toString() : (value / 100).toFixed(2).toString();
};
// validationları helper altına al, buttona basınca spinner ekle, sonuçlardan verileri alıp güzel bir liste olarak ver //array lookup işlemi constant üzerinden yapılsa daha iyi, api servise get post put ekle, cevapda mağaza da dönsün

const SearchScreen = () => {
  const [pirlanta, setPirlanta] = useState([]);
  const {state, dispatch} = useContext(SelectContext);
  useEffect(() => StatusBar.setHidden(true), []);
  const [modelvisible, setMVisible] = useState(false);

  const fetchPirlanta = () => {
    PirlantaApi.query({
      color: checkIfNull(state.color, colorsArray),
      type: checkIfNull(state.types, typesArray),
      cut: checkIfNull(state.cut, cutsArray),
      cert: checkIfNull(state.cert, certsArray),
      clarity: checkIfNull(state.clarity, claritiesArray),
      caratmin: 0,
      caratmax: 4,
    })
      //.then((response) => response.data)
      .then((json) => {
        setPirlanta(json.data);
      })
      .catch((error) => console.error(error));
  };
  return (
    <React.Fragment>
      <Button
        onPress={() => {
          setMVisible(true);
        }}>
        Menü Aç
      </Button>

      <FlatList
        data={pirlanta}
        keyExtractor={({id}, index) => id.toString()}
        renderItem={({item}) => (
          <>
            <Text>
              kesim: {item.type} karat: {item.carat} adet: {item.adet}
            </Text>
          </>
        )}
      />

      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'pink',
        }}>
        <SelectModal
          visible={modelvisible}
          toggle={() => {
            setMVisible(!modelvisible);
            fetchPirlanta();
          }}
        />
      </View>
    </React.Fragment>
  );
};

export default SearchScreen;
