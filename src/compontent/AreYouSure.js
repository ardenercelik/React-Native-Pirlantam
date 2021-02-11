import React from 'react';
import {Button, Modal, Layout} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const AreYouSureModal = ({visible, text, onNo, onYes, setVisible}) => {
  return (
    <Modal
      visible={visible}
      style={{
        width: '90%',
      }}
      onBackdropPress={() => setVisible(!visible)}
      backdropStyle={{
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}>
      <Layout
        style={{
          marginHorizontal: 10,
          borderRadius: 5,
        }}>
        <Layout
          style={{marginHorizontal: 10, marginTop: 10, alignItems: 'center'}}>
          {text}
        </Layout>
        <Layout style={styles.buttonLayout}>
          <Button onPress={onNo} status="basic" style={styles.button}>
            Hayır
          </Button>
          <Button onPress={onYes} style={styles.button}>
            Evet
          </Button>
        </Layout>
      </Layout>
    </Modal>
  );
};

export const modalMsg = {
  pirlantaDelete: 'Ürünü silmek istediğinize emin misiniz?',
  logout: 'Çıkış yapmak istediğinize emin misinz?',
};

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    backgroundColor: 'pink',
  },
  buttonLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-between',
  },
  button: {width: '49%'},
  navigation: {backgroundColor: 'rgba(0, 0, 0, 0)'},
});
export default AreYouSureModal;
