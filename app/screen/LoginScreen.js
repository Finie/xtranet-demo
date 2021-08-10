import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";
import authApi from "../api/routes/authApi";
import Ionicons from "react-native-vector-icons/Ionicons";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppText from "../components/view/AppText";
import OverLayLoader from "../components/view/OverLayLoader";
import AppColor from "../config/AppColor";
import AuthStore from "../cache/AuthStore";
import AppContextProvider from "../provider/AppContextProvider";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required().label("Email").trim(),
  password: Yup.string().required().label("Password"),
});
export default function LoginScreen({ navigation }) {
  const [isLoading, setisLoading] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const [isError, setisError] = useState(false);
  const { setuserData } = React.useContext(AppContextProvider);

  const handleSubmit = async (data) => {
    const request = {
      useremail: data.email,
      password: data.password,
    };

    setisLoading(true);
    const response = await authApi.userLogin(request);
    setisLoading(false);

    if (!response.ok) {
      setisError(true);
      seterrorMessage(response.data.error.message);
      return;
    }

    setisError(false);
    seterrorMessage("");
    setuserData(response.data.data);
    AuthStore.saveXtranettUser(response.data.data);
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={"transparent"}
          barStyle="dark-content"
        />
        <OverLayLoader isLoading={isLoading} />
        <View
          style={{
            margin: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <AppText style={{ fontSize: 20, fontWeight: "bold" }}>
              Login
            </AppText>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../../assets/illustration/login.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <View style={{ flex: 1, margin: 16 }}>
          <AppForm
            validationSchema={validationSchema}
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            <AppFormField
              name="email"
              placeholder={"Email address"}
              rightIcon={"email-edit-outline"}
              keyboardType={"email-address"}
            />

            <AppFormField
              name="password"
              placeholder={"Password"}
              passwordVisible={true}
              isPassword
              leftIcon={"eye-off-outline"}
            />
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Registration")}
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 8,
                margin: 8,
                flexDirection: "row",
              }}
            >
              <AppText>I have an account</AppText>
              <AppText style={{ color: AppColor.secondary }}> Login ?</AppText>
            </TouchableOpacity>

            <SubmitButton title={"Login"} />
          </AppForm>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexGrow: 1,
  },
});
