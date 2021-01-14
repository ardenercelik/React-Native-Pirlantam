import React from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import axios from 'axios';
import {useState, useEffect} from 'react/cjs/react.development';
import {FlatList} from 'react-native-gesture-handler';
import {onChange} from 'react-native-reanimated';

function FetchScreen() {
  const [posts, setPosts] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [postId, setPostId] = useState('');

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      //.then((response) => response.data)
      .then((json) => {
        setPosts(json.data);
      })
      .catch((error) => console.error(error));
  }, [postId]);

  const onChange = (e) => {
    //alert("post")
    setTextInput(e);
  };

  return (
    <View style={{flex: 1, padding: 24}}>
      <Text>Fetch</Text>
      <TextInput onChangeText={(e) => onChange(e)}></TextInput>
      <Button onPress={() => setPostId(textInput)} title="Fetch Data">
        <Text></Text>
      </Button>
      <FlatList
        data={posts}
        keyExtractor={({id}, index) => id.toString()}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

export default FetchScreen;
