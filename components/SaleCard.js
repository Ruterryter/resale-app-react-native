import { StyleSheet, Platform, Button, Text, View, TouchableOpacity, } from 'react-native';
import React from 'react';
import Card from '@material-ui/core/Card'

const SaleCard = () => {
  return (

    <View style={styles.cardContainer}>
      <>
        <Card style={styles.card}
          title="Red Jacket for sale"
          subTitle="$100"
          image={require("../assets/jacket.jpg")}
        />
      </>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff"
  },
  cardContainer: {
    backgroundColor: "#f8f4f4"
  }


})

export default SaleCard;