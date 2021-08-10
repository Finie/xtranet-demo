import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./screen/SplashScreen";
import App from "../App";
import InitializeContextProvider from "./provider/InitializeContextProvider";

const Stack = createStackNavigator();

const SplashNavigator = () => {
  const [userInfo, setuserInfo] = React.useState(null);
  return (
    <InitializeContextProvider.Provider
      value={{
        userInfo,
        setuserInfo,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={"splash"} component={SplashScreen} />
          <Stack.Screen name={"App"} component={App} />
        </Stack.Navigator>
      </NavigationContainer>
    </InitializeContextProvider.Provider>
  );
};

export default SplashNavigator;
