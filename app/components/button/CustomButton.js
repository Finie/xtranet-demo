import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "../view/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppColor from "../../config/AppColor";

export default function CustomButton({
  onPress,
  isDisabled,
  title,
  titleStyle,
  icon,
  height = 50,
  style,
}) {
  return (
    <TouchableOpacity
      style={
        isDisabled
          ? [styles.disabledButtom, style, { height: height }]
          : [styles.enabledutton, style, { height: height }]
      }
      disabled={isDisabled}
      onPressOut={onPress}
    >
      <AppText style={[{ color: "#FFFFFF" }, titleStyle]}>{title}</AppText>

      {icon && <MaterialCommunityIcons name={icon} size={24} color="white" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  enabledutton: {
    backgroundColor: AppColor.secondary,
    borderRadius: 3,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 16,
    width: "100%", 
  },
  disabledButtom: {
    backgroundColor: AppColor.accent,
    borderRadius: 15,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 16,
  },
});
