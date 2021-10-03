import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Color from "../constants/color";

export const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primary,
    width: 100,
    height: 100,
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    elevation: 10,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans-bold",
  },
});
