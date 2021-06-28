import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';

// Creating stack so that all the screens are managed
const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#007FFF" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white"
}

export default function App() {
  return (
    <NavigationContainer>
      {/* screenOptions inside Stack.Navigator allows us to particular css for all the screens in the stack  */}
      <Stack.Navigator initialRouteName='Home' screenOptions={globalScreenOptions}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
