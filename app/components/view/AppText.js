import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import AppColor from "../../config/AppColor";

export default function AppText({ children, style, ...otherProps }) {
  return (
    <Text {...otherProps} style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: AppColor.darkGray,
  },
});
