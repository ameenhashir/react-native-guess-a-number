import React from "react";
import { View, StyleSheet, Text } from "react-native";
import color from "../constants/color";

export const NumberDisplay = (props) => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    borderColor: color.secondary,
    borderWidth: 2,
    padding: 5,
    marginVertical: 10,
    borderRadius: 5,
  },
  number: {
    fontSize: 25,
    color: color.secondary,
    fontWeight: "bold",
  },
});
