import React, {useContext} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import axios from 'axios';
import {useState, useEffect} from 'react/cjs/react.development';
import {FlatList} from 'react-native-gesture-handler';
import {SelectContext} from '../context/Context';
import {
  typesArray,
  colorsArray,
  cutsArray,
  certsArray,
  claritiesArray,
} from '../constants';
import PirlantaApi from '../api/PirlantaService';

const checkIfNull = (value, array) => {
  return array[value - 1] != null ? array[value - 1] : '';
};

function FetchScreen() {
  const {state, dispatch} = useContext(SelectContext);
  const [posts, setPosts] = useState([]);

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
        console.log(json.data);
        setPosts(json.data);
      })
      .catch((error) => console.error(error));
  };

  //   useEffect(() => {
  //     PirlantaApi.query({
  //       color: checkIfNull(state.color, colorsArray),
  //       type: checkIfNull(state.types, typesArray),
  //       cut: checkIfNull(state.cut, cutsArray),
  //       cert: checkIfNull(state.cert, certsArray),
  //       clarity: checkIfNull(state.clarity, claritiesArray),
  //       caratmin: 0,
  //       caratmax: 4,
  //     })
  //       //.then((response) => response.data)
  //       .then((json) => {
  //         console.log(json.data);
  //         setPosts(json.data);
  //       })
  //       .catch((error) => console.error(error));
  //   }, [state]);

  //   const onChange = (e) => {
  //     //alert("post")
  //     setTextInput(e.toUpperCase());
  //   };

  return (
    <View style={{flex: 1, padding: 24}}>
      <TextInput onChangeText={(e) => onChange(e)}></TextInput>
      <Button
        onPress={() => {
          fetchPirlanta();
        }}
        title="Fetch Data">
        <Text></Text>
      </Button>
      <FlatList
        data={posts}
        keyExtractor={({id}, index) => id.toString()}
        renderItem={({item}) => (
          <>
            <Text>
              kesim: {item.type} karat: {item.carat} adet: {item.adet}
            </Text>
          </>
        )}
      />
    </View>
  );
}

export default FetchScreen;
