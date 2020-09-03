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


export const WelcomeScreen = () => {

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
      <View style={styles.buttonsContainer}>
        <ButtonEtt title="Login" />
        <ButtonEtt title="register" color="secondary" />
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
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
    fontSize: 20,
    marginTop: 5,
    paddingVertical: 20,
  }
})