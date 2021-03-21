import React from 'react';
import {Card, Icon, Layout, ListItem, StyleService, Text, useStyleSheet, withStyles} from '@ui-kitten/components';
import PirlantaOverflow from './PirlantaOverflowMenu';
import {View, StyleSheet} from 'react-native';
import {returnIcon} from '../../helper/returnIcon';
import {default as theme} from '../../theme.json';

function PirlantaListItem({item, index, navigation}) {
  const PirlantaIcon = returnIcon(item.type);

  return (
    <ListItem
      key={item.id}
      style={{
        borderRadius: 5,
        backgroundColor: index % 2 == 0 ? '#f6f6f6' : '#ffffff',
        paddingVertical: 10,
      }}
      title={`Magaza: ${item.magaza?.name ?? ''} ● Adet: ${item.adet} ● Karat: ${item.carat} ${item.type} ● ${item.color} ● ${item.clarity} ● ${item.cut} ● ${item.cert}`}
      accessoryRight={() => <PirlantaOverflow magazaId={item.magaza?.magazaId} number={item.magaza?.numara} navigation={navigation} />}
      description={`${item.magaza?.name ?? ''}`}
      //accessoryLeft={() => <Text category="h6">${item.price}</Text>}
      accessoryLeft={() => <PirlantaIcon width={50} height={50} />}
    />
  );
}

export const PirlantaCard = ({item, index, navigation}) => {
  const Footer = () => (
    <View
      style={{
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingVertical: 1,
        marginRight: '5%',
      }}>
      <Text category="s1" style={styles.priceFont}>
        {item.price}$
      </Text>
    </View>
  );
  const PirlantaIcon = returnIcon(item.type);
  const StyledMiddleDot = () => <Text style={styles.middleDot}> ● </Text>;
  return (
    <Layout style={{marginHorizontal: '2%'}}>
      <Card>
        <Layout
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Layout
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: '2%',
            }}>
            <PirlantaIcon width={50} height={50} />
            <Layout style={{marginHorizontal: '5%'}}>
              <Text category="p1" style={styles.mainColor}>
                <StyledMiddleDot />
                {` ${item.type} `}
                {item.adet ? <StyledMiddleDot /> : ''}
                {`${item.adet ? item.adet + ' Adet ' : ''}`}
                {item.carat ? <StyledMiddleDot /> : ''}
                {`${item.carat ? item.carat + 'ct' : ''}\n`}
                {item.color ? <StyledMiddleDot /> : ''}
                {`${item.color ? item.color + '' : ''}`}
                {item.clarity ? <StyledMiddleDot /> : ''}
                {`${item.clarity ? item.clarity + ' ' : ''}`}
                {item.cert ? <StyledMiddleDot /> : ''}
                {`${item.cert ? item.cert + '' : ''}`}
                {item.cut ? <StyledMiddleDot /> : ''}
                {`${item.cut ? item.cut + '' : ''}`}
              </Text>
            </Layout>
          </Layout>
          <Layout>
            <PirlantaOverflow magazaId={item.magaza?.magazaId} number={item.magaza?.numara} navigation={navigation} />
          </Layout>
        </Layout>
        <Layout>
          <Footer />
        </Layout>
      </Card>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleDot: {
    color: '#ff5600',
  },
  mainColor: {
    color: theme['color-primary-500'],
    fontWeight: 'bold',
  },
  priceFont: {
    color: theme['color-primary-500'],
    fontWeight: 'bold',
  },
});
export default PirlantaListItem;
