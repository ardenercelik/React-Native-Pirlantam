import React, {useState} from 'react';
import {View, Button, TextInput, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

function useInput({ type /*...*/ }) {
    const [value, setValue] = useState("");
    const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
    return [value, input];
  }

export default function LoginScreen() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("")
  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <View>
        <TextInput placeholder="Numara" onChangeText={(text) => {setPhoneNumber(text)}} />
        <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber(phoneNumber)}
        />
        <Button title="asd" onPress={() => Alert.alert(phoneNumber)}/>
      </View>
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={(text) => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}
