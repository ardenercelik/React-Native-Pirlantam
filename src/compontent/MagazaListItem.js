import React from 'react';

import {ListItem, Text} from '@ui-kitten/components';
import MagazaOverflowMenu from './Magaza/MagazaOverflowMenu';

function MagazaListItem({item, index, status, phoneNumber, search, token}) {
  //console.log('item');

  return (
    <ListItem
      style={{borderRadius: 5}}
      title={`Adet: ${item.adet} | Karat: ${item.carat}`}
      description={`${item.type ?? ''}  ${item.color ?? ''} ${
        item.clarity ?? ''
      } ${item.cut ?? ''}  ${item.cert ?? ''}`}
      accessoryRight={() => (
        <MagazaOverflowMenu
          pirlantaId={item.id}
          phoneNumber={phoneNumber}
          status={status}
          search={search}
          token={token}
        />
      )}
      accessoryLeft={() => <Text category="h6">${item.price + '$'}</Text>}
    />
  );
}

export default MagazaListItem;
