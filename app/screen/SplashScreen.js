import React, { useContext, useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import { View, StatusBar } from "react-native";
import AuthStore from "../cache/AuthStore";
import InitializeContextProvider from "../provider/InitializeContextProvider";

export default function SplashScreen({ navigation }) {
  const [initializing, setinitializing] = useState(false);
  const [animationFinished, setanimationFinished] = useState(false);

  const { setuserInfo } = useContext(InitializeContextProvider);
  const restoreUser = async () => {
    const response = await AuthStore.getUserXtranetUser();
    setuserInfo(response);
    setinitializing(true);
  };
  useEffect(() => {
    if (animationFinished) {
      navigation.replace("App");
      return;
    }
  }, [initializing]);

  useEffect(() => {
    if (initializing) {
      navigation.replace("App");
      return;
    }
  }, [animationFinished]);

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <LottieView
        source={require("../../assets/lottie/splash.json")}
        autoPlay
        loop={false}
        onAnimationFinish={() => setanimationFinished(true)}
      />
      <StatusBar style="auto" />
    </View>
  );
}
