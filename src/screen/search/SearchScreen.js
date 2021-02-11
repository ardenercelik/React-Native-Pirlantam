import React, {useState, useEffect, useReducer} from 'react';
import {Button, Text, List, Divider} from '@ui-kitten/components';
import {
  QUERY_URL,
  typesMap,
  colorsMap,
  claritiesMap,
  cutsMap,
  certsMap,
} from '../../constants';
import {View, StyleSheet} from 'react-native';
import SelectModal from '../../compontent/pirlanta/SelectModal';
import PirlantaListItem from '../../compontent/pirlanta/PirlantaListItem';
import {searchReducer, initialSearchState} from '../../hooks/SearchActions';
import {useQuery} from 'react-query';
import {fetchData} from '../../helper/axios';

//TODO
//input olarak search geliyor. search false arama yapmıyor, bir şey ile search true olduğunda çalışır. useeffect ile search false yapmak lazım dış fonksiyonda.
// carat min-max değerleri al x
// Magaza Sayfalı ekle, Pirlantanın fiyat propu da olsun. x
// Arkaplanda yükleniyor koy, sonuçlardan verileri alıp güzel bir liste olarak ver //array lookup işlemi constant üzerinden yapılsa daha iyi, api servise get post put ekle, cevapda mağaza da dönsün, sırala karat artan azala, magaza sayfası, login

const SearchScreen = ({navigation}) => {
  //const queryClient = useQueryClient();

  //seçilen şeylerin stateleri
  const [state, dispatch] = useReducer(searchReducer, initialSearchState);
  //model gözüküyor mu gözükmüyor mu, tepedi butonla ara butonu da bakıyor
  const [modelvisible, setMVisible] = useState(false);

  const params = {
    color: colorsMap[state.color] ?? '',
    type: typesMap[state.types] ?? '',
    cut: cutsMap[state.cut] ?? '',
    cert: certsMap[state.cert] ?? '',
    clarity: claritiesMap[state.clarity] ?? '',
    caratmin: state.min,
    caratmax: state.max,
  };

  //seçilen statelerer göre query oluşturuyor
  const query = new URLSearchParams(params);
  const url = QUERY_URL + query;

  const {isLoading: loading, status, data, refetch} = useQuery(
    'pirlantalar',
    () => fetchData(url),
    {
      enabled: false,
    },
  );

  //data buradan geliyör custom

  //data döndüğümnde search false yapıyor ki tekrar aramasın

  // koymazsam hata veriyor??
  const renderPirlanta = ({item, index}) => (
    <PirlantaListItem navigation={navigation} item={item} index={index} />
  );

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
          <Text key="text1">Lütfen Arama yapın</Text>
        ) : (
          [
            loading ? (
              <View key="text">
                <Text>Loading</Text>
              </View>
            ) : (
              <List
                key="list"
                keyExtractor={(item) => `${item.id}`}
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
            refetch();
            setMVisible(false);
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
