import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from "../config/colors"

export default function ButtonEtt({ title, onPress, color = "primary" }) {
  return (

    <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    padding: 15,
    borderRadius: 25,
  },
  appButtonText: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 12,
  }
})

