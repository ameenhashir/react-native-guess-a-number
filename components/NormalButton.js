import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Color from "../constants/color";

export const NormalButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.viewStyle}>
        <Text>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    elevation: 10,
    backgroundColor: Color.primary,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 50,
  },
});
