import { StyleSheet, Platform, Button, Text, View, TouchableOpacity, } from 'react-native';
import { Card } from 'react-native-elements'
import React from 'react';

const SaleCard = () => {
  return (

    <View style={styles.cardContainer}>
      <>
        <Card style={styles.card}
          image={require("../assets/jacket.jpg")}
          borderRadius={25}
        >
          <Text style={styles.cardTitle}>Red Jacket for Sale</Text>
          <Text style={styles.subTitle}>$100</Text>
        </Card>
      </>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: "80%",
    height: "40%",
  },
  cardTitle: {
    fontSize: 15,
    fontFamily: "Avenir",
  },
  subTitle: {
    color: "#4ecdc4",
    paddingBottom: 20,
    paddingTop: 10,
  },
  cardContainer: {
    backgroundColor: "#f8f4f4",
    width: "100%",
    height: "100%"
  }


})

export default SaleCard;