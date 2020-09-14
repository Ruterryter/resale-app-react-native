import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Switch,
  Image,
  StatusBar,
  Alert,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Dimensions,
  TextInput
} from 'react-native';

import LoginScreen from './screens/LoginScreen'
import ListingsScreen from './screens/ListingsScreen'
import SaleCard from './components/SaleCard';


export default function App() {
  return (
    <>
      <ListingsScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
});
