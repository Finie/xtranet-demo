import React from "react";
import { Platform, SafeAreaView, StatusBar, View } from "react-native";

import LottieView from "lottie-react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AppText from "../components/view/AppText";

export default function AddScreen() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        barStyle="dark-content"
      />

      <View style={{ margin: 16, flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons name={"plus"} size={30} />
        <AppText style={{ marginLeft: 16, fontWeight: "bold", fontSize: 18 }}>
          Add Destinations
        </AppText>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <LottieView
          source={require("../../assets/lottie/illu.json")}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />

        <AppText style={{ margin: 16, fontWeight: "bold" }}>
          Add Holiday destinations
        </AppText>

        <AppText style={{ fontSize: 12 }}>
          This feature is currently unavailable
        </AppText>
      </View>
    </SafeAreaView>
  );
}
