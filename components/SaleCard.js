import { StyleSheet, Platform, Button, Text, View, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-elements'
import React from 'react';
import colors from "../config/colors"
import AppText from "./AppText/AppText"

const SaleCard = ({ title, subTitle, image }) => {
  return (

    <View style={styles.cardContainer}>

      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText styles={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden"
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  cardContainer: {
    backgroundColor: "#f8f4f4",
    width: "100%",
    height: "100%",
    padding: 20,
    paddingTop: 100,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold"

  }
})

export default SaleCard;