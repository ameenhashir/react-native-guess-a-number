import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Color from "../constants/color";

export const Header = ({ title }) => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndriod,
        }),
      }}
    >
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    color: Color.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  headerIOS: {
    backgroundColor: Color.primary,
    borderBottomColor: "transparent",
    borderWidth: 0,
  },
  headerAndriod: {
    backgroundColor: "transparent",
    borderBottomColor: Color.primary,
    borderWidth: 1,
  },
  headerTitle: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: Color.primary,
  },
});
