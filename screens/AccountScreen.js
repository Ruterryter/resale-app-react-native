import React from 'react';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon'
import { StyleSheet, View, FlatList } from 'react-native';

import colors from '../config/colors'

const menuItems = [
  {
    title: "My listnings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    }
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    }
  },
]

export default function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Blomman Blomberg"
          subTitle="blomman.blomberg@gmail.com"
          image={require("../assets/profilblomma.jpg")} />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
            />
          }
        />
      </View>

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: colors.light

  }
})

