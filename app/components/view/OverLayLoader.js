import React from "react";
import { ActivityIndicator, Platform, StyleSheet, View } from "react-native";
import AppColor from "../../config/AppColor";

const OverLayLoader = ({ isLoading }) => {
  const IndicatorSize = Platform.OS === "ios" ? "large" : 56;

  if (!isLoading) return null;

  return (
    <View style={styles.loading}>
      <ActivityIndicator size={IndicatorSize} color={AppColor.secondary} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColor.loaderBackground,
    zIndex: 10,
  },
});

export default OverLayLoader;
