// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  StatusBar,
  Alert,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Dimensions,

} from 'react-native';
import { Card } from 'react-native-elements'
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';


import AppText from "./components/AppText/AppText"
import ButtonEtt from "./components/ButtonEtt"
import SaleCard from "./components/SaleCard"
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import MessagesScreen from './screens/MessagesScreen';

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (

    <MessagesScreen />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
});
