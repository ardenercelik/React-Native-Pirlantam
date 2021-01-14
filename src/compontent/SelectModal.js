import React, {useState, useRef, useEffect} from 'react';
import {Modal} from '@ui-kitten/components';
import {SelectComponent} from './SelectComponent';

const SelectModal = (props) => {
  return (
    <Modal
      visible={props.visible}
      style={{
        width: '70%',
      }}
      onBackdropPress={props.toggle}
      backdropStyle={{
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}>
      <SelectComponent toggle={props.toggle} visible={props.visible} />
    </Modal>
  );
};
export default SelectModal;
