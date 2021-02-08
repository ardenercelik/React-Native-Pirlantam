import React from 'react';
import {Text, Layout, Divider, List} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';
import MagazaListItem from '../MagazaListItem';
//phoneNumber, data, button, status

const Envanter = (props) => {
  return (
    <React.Fragment>
      <View style={{marginTop: 50}}>
        <View style={styles.envanterTopContainer}>
          <Text style={{alignSelf: 'flex-end'}}>Envanter</Text>
          {props.button}
        </View>
        <Layout style={styles.envanterContainer}>
          <List
            data={props.data}
            renderItem={({item, index}) => (
              <MagazaListItem
                phoneNumber={props.phoneNumber}
                item={item}
                index={index}
                status={props.status}
                search={props.search}
                token={props.token}
              />
            )}
            ItemSeparatorComponent={Divider}
          />
        </Layout>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  envanterTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  envanterContainer: {height: '75%'},
});

export default Envanter;
