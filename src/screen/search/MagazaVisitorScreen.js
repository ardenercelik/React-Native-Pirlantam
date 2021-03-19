import React, {useState} from 'react';
import {Spinner, Text, Modal} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';
import Envanter from '../../compontent/Magaza/Envanter';
import Header from '../../compontent/Magaza/Header';
import {URLS} from '../../constants';
import {useQuery} from 'react-query';
import {fetchData} from '../../helper/axios';

const MagazaVisitorScreen = ({route}) => {
  const [search, setSearch] = useState(true);
  // const [data, setData] = useState([]);
  const {magazaId} = route.params;

  const url = URLS.GET_MAGAZA_FROM_MAGAZAID + magazaId;
  //data buradan geliyör custom
  const {status, data, refetch} = useQuery(
    'magazaVisitor',
    () => fetchData(url),
    {
      enabled: true,
    },
  );
  return (
    <React.Fragment>
      {status === 'success' ? (
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
