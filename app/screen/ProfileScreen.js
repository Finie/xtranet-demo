import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import AppText from "../components/view/AppText";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppColor from "../config/AppColor";
import AppContextProvider from "../provider/AppContextProvider";
import AuthStore from "../cache/AuthStore";

export default function ProfileScreen() {
  const { userData, setuserData } = React.useContext(AppContextProvider);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        barStyle="dark-content"
      />
      <ImageBackground
        style={{ flexGrow: 1, width: "100%" }}
        source={require("../../assets/waves/profilebg.png")}
      >
        <SafeAreaView
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginTop: 64,
                marginLeft: 16,
                borderRadius: 100,
                width: 100,
                height: 100,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                elevation: 6,
                backgroundColor: AppColor.white,
              }}
            >
              <Image
                style={{ width: 90, height: 90, marginBottom: -32 }}
                source={require("../../assets/profile.png")}
              />
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <View style={{ flex: 1 }}></View>
              <View style={{ flex: 1, marginRight: 16 }}>
                <AppText style={{ fontSize: 20, fontWeight: "bold" }}>
                  {userData?.username}
                </AppText>
                <AppText style={{}}>{userData?.email}</AppText>
              </View>
            </View>
          </View>

          <View style={{ height: 150 }} />

          <View style={{ marginTop: 16 }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 16,
                marginTop: 8,
                marginBottom: 8,
              }}
            >
              <MaterialCommunityIcons
                name={"account-edit-outline"}
                size={40}
                color={"#FF007F"}
              />
              <AppText style={{ marginLeft: 16, fontWeight: "bold" }}>
                Profile
              </AppText>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 16,
                marginTop: 8,
                marginBottom: 8,
              }}
            >
              <Ionicons
                name={"notifications-circle-outline"}
                size={40}
                color={AppColor.primary}
              />
              <AppText style={{ marginLeft: 16, fontWeight: "bold" }}>
                Notification
              </AppText>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 16,
                marginTop: 8,
                marginBottom: 8,
              }}
            >
              <MaterialCommunityIcons
                name={"account-edit-outline"}
                size={40}
                color={AppColor.accent}
              />
              <AppText style={{ marginLeft: 16, fontWeight: "bold" }}>
                Settings
              </AppText>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 16,
                marginTop: 8,
                marginBottom: 8,
              }}
              onPress={() => {
                AuthStore.saveXtranettUser(null);
                setuserData(null);
              }}
            >
              <MaterialCommunityIcons
                name={"logout"}
                size={35}
                color={AppColor.secondary}
              />
              <AppText style={{ marginLeft: 16, fontWeight: "bold" }}>
                Logout
              </AppText>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
