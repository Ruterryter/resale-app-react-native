import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from "../components/AppText/AppText";
import MyPerson from "../components/MyPerson";

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ListItemSeparator from '../components/ListItemSeparator';

export const MyAccountScreen = ({ onPress }) => {
  return (
    <View style={styles.background}>
      <MyPerson image={require("../assets/profilblomma.jpg")}
        title="Blomman Blomberg"
        subTitle="blomman@gmail.com" />

      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPress}>
          <MaterialCommunityIcons name="format-list-bulleted" size={22} color={colors.white} style={{ backgroundColor: colors.primary, borderRadius: 35, padding: 8, }} />
        </TouchableWithoutFeedback>
        <AppText style={styles.title}>My Listings</AppText>
      </View>
      <ListItemSeparator />

      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <MaterialCommunityIcons style={{ backgroundColor: colors.secondary, borderRadius: 35, padding: 8, }} name="email" size={22} color={colors.white} />
          <AppText style={styles.title}>My Messages</AppText>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.logoutContainer}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.container}>
            <MaterialCommunityIcons name="logout" size={22} color={colors.white} style={{ backgroundColor: colors.yellow, borderRadius: 35, padding: 8, }} />
            <AppText style={styles.title}>Log Out</AppText>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    paddingTop: 50,
    backgroundColor: colors.light
  },
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 15,
    alignItems: "center"
  },
  logoutContainer: {
    paddingVertical: 20,
  },
  title: {
    fontWeight: "700",
    marginLeft: 10,
  }
})

