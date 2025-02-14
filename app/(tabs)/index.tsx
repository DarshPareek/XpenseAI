import { AppRegistry } from 'react-native';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { Redirect, useRouter} from 'expo-router'
import { NavigationContainer } from "@react-navigation/native";



const App = () => {



  return (
    <Redirect href="/(tabs)/TabNavigator"/>
  );
};



export default App;
