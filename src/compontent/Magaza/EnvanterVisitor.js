import React from 'react';
import {Text, Layout, Divider, List} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';
import {MagazaCard} from './MagazaListItem';
import {MagazaVisitorOverflowMenu} from './MagazaOverflowMenu';
//phoneNumber, data, button, status

const EnvanterVisitor = ({phoneNumber, data, button}) => {
  const renderPirlanta = ({item, index}) => <MagazaCard overflow={<MagazaVisitorOverflowMenu phoneNumber={phoneNumber} />} item={item} />;
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.envanterTopContainer}>
          <Text category="h3" style={styles.mainColor}>
            Envanter
          </Text>
          {button}
        </View>
        <Layout style={styles.envanterContainer}>
          <List data={data} renderItem={renderPirlanta} ItemSeparatorComponent={Divider} />
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
    marginHorizontal: '2%',
  },
  envanterContainer: {height: '73%'},
  mainColor: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    fontWeight: '600',
  },
  container: {marginTop: '14%'},
});

export default EnvanterVisitor;
