import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';

export default class StarWars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.movies });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;
    const styles = StyleSheet.create({
        
        container: {
            flex: 1,
            alignItems: "center"
        }
    }
    )
    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (
              <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <Text>{item.title}, {item.releaseYear}</Text>
                )}
              />
            )}
        </View>
      
    );
  }
}