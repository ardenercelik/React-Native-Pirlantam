import React, {useState, useEffect, useReducer} from 'react';
import {Button, Text, Spinner, List, Divider} from '@ui-kitten/components';
import {
  cutsArray,
  claritiesArray,
  colorsArray,
  certsArray,
  QUERY_URL,
  typesArray,
} from '../../constants';
import {View, StyleSheet} from 'react-native';

import SelectModal from '../../compontent/pirlanta/SelectModal';
import PirlantaListItem from '../../compontent/pirlanta/PirlantaListItem';
import {checkIfNull} from '../../helper/validation';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import {searchReducer, initialSearchState} from '../../hooks/SearchActions';

//TODO
//input olarak search geliyor. search false arama yapmıyor, bir şey ile search true olduğunda çalışır. useeffect ile search false yapmak lazım dış fonksiyonda.
// carat min-max değerleri al x
// Magaza Sayfalı ekle, Pirlantanın fiyat propu da olsun. x
// Arkaplanda yükleniyor koy, sonuçlardan verileri alıp güzel bir liste olarak ver //array lookup işlemi constant üzerinden yapılsa daha iyi, api servise get post put ekle, cevapda mağaza da dönsün, sırala karat artan azala, magaza sayfası, login

const SearchScreen = ({navigation}) => {
  //useEffect(() => StatusBar.setHidden(true), []);
  //düğmeye basınca arama yapem mi
  const [search, setSearch] = useState(false);
  //seçilen şeylerin stateleri
  const [state, dispatch] = useReducer(searchReducer, initialSearchState);
  //model gözüküyor mu gözükmüyor mu, tepedi butonla ara butonu da bakıyor
  const [modelvisible, setMVisible] = useState(false);

  params = {
    color: checkIfNull(state.color, colorsArray),
    type: checkIfNull(state.types, typesArray),
    cut: checkIfNull(state.cut, cutsArray),
    cert: checkIfNull(state.cert, certsArray),
    clarity: checkIfNull(state.clarity, claritiesArray),
    caratmin: state.min,
    caratmax: state.max,
  };
  //seçilen statelerer göre query oluşturuyor
  const query = new URLSearchParams(params);
  const url = QUERY_URL + query;

  //data buradan geliyör custom

  const {data, loading, error, errorMessage} = useAxiosFetch(search, url);
  //data döndüğümnde search false yapıyor ki tekrar aramasın

  // koymazsam hata veriyor??
  const renderPirlanta = ({item, index}) => (
    <PirlantaListItem navigation={navigation} item={item} index={index} />
  );

  useEffect(() => {
    setSearch(false);
  }, [data]);
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Button
          onPress={() => {
            setMVisible(true);
          }}>
          Menü Aç
        </Button>

        {data == null ? (
          <Text>Lütfen Arama yapın</Text>
        ) : (
          [
            loading ? (
              <Spinner size="large" />
            ) : (
              <List
                data={data}
                renderItem={renderPirlanta}
                ItemSeparatorComponent={Divider}
              />
            ),
          ]
        )}
      </View>

      <View
        style={{
          alignItems: 'center',
        }}>
        <SelectModal
          visible={modelvisible}
          toggle={() => {
            setMVisible(!modelvisible);
          }}
          onButtonPress={() => {
            setMVisible(false);
            setSearch(true);
          }}
          selectState={state}
          selectDispatch={dispatch}
        />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});

export default SearchScreen;
