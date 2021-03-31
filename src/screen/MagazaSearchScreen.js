import React, {useState, useEffect, useReducer} from 'react';
import {Button, Text, List, Divider, TopNavigation, Input, Card, Icon, Layout} from '@ui-kitten/components';
import {URLS} from '../constants';
import {View, StyleSheet} from 'react-native';
import {useQuery} from 'react-query';
import {fetchData} from '../helper/axios';
import MagazaCard from '../compontent/SearchMagaza/MagazaList';
import ModalSpinner from '../compontent/ModalSpinner';
import {default as theme} from '../theme.json';
const SearchOutlineIcon = (props) => <Icon {...props} name="search-outline" />;

const MagazaSearchScreen = ({navigation, url}) => {
  //pagination düzelt
  url = URLS.GET_MAGAZA;

  //seçilen şeylerin stateleri
  //model gözüküyor mu gözükmüyor mu, tepedi butonla ara butonu da bakıyor
  const [modelvisible, setMVisible] = useState(false);

  //seçilen statelerer göre query oluşturuyor

  const {isLoading: loading, status, data, refetch} = useQuery('magazas', () => fetchData(url), {
    enabled: true,
  });

  const renderMagazaCard = ({item, index}) => <MagazaCard navigation={navigation} item={item} index={index} />;

  return (
    <React.Fragment>
      <Layout style={{backgroundColor: theme['color-primary-500']}}>
        <Input status="primary" accessoryLeft={SearchOutlineIcon} placeholder={"Pirlantam'da Ara"} style={{marginHorizontal: '3%', marginVertical: '2%'}} />
      </Layout>
      <View style={styles.container}>
        {[
          loading ? (
            <ModalSpinner />
          ) : (
            <List
              style={{backgroundColor: 'rgba(0,0,0,0)'}}
              key={(item) => `${item.magazaId}`}
              keyExtractor={(item) => `${item.magazaId}`}
              data={data.magazalar}
              renderItem={renderMagazaCard}
              ItemSeparatorComponent={Divider}
            />
          ),
        ]}
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
