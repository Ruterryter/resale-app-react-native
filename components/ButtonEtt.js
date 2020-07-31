import { StyleSheet, Platform, Button, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from "../config/colors"

const ButtonEtt = () => {
  return (
    <>
      <TouchableOpacity style={styles.loginButton} >
        <Text style={styles.appButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} >
        <Text style={styles.appButtonText}>Register</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  loginButton: {
    borderRadius: 50,
    textTransform: "uppercase",
    width: "80%",
    height: 45,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
  },
  registerButton: {
    borderRadius: 50,
    textTransform: "uppercase",
    width: "80%",
    height: 45,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
  },
  appButtonText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "600",

  }
})

export default ButtonEtt