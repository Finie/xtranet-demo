import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screen/LoginScreen";
import RegistrationScreen from "./screen/RegistrationScreen";
import WelcomeScreen from "./screen/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={"welcome"} component={WelcomeScreen} />
    <Stack.Screen name={"Login"} component={LoginScreen} />
    <Stack.Screen name={"Registration"} component={RegistrationScreen} />
  </Stack.Navigator>
);

export default AuthNavigation;
