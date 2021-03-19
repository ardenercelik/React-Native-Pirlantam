import React from 'react';
import {ListItem, Text} from '@ui-kitten/components';
import PirlantaOverflow from '../pirlanta/PirlantaOverflowMenu';

function MagazaList({item, index, navigation}) {
  return (
    <ListItem
      style={{
        borderRadius: 5,
        marginVertical: 3,
        backgroundColor: index % 2 == 0 ? '#f6f6f6' : '#ffffff',
        paddingVertical: 30,
      }}
      title={`${item.name} `}
      description={`${item.adres} `}
      accessoryRight={() => (
        <PirlantaOverflow
          magazaId={item.magazaId}
          number={item.numara}
          navigation={navigation}
        />
      )}
    />
  );
}

export default MagazaList;
