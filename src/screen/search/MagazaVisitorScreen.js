import React, {useState} from 'react';
import {Spinner, Text, Modal} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';

import Envanter from '../../compontent/Magaza/Envanter';
import Header from '../../compontent/Magaza/Header';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import {BASE_URL} from '../../constants';

const QUERY_URL = `${BASE_URL}/magazas/`;

const MagazaVisitorScreen = ({route}) => {
  const [search, setSearch] = useState(true);
  // const [data, setData] = useState([]);
  const {magazaId} = route.params;

  const url = QUERY_URL + magazaId;
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
            <Envanter
              phoneNumber={data.number}
              status={'visitor'}
              data={data.pirlantalar}
            />
          </View>
        </>
      ) : (
        <Modal>
          <Spinner />
        </Modal>
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
