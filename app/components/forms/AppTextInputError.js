import React from "react";
import { StyleSheet } from "react-native";  
import AppText from "../view/AppText";
import AppColor from "../../config/AppColor";

export default function AppTextInputError({ visible, error, style }) {
  if (!visible || !error) return null;

  return <AppText style={[styles.error, style]}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: AppColor.error,
  },
});
