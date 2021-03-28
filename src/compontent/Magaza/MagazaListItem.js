import React from 'react';
import {View, StyleSheet} from 'react-native';
import {returnIcon} from '../../helper/returnIcon';
import {Card, Layout} from '@ui-kitten/components';
import {Text} from '@ui-kitten/components';
import {StyledText} from '../StyledText';

export const MagazaCard = ({item, overflow}) => {
  const Footer = () => (
    <View style={styles.footerContainer}>
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
        <Layout style={styles.contentContainer}>
          <Layout style={styles.contentContainer2}>
            <PirlantaIcon width={50} height={50} />
            <Layout style={styles.textContainer}>
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
          <Layout>{overflow}</Layout>
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
  footerContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingVertical: 1,
    marginRight: '5%',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%',
  },
  textContainer: {marginHorizontal: '5%'},
  middleDot: {
    color: '#ff5600',
  },
  mainColor: {
    fontWeight: 'bold',
  },
  priceFont: {
    fontWeight: 'bold',
  },
});
