import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import * as React from "react"
import {
    View,
    Text,
    StyleSheet,
    Button,
    Alert
    
} from "react-native"
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen"

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}