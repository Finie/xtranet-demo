import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AppColor from "../config/AppColor";
import AppText from "./view/AppText";

export default function AppTextInput({
  rightIcon,
  rightText,
  leftIcon,
  placeholder,
  isPassword,
  onChangeText,
  onBlur,
  style,
  underlineColor,
  passwordVisible,
  rightTextStyle,
  ...otherProps
}) {
  const [togglingPassword, settogglingPassword] =
    React.useState(passwordVisible);
  return (
    <View style={[styles.container, style]}>
      {rightIcon && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <MaterialCommunityIcons
            name={rightIcon}
            size={24}
            color={AppColor.darkGray}
          />
        </View>
      )}

      <TextInput
        style={{
          height: 45,
          borderColor: "gray",
          fontSize: 14,
          marginLeft: 16,
          flex: 1,
        }}
        {...otherProps}
        secureTextEntry={togglingPassword}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholderTextColor={AppColor.darkGray}
        autoCompleteType={"off"}
        autoCorrect={false}
      />

      {leftIcon && (
        <TouchableOpacity
          onPress={() => settogglingPassword(!togglingPassword)}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {togglingPassword ? (
            <MaterialCommunityIcons
              name={leftIcon}
              size={24}
              color={AppColor.darkGray}
            />
          ) : (
            <MaterialCommunityIcons
              name={"eye-outline"}
              size={24}
              color={AppColor.darkGray}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: 6,
    backgroundColor: AppColor.primaryGray,
    borderRadius: 5,
    height: 56,
    width: "100%",
  },
});
