import React, {useEffect, useState, useContext} from 'react';
import {Text, Button, Icon} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';
import {LoginContext} from '../../context/LoginContext';
import {URLS} from '../../constants';
import ModalSpinner from '../../compontent/ModalSpinner';
import {magazaScreenNavs} from '../../navigation/Navs';
import {useQuery} from 'react-query';
import {fetchData, deleteItem} from '../../helper/axios';
import {Envanter, Header} from '../../compontent/Magaza';

const PlusIcon = (props) => <Icon {...props} name="plus-square-outline" />;
const EditIcon = (props) => <Icon {...props} name="edit-2-outline" />;

const EnvanterAddButton = ({navigation, magazaId, search, token}) => (
  <Button
    onPress={() => {
      navigation.navigate(magazaScreenNavs.AddPirlanta, {
        magazaId: magazaId,
        token: token,
        search: search,
      });
    }}
    size="small"
    accessoryLeft={PlusIcon}
  />
);
export const MagazaLoggedInScreen = ({navigation}) => {
  const {token, user, setUser, magazaLoading} = useContext(LoginContext);

  const url = URLS.GET_MAGAZA_DATA_FROM_UID + user.uid;
  //data buradan geliyör custom
  const {isLoading: loading, data, refetch, error: errorMessage} = useQuery('magaza', () => fetchData(url), {
    enabled: false,
    token: token,
  });

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    console.log('Magaza Logged In Error:' + errorMessage);
  }, [errorMessage]);

  //logging
  //dizayn
  return (
    <React.Fragment>
      {!loading ? (
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
                    search: () => refetch(),
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
              button={<EnvanterAddButton magazaId={data?.magazaId} search={() => refetch()} token={token} navigation={navigation} />}
              search={() => refetch()}
              token={token}
              data={data?.pirlantalar}></Envanter>
          </View>
        </>
      ) : (
        <ModalSpinner />
      )}
    </React.Fragment>
  );
};

export const MagazaLoggedOutScreen = () => {
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
  const {user, magazaLoading} = useContext(LoginContext);
  return <View>{user && !magazaLoading ? <MagazaLoggedInScreen navigation={navigation} /> : <MagazaLoggedOutScreen />}</View>;
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 15,
  },
});
export default MagazaScreen;
