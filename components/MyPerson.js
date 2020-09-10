
import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native'
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";

export default function MyPerson({ title, subTitle, image, onPress }) {
  return (

    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    marginVertical: 20,
    alignItems: "center"

  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "300",
    color: colors.medium
  }
})
