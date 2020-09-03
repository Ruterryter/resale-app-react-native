import React from 'react';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon'
import { StyleSheet, View, FlatList } from 'react-native';

import colors from '../config/colors'
import ListItemSeparator from '../components/ListItemSeparator';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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

export const AccountScreen = (props) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Blomman Blomberg"
          subTitle="blomman@gmail.com"
          image={require("../assets/profilblomma.jpg")} />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
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
      <ListItem
        title="Log Out"
        ImageComponent={
          <Icon name="logout" backgroundColor={colors.yellow} />
        } />
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

