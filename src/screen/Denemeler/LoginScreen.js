import React from 'react';
import { Text, View, Button} from 'react-native';
import axios from 'axios';
import {useState, useEffect} from 'react/cjs/react.development';
import {FlatList} from 'react-native-gesture-handler';

function LoginScreen() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0)

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      setPosts(json);
    })
    .catch((error) => console.error(error))
  }
    , [])
    

  
  return (
    <View style={{ flex: 1, padding: 24 }} >
      <Text>Hello</Text>
      <Button onPress={() => setCount(count + 1)} title={`${count} text`}><Text></Text></Button>
          <FlatList
            data={posts}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}</Text>
            )}
          />
        

    </View>
  );
}

export default LoginScreen;
