import React from 'react';
import ReactNative from 'react-native';
import {View, Text, StyleSheet, Button} from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {
      nu: 1,
      fontWeight: 'bold',
      isLoading: true,

    };
  }

  onPress = () => {
    this.setState({
      nu: this.state.nu + 1,
    });
  };

  changeWeight = () => {
    this.setState({
      fontWeight: this.state.fontWeight == 'bold' ? 'normal' : 'bold',
    });
  };
  render() {
    const styles = StyleSheet.create({
      containerMain: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#f5fcff',
      },

      text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: this.state.fontWeight,
      },
    });
    
    return (
      
        <View style={styles.containerMain}>
          <Text style={styles.text}>{this.state.nu}</Text>
          <Button style={{padding: 5}} title="counter" onPress={this.onPress} />
          <Button title="change weight" onPress={this.changeWeight} />
          <Button title="sign up" onPress={() => this.props.navigation.navigate("Login")} />
          <Button title="axios" onPress={() => this.props.navigation.navigate("Fetch")} />
        </View>
      
    );
  }
}

export default HomeScreen;
