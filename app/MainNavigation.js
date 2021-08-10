import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screen/HomeScreen";
import { View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppColor from "./config/AppColor";
import ProfileScreen from "./screen/ProfileScreen";
import AddScreen from "./screen/AddScreen";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 100,
        },
        tabStyle: {
          backgroundColor: AppColor.white,
          justifyContent: "center",
          paddingTop: 16,
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={"add"}
        component={AddScreen}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                backgroundColor: AppColor.secondary,
                borderRadius: 30,
                width: 80,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="add" color={"#FFF"} size={size} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
