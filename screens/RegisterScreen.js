import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from "../components/forms"
import Screen from '../components/Screen'


const validationSchema = Yup.object().shape({
  name: Yup.string().required().name().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          autoCorrect={false}
          name="name"
          icon="account"
          placeholder="Name" />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="email"
          icon="email"
          placeholder="Email"
          textContentType="emailAddress" />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password" />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
})

export default RegisterScreen;