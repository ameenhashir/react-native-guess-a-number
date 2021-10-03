import React from "react";
import { StyleSheet, TextInput } from "react-native";

export const Input = (props) => {
  return <TextInput {...props} style={{ ...props.style, ...styles.input }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
