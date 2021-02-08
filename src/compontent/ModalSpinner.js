import React from 'react';
import {Modal, Spinner} from '@ui-kitten/components';
import {View} from 'react-native';

const ModalSpinner = () => (
  <Modal visible={true}>
    <View>
      <Spinner size="large" />
    </View>
  </Modal>
);

export default ModalSpinner;
