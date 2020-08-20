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

import Screen from "./components/Screen"
import ListItem from "./components/ListItem"
import Icon from "./components/Icon"
import AppText from "./components/AppText/AppText"
import ButtonEtt from "./components/ButtonEtt"
import SaleCard from "./components/SaleCard"
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import MessagesScreen from './screens/MessagesScreen';
import MyAccountScreen from './screens/MyAccountScreen';
import ListItemSeparator from './components/ListItemSeparator';
import AccountScreen from './screens/AccountScreen';

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (

    <AccountScreen />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
});
