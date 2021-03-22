import React, {useState, useEffect, useReducer} from 'react';
import {Button, Text, List, Divider, Layout, Spinner, Modal, ListItem, Icon, RadioGroup, Radio} from '@ui-kitten/components';
import {typesMap, colorsMap, claritiesMap, cutsMap, certsMap, URLS} from '../../constants';
import {View, StyleSheet} from 'react-native';
import {searchReducer, initialSearchState} from '../../hooks/SearchActions';
import {QueryClient, useQuery} from 'react-query';
import {fetchData} from '../../helper/axios';
import {SelectModal, PirlantaCard, SearchButtonGroup} from '../../compontent/pirlanta';
import {NotFound, Search} from '../../assets/icons';
import {orderQueryData, queryClient} from '../../helper/query-client';

const orderQueryDataAndCloseModal = (queryClient, key, setState, item, order = 'asc') => {
  orderQueryData(queryClient, key, item, order);
  setState(false);
};
//TODO
//input olarak search geliyor. search false arama yapmıyor, bir şey ile search true olduğunda çalışır. useeffect ile search false yapmak lazım dış fonksiyonda.
// carat min-max değerleri al x
// Magaza Sayfalı ekle, Pirlantanın fiyat propu da olsun. x
// Arkaplanda yükleniyor koy, sonuçlardan verileri alıp güzel bir liste olarak ver //array lookup işlemi constant üzerinden yapılsa daha iyi, api servise get post put ekle, cevapda mağaza da dönsün, sırala karat artan azala, magaza sayfası, login
const SearchScreen = ({navigation}) => {
  //seçilen arama şeylerinin stateleri
  const [state, dispatch] = useReducer(searchReducer, initialSearchState);
  //model gözüküyor mu gözükmüyor mu, tepedi butonla ara butonu da bakıyor
  const [modelvisible, setMVisible] = useState(false);
  const [sortModelVisible, setSortModelVisible] = useState(false);

  //sıralama stateleri
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
  const url = URLS.GET_PIRLANTA + query;

  const {isLoading: loading, status, data, refetch} = useQuery('pirlantalar', () => fetchData(url), {
    enabled: false,
  });

  const renderPirlanta = ({item, index}) => <PirlantaCard navigation={navigation} item={item} index={index} />;

  const renderScreen = (data) => {
    if (data == null) {
      return (
        <View
          style={{
            height: '90%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Search width={'50%'} height={'50%'} />
          <Button
            style={{width: '50%'}}
            appearance="outline"
            onPress={() => {
              setMVisible(true);
            }}
            status="outline">
            Arama Yap!
          </Button>
        </View>
      );
    } else if (data.length === 0) {
      return (
        <View
          style={{
            height: '90%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <NotFound width={'50%'} height={'30%'} />
          <View style={{width: '80%'}}>
            <Text category="h4" style={{fontWeight: 'bold'}}>
              Aramana uygun bir sonuç
            </Text>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontWeight: 'bold'}} category="h4">
                bulamadık!
              </Text>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <List key="list" keyExtractor={(item) => item.id.toString()} data={data} renderItem={renderPirlanta} ItemSeparatorComponent={Divider} />
        </View>
      );
    }
  };
  console.log(data);
  return (
    <React.Fragment>
      <View style={styles.container}>
        <SearchButtonGroup
          data={data}
          onPress={() => {
            setMVisible(true);
          }}
          onSortPress={() => {
            setSortModelVisible(true);
          }}
        />

        {loading ? (
          <View
            style={{
              height: '90%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            key="text">
            <Spinner size="large" />
          </View>
        ) : (
          renderScreen(data)
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
      <Modal
        backdropStyle={{
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
        onBackdropPress={() => setSortModelVisible(false)}
        style={{width: '80%', justifyContent: 'center', alignItems: 'center'}}
        visible={sortModelVisible}>
        <Layout style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <Layout style={{marginVertical: '3%'}}>
            <Text style={{fontWeight: 'bold'}} category="h5">
              Sıralama
            </Text>
          </Layout>
          <ListItem
            onPress={() => {
              orderQueryDataAndCloseModal(queryClient, 'pirlantalar', setSortModelVisible, 'adet', ['asc']);
            }}
            title={() => <Text category="h6">Adete Göre(Artan)</Text>}
          />
          <ListItem
            onPress={() => {
              orderQueryDataAndCloseModal(queryClient, 'pirlantalar', setSortModelVisible, 'adet', ['desc']);
            }}
            title={() => <Text category="h6">Adete Göre(Azalan)</Text>}
          />
          <ListItem
            onPress={() => {
              orderQueryDataAndCloseModal(queryClient, 'pirlantalar', setSortModelVisible, 'price', ['asc']);
            }}
            title={() => <Text category="h6">Fiyata Göre(Artan)</Text>}
          />
          <ListItem
            onPress={() => {
              orderQueryDataAndCloseModal(queryClient, 'pirlantalar', setSortModelVisible, 'price', ['desc']);
            }}
            title={() => <Text category="h6">Fiyata Göre(Azalan)</Text>}
          />
          <ListItem
            onPress={() => {
              orderQueryDataAndCloseModal(queryClient, 'pirlantalar', setSortModelVisible, 'carat', ['asc']);
            }}
            title={() => <Text category="h6">Karata Göre(Artan)</Text>}
          />
          <ListItem
            onPress={() => {
              orderQueryDataAndCloseModal(queryClient, 'pirlantalar', setSortModelVisible, 'carat', ['desc']);
            }}
            title={() => <Text category="h6">Karata Göre(Azalan)</Text>}
          />

          <Layout style={{width: '100%', marginVertical: '2%', alignItems: 'flex-end'}}>
            <Button onPress={() => setSortModelVisible(false)} appearance="ghost" style={{width: '40%'}}>
              Vazgeç
            </Button>
          </Layout>
        </Layout>
      </Modal>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
});

export default SearchScreen;
