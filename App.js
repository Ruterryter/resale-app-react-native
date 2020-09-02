// import { StatusBar } from 'expo-status-bar';
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
import ListingsScreen from './screens/ListingsScreen';
import AppTextInput from './components/AppTextInput'
import AppPicker from './components/AppPicker';

const categories = [
  {
    label: "Furniture", value: 1
  },
  {
    label: "Clothing", value: 2
  },
  {
    label: "Cameras", value: 3
  },
]

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (

    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
});
