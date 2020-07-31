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
import background from "../assets/background.jpg"
import logoRed from "../assets/logoRed.png"
import ButtonEtt from "../components/ButtonEtt"


export default function WelcomeScreen() {

  return (
    <ImageBackground blurRadius={1.4} source={background}
      style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={logoRed}
          style={styles.logo}
        />
        <Text style={styles.tagLine}
        >Sell what you don't need</Text>
      </View>
      <ButtonEtt />
    </ImageBackground>




  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  tagLine: {
    fontWeight: "700",
    marginTop: 5,
  }
})