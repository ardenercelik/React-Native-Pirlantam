import React from 'react';
import {Modal} from '@ui-kitten/components';
import {SelectComponent} from '../SelectComponent/SelectComponent';
import {
  renderBackAction,
  RenderRightActions,
} from '../SelectComponent/TopModalNavActions';

const SelectModal = ({
  visible,
  toggle,
  onButtonPress,
  selectState,
  selectDispatch,
}) => {
  return (
    <Modal
      visible={visible}
      style={{
        width: '70%',
      }}
      onBackdropPress={toggle}
      backdropStyle={{
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}>
      <SelectComponent
        toggle={onButtonPress}
        visible={visible}
        accessoryLeft={renderBackAction}
        accessoryRight={() => <RenderRightActions dispatch={selectDispatch} />}
        title={'Arama yap'}
        state={selectState}
        dispatch={selectDispatch}
      />
    </Modal>
  );
};
export default SelectModal;
