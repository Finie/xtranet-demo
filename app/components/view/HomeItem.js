import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import AppColor from "../../config/AppColor";

import AppText from "./AppText";

export default function HomeItem({ data }) {
  return (
    <TouchableOpacity
      style={{
        height: 210,
        margin: 16,
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: AppColor.white,
        elevation: 6,
      }}
    >
      <Image style={{ height: 130, width: "100%" }} source={data.image} />
      <View style={{ margin: 8 }}>
        <AppText numberOfLines={1} style={{ fontWeight: "bold" }}>
          {data.location}
        </AppText>
        <AppText numberOfLines={2}>{data.description}</AppText>
      </View>
    </TouchableOpacity>
  );
}
