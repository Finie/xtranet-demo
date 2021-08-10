import React from "react";
import { ImageBackground, StatusBar, View, SafeAreaView } from "react-native";
import CustomButton from "../components/button/CustomButton";
import OutlineButton from "../components/button/OutlineButton";
import AppText from "../components/view/AppText";
import AppColor from "../config/AppColor";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={require("../../assets/waves/welcome.png")}
    >
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        barStyle="dark-content"
      />

      <SafeAreaView
        style={{ justifyContent: "flex-end", alignItems: "center", flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 16,
          }}
        >
          <View style={{ flex: 1 }}></View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <AppText
              style={{
                textAlign: "center",
                fontSize: 28,
                color: "black",
                fontWeight: "bold",
              }}
            >
              Welcome to Valiu
            </AppText>
            <AppText style={{ textAlign: "center", fontSize: 14 }}>
              Select an action below to proceed using this app and get to
              discover lots of locations for your next holiday
            </AppText>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 32,
            margin: 32,
          }}
        >
          <CustomButton
            title={"Login"}
            onPress={() => navigation.navigate("Login")}
            style={{
              borderRadius: 40,
            }}
          />

          <OutlineButton
            title={"Sign up"}
            onPress={() => navigation.navigate("Registration")}
            style={{
              borderRadius: 40,
            }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
