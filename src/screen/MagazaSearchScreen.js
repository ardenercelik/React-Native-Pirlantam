import React, {useState, useEffect, useReducer} from 'react';
import {Button, Text, List, Divider} from '@ui-kitten/components';
import {URLS} from '../constants';
import {View, StyleSheet} from 'react-native';
import {useQuery} from 'react-query';
import {fetchData} from '../helper/axios';
import MagazaList from '../compontent/Magaza/MagazaList';
import ModalSpinner from '../compontent/ModalSpinner';

//TODO

//input olarak search geliyor. search false arama yapmıyor, bir şey ile search true olduğunda çalışır. useeffect ile search false yapmak lazım dış fonksiyonda.
// carat min-max değerleri al x
// Magaza Sayfalı ekle, Pirlantanın fiyat propu da olsun. x
// Arkaplanda yükleniyor koy, sonuçlardan verileri alıp güzel bir liste olarak ver //array lookup işlemi constant üzerinden yapılsa daha iyi, api servise get post put ekle, cevapda mağaza da dönsün, sırala karat artan azala, magaza sayfası, login

const MagazaSearchScreen = ({navigation, url}) => {
  //pagination düzelt
  url = URLS.GET_MAGAZA;

  //seçilen şeylerin stateleri
  //model gözüküyor mu gözükmüyor mu, tepedi butonla ara butonu da bakıyor
  const [modelvisible, setMVisible] = useState(false);

  //seçilen statelerer göre query oluşturuyor

  const {isLoading: loading, status, data, refetch} = useQuery(
    'magazas',
    () => fetchData(url),
    {
      enabled: true,
    },
  );

  //data buradan geliyör custom

  //data döndüğümnde search false yapıyor ki tekrar aramasın

  // koymazsam hata veriyor??
  const renderMagazaCard = ({item, index}) => (
    <MagazaList navigation={navigation} item={item} index={index} />
  );

  return (
    <React.Fragment>
      <View style={styles.container}>
        {data == null ? (
          <Text key="text1">Lütfen Arama yapın</Text>
        ) : (
          [
            loading ? (
              <ModalSpinner />
            ) : (
              <List
                style={{backgroundColor: 'rgba(0,0,0,0)'}}
                key="list"
                keyExtractor={(item) => `${item.magazaId}`}
                data={data.magazalar}
                renderItem={renderMagazaCard}
                ItemSeparatorComponent={Divider}
              />
            ),
          ]
        )}
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});

export default MagazaSearchScreen;
