import React, {useEffect, useState} from 'react';
import {Text, Button, Icon} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import {useContext} from 'react/cjs/react.development';
import {LoginContext} from '../../context/LoginContext';
import Envanter from '../../compontent/Magaza/Envanter';
import Header from '../../compontent/Magaza/Header';
import {BASE_URL} from '../../constants';
import ModalSpinner from '../../compontent/ModalSpinner';
import {magazaScreenNavs} from '../../navigation/Navs';

const QUERY_URL = `${BASE_URL}/magazas/query?uid=`;

const PlusIcon = (props) => <Icon {...props} name="plus-square-outline" />;
const EditIcon = (props) => <Icon {...props} name="edit-2-outline" />;

const EnvanterAddButton = ({navigation, magazaId, search, token}) => (
  <Button
    onPress={() =>
      navigation.navigate(magazaScreenNavs.AddPirlanta, {
        magazaId: magazaId,
        token: token,
        search: search,
      })
    }
    size="small"
    accessoryLeft={PlusIcon}
  />
);
const MagazaLoggedInScreen = ({navigation}) => {
  const {token, user, setUser, magazaLoading} = useContext(LoginContext);

  const [auto, setAuto] = useState(true);

  const [search, setSearch] = useState(false);

  const url = QUERY_URL + user.uid;
  //data buradan geliyör custom
  useEffect(() => {
    if (magazaLoading) {
      setAuto(false);
    } else {
      setAuto(true);
    }
  }, [magazaLoading]);

  const {data, loading, error, errorMessage} = useAxiosFetch(
    search,
    url,
    token,
    auto,
  );
  useEffect(() => {
    console.log('Magaza Logged In Error:' + errorMessage);
  }, [errorMessage]);
  //TODO
  //magaza put, pirlanta sil, pirlanta ekle güvenlik ekle, pırlanta ekleme ekle, db postgres yap, paging ekle, giriş yapma çıkış yapma düzenle, giriş yapma işlemini güzelleştir user otomatik oluşsun
  //giriş yaptıktan sonra yönlendir. tamam
  //aramada kendi olmayanı returnle,
  //db paging, db connection pool
  //register olurken uygulamayı kapasa, internet gitse?
  //feedback react-native-feedback

  //magaza ekranı
  //async storage - offline case - react-native-offline
  //liste lookupları dict çevir

  //logging
  //dizayn
  return (
    <React.Fragment>
      {!loading && !magazaLoading ? (
        <>
          <View style={styles.topContainer}>
            <Header
              data={{
                name: data?.name,
                number: data?.number,
                adres: data?.adres,
              }}>
              <Button
                onPress={() => {
                  navigation.navigate(magazaScreenNavs.EditHeader, {
                    data: data,
                    search: () => setSearch(!search),
                    magazaId: data?.magazaId,
                    token: token,
                  });
                }}
                style={{left: 15, bottom: 10}}
                appearance="ghost"
                accessoryLeft={EditIcon}
              />
            </Header>
            <Envanter
              status={'owner'}
              button={
                <EnvanterAddButton
                  magazaId={data?.magazaId}
                  search={() => setSearch(!search)}
                  token={token}
                  navigation={navigation}
                />
              }
              search={() => setSearch(!search)}
              token={token}
              data={data?.pirlantalar}></Envanter>
          </View>
        </>
      ) : (
        <Text>Loading</Text>
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

//logout olup başka user geçince error veriyor
const MagazaScreen = ({navigation}) => {
  const {user} = useContext(LoginContext);
  return (
    <View>
      {user ? (
        <MagazaLoggedInScreen navigation={navigation} />
      ) : (
        <MagazaLoggedOutScreen />
      )}
    </View>
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
