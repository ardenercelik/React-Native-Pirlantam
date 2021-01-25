import React, {useState} from 'react';
import {Text} from '@ui-kitten/components';
import {View, StyleSheet, Modal} from 'react-native';
import useAxiosFetch from '../hooks/useAxiosFetch';
import {useContext} from 'react/cjs/react.development';
import {LoginContext} from '../context/LoginContext';
import Envanter from '../compontent/Magaza/Envanter';
import Header from '../compontent/Magaza/Header';
import HeaderInput from '../compontent/Magaza/HeaderInput';
import HeaderEditIcon from '../compontent/Magaza/HeaderEditIcon';
import EnvanterAddIcon from '../compontent/Magaza/EnvanterAddIcon';

const QUERY_URL = 'http://192.168.0.106:5000/api/magazas/query?uid=';

const MagazaLoggedInScreen = () => {
  const {user, setUser} = useContext(LoginContext);
  const [search, setSearch] = useState(true);
  const [visible, setVisible] = useState(false);
  // const [data, setData] = useState([]);

  console.log('magaza');
  console.log({user});

  const url = QUERY_URL + user.uid;
  console.log('generated query: ' + url);
  //data buradan geliyör custom
  const {data, loading, error, errorMessage} = useAxiosFetch(search, url);

  return (
    <React.Fragment>
      {!loading ? (
        <>
          <View style={styles.topContainer}>
            <Header
              data={{name: data.name, number: data.number, adres: data.adres}}>
              <HeaderEditIcon visible={() => setVisible(true)} />
            </Header>
            <Envanter data={data.pirlantalar} loading={loading}>
              <EnvanterAddIcon />
            </Envanter>
            <Modal onRequestClose={() => setVisible(false)} visible={visible}>
              <HeaderInput
                data={{
                  name: data.name,
                  number: data.number,
                  adres: data.adres,
                }}
                visible={() => setVisible(false)}></HeaderInput>
            </Modal>
          </View>
        </>
      ) : (
        <Text>arden</Text>
      )}
    </React.Fragment>
  );
};

const MagazaLoggedOutScreen = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}>
      <Text>Magaza yok</Text>
    </View>
  );
};

const MagazaScreen = () => {
  const {user, setUser} = useContext(LoginContext);
  return (
    <View>{user ? <MagazaLoggedInScreen /> : <MagazaLoggedOutScreen />}</View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 15,
  },
});
export default MagazaScreen;
