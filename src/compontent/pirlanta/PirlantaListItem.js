import React from 'react';
import {ListItem, Text} from '@ui-kitten/components';
import PirlantaOverflow from './PirlantaOverflowMenu';

function PirlantaListItem({item, index, navigation}) {
  return (
    <ListItem
      key={item.id}
      style={{
        borderRadius: 5,
        backgroundColor: index % 2 == 0 ? '#f6f6f6' : '#ffffff',
        paddingVertical: 10,
        marginVertical: 15,
      }}
      title={`Magaza: ${item.magaza?.name ?? ''} | Adet: ${
        item.adet
      } | Karat: ${item.carat}`}
      description={`${item.type} - ${item.color} - ${item.clarity} - ${item.cut} - ${item.cert}`}
      accessoryRight={() => (
        <PirlantaOverflow
          magazaId={item.magaza?.magazaId}
          number={item.magaza?.numara}
          navigation={navigation}
        />
      )}
      accessoryLeft={() => <Text category="h6">${item.price}</Text>}
    />
  );
}

export default PirlantaListItem;
