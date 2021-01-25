import React, {useState} from 'react';
import {Text} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';

import Envanter from './Envanter';
import Header from './Header';
import useAxiosFetch from '../../hooks/useAxiosFetch';

const QUERY_URL = 'http://192.168.0.106:5000/api/magazas/';

const MagazaVisitorScreen = ({route}) => {
  const [search, setSearch] = useState(true);
  // const [data, setData] = useState([]);
  const {magazaId} = route.params;
  console.log('magaza visitor');

  const url = QUERY_URL + magazaId;
  console.log('generated query: ' + url);
  //data buradan geliyör custom
  const {data, loading, error, errorMessage} = useAxiosFetch(search, url);

  return (
    <React.Fragment>
      {!loading ? (
        <>
          <View style={styles.topContainer}>
            <Header
              data={{
                name: data.name,
                number: data.number,
                adres: data.adres,
              }}></Header>
            <Envanter data={data.pirlantalar} loading={loading}></Envanter>
          </View>
        </>
      ) : (
        <Text>arden</Text>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 15,
  },
});
export default MagazaVisitorScreen;
