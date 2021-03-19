import * as React from 'react';
import {StyleSheet} from 'react-native';
import SearchStack from '../navigation/SearchStack';

function SearchScreenStack() {
  return (
    <React.Fragment>
      <SearchStack />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
});

export default SearchScreenStack;
//  ios ayarları yok
