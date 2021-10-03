import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/color";

export const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "8%",
    backgroundColor: Color.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});
