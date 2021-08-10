import React from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import HomeItem from "../components/view/HomeItem";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AppText from "../components/view/AppText";
import DianiImage from "../../assets/vacation.jpg";
import DubaiImage from "../../assets/dubs.jpg";
import Summer from "../../assets/summer.jpg";
import beachVac from "../../assets/beachVac.jpg";
import dance from "../../assets/dance.jpg";
import couple from "../../assets/couple.png";

export default function HomeScreen() {
  const data = [
    {
      id: 0,
      location: "Mombasa",
      description:
        "Diani Beach, come spend time on a private beach and get enjoy some of our  exortic foods on your stay here",
      image: DianiImage,
    },
    {
      id: 1,
      location: "Dubai",
      description: "Lorem ipsum, or lipsum as it is sometimes ",
      image: DubaiImage,
    },
    {
      id: 2,
      location: "Kisumu",
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print  ",
      image: Summer,
    },
    {
      id: 3,
      location: "Miami",
      description: "Diani Beach",
      image: beachVac,
    },
    {
      id: 4,
      location: "Mombasa",
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...",
      image: dance,
    },
    {
      id: 5,
      location: "Mombasa",
      description: "Diani Beach",
      image: DubaiImage,
    },
    {
      id: 6,
      location: "Nyeri",
      description: "Lorem ipsum, or lipsum as it is sometimes",
      image: DianiImage,
    },
    {
      id: 7,
      location: "Atlanta",
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying ",
      image: couple,
    },
  ];
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
        <MaterialCommunityIcons name={"sort-reverse-variant"} size={30} />
        <AppText style={{ marginLeft: 16, fontWeight: "bold", fontSize: 18 }}>
          Holiday Destinations
        </AppText>
      </View>

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <HomeItem data={item} />}
        ListFooterComponent={<View style={{ marginBottom: 100 }}></View>}
      />
    </SafeAreaView>
  );
}
