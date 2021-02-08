import * as React from 'react';
import {StyleSheet} from 'react-native';
import MagazaStack from '../navigation/MagazaStack';

function MagazaScreenStack() {
  return (
    <React.Fragment>
      <MagazaStack />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});

export default MagazaScreenStack;
//  ios ayarları yok
