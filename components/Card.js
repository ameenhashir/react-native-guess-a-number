import React from "react";
import { View, StyleSheet } from "react-native";

export const Card = ({ style, children }) => {
  return <View style={{ ...style, ...styles.card }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
    //IOS
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 8,
    //Android
    elevation: 8,
    backgroundColor: "#fff",
    paddingVertical: 20,
    borderRadius: 5,
  },
});
