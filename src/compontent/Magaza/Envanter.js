import React from 'react';
import {Text, Layout, Divider, List} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';
import MagazaListItem from '../MagazaListItem';

const Envanter = (props) => {
  const renderI = ({item, index}) => {
    return <MagazaListItem item={item} index={index} />;
  };
  return (
    <React.Fragment>
      <View style={{marginTop: 50}}>
        <View style={styles.envanterTopContainer}>
          <Text style={{alignSelf: 'flex-end'}}>Envanter</Text>
          {props.children}
        </View>
        <Layout style={styles.envanterContainer}>
          <List
            data={props.data}
            renderItem={renderI}
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
