import React from "react";
import { useFormikContext } from "formik";
import CustomButton from "../button/CustomButton";

export default function SubmitButton({
  icon,
  title,
  titleStyle,
  style,
  ...otherProps
}) {
  const { handleSubmit } = useFormikContext();

  return (
    <CustomButton
      onPress={handleSubmit}
      icon={icon}
      title={title}
      titleStyle={titleStyle}
      height={50}
      style={style}
      {...otherProps}
    />
  );
}
