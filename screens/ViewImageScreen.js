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
  ImageBackground,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../config/colors"

export default function ViewImageScreen() {

  return (

    <View style={styles.container}>

      <MaterialCommunityIcons style={styles.closeIcon} name="close" />
      <MaterialCommunityIcons style={styles.deleteIcon} name="trash-can-outline" />

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  closeIcon: {
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    left: 30,
    color: colors.white,
  },
  deleteIcon: {
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    right: 30,
    color: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    height: "100%",
    width: "100%",
  },

})