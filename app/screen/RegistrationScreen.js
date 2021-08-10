import React, { useState } from "react";
import {
  StatusBar,
  ImageBackground,
  View,
  StyleSheet,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";
import { ScaleAnimation, Modal, ModalContent } from "react-native-modals";
import LottieView from "lottie-react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import authApi from "../api/routes/authApi";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppText from "../components/view/AppText";
import OverLayLoader from "../components/view/OverLayLoader";
import AppColor from "../config/AppColor";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  useremail: Yup.string()
    .email("Invalid email address")
    .required()
    .label("Email address")
    .trim(),
  password: Yup.string().required().label("Password"),
  confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .label("Confirm Password"),
});

export default function RegistrationScreen({ navigation }) {
  const [isLoading, setisLoading] = useState(false);
  const [isPopUpVisible, setisPopUpVisible] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const [isError, setisError] = useState(false);
  const handleSubmit = async (data) => {
    const request = {
      username: data.username,
      useremail: data.useremail,
      password: data.password,
    };

    setisLoading(true);
    const response = await authApi.userRegistration(request);
    setisLoading(false);

    if (!response.ok) {
      seterrorMessage(response.data.error.message);
      setisError(true);

      return;
    }
    setisError(false);
    seterrorMessage("");
    setisPopUpVisible(true);
  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        barStyle="light-content"
      />
      <OverLayLoader isLoading={isLoading} />
      <ImageBackground
        style={{
          width: "100%",
          height: 200,
          paddingTop: StatusBar.currentHeight,
          overflow: "hidden",
        }}
        source={require("../../assets/waves/wave.png")}
      >
        <AppText
          style={{
            color: AppColor.white,
            fontSize: 28,
            fontWeight: "bold",
            marginTop: 16,
            marginLeft: 16,
          }}
        >
          Register
        </AppText>

        <AppText
          style={{ marginLeft: 16, color: AppColor.white, fontWeight: "200" }}
        >
          Create an account
        </AppText>
      </ImageBackground>
      {isError && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons name={"warning"} size={30} color={AppColor.error} />
          <AppText
            style={{
              marginLeft: 8,
              color: AppColor.error,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {errorMessage}
          </AppText>
        </View>
      )}
      <View showsVerticalScrollIndicator={false} style={styles.container}>
        <AppForm
          validationSchema={validationSchema}
          initialValues={{
            username: "",
            useremail: "",
            password: "",
            confirmpassword: "",
          }}
          onSubmit={handleSubmit}
        >
          <AppFormField
            name={"username"}
            placeholder={"Username"}
            rightIcon={"account"}
          />
          <AppFormField
            name={"useremail"}
            placeholder={"Email address"}
            rightIcon={"email-edit-outline"}
            keyboardType={"email-address"}
          />
          <AppFormField
            name={"password"}
            placeholder={"Password"}
            passwordVisible={true}
            isPassword
            leftIcon={"eye-off-outline"}
          />
          <AppFormField
            passwordVisible={true}
            name={"confirmpassword"}
            placeholder={"Confirm Password"}
            isPassword
            leftIcon={"eye-off-outline"}
          />

          <SubmitButton title={"Submit"} />
        </AppForm>
      </View>

      {/* is popup visible  */}

      <Modal
        visible={isPopUpVisible}
        width={0.8}
        modalStyle={{ borderRadius: 5 }}
        modalAnimation={
          new ScaleAnimation({
            initialValue: 0, // optional
            useNativeDriver: true, // optional
          })
        }
        onTouchOutside={() => {
          setisPopUpVisible(false);
        }}
      >
        <ModalContent>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <LottieView
              autoPlay={true}
              loop={false}
              source={require("../../assets/lottie/successful.json")}
              style={{
                zIndex: 1,
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                width: 100,
                height: 100,
              }}
            />

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <AppText>Acount Created Successfully</AppText>
            </View>

            <TouchableOpacity
              style={{
                padding: 8,
                margin: 16,
                width: "100%",
                borderColor: AppColor.secondary,
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 6,
              }}
              onPress={() => {
                setisPopUpVisible(false);
                navigation.navigate("Login");
              }}
            >
              <AppText style={{ color: AppColor.secondary }}>Login</AppText>
            </TouchableOpacity>
          </View>
        </ModalContent>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: 16,
  },
});
