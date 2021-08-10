import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet, View } from "react-native";

import AppTextInput from "../AppTextInput";
import AppText from "../view/AppText";
import AppTextInputError from "./AppTextInputError";

export default function AppFormField({ name, label, style, ...otherProps }) {
  const { setFieldTouched, touched, handleChange, errors } = useFormikContext();

  return (
    <>
      <View style={styles.container}>
        {label && (
          <AppText
            style={{
              fontSize: 13,
              fontWeight: "400",
              marginVertical: 5,
              color: "#787878",
            }}
          >
            {label}
          </AppText>
        )}
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
          {...otherProps}
        />

        <AppTextInputError
          style={styles.error}
          error={errors[name]}
          visible={touched[name]}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 16,
  },
  error: {
    marginLeft: 16,
  },
});
