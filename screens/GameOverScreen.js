import React from "react";
import { View, StyleSheet, Button, Text, Image } from "react-native";
import FontStyle from "../constants/default-styles";
import { CustomButton } from "../components";

export const GameOverScreen = ({ gussedNumber, trials, restartGame }) => {
  return (
    <View style={styles.screen}>
      <Text style={FontStyle.title}>Game is Over!!!</Text>
      {trials <= 5 ? (
        <View style={styles.content}>
          <Text style={FontStyle.title}>You Won!!!</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/success.jpg")}
              // source={{
              //   uri: "https://upload.wikimedia.org/wikipedia/commons/8/88/Summit_of_the_Matterhorn.jpg",
              // }}
              style={styles.image}
              resizeMode="cover"
              fadeDuration={1000}
            />
          </View>
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={FontStyle.title}>You Loss!!!</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/fail.jpg")}
              // source={{
              //   uri: "https://upload.wikimedia.org/wikipedia/commons/8/88/Summit_of_the_Matterhorn.jpg",
              // }}
              style={styles.image}
              resizeMode="cover"
              fadeDuration={1000}
            />
          </View>
        </View>
      )}

      <Text style={FontStyle.body}>Number Guessed Was {gussedNumber}</Text>
      <Text style={FontStyle.body}>You have tried {trials} rounds</Text>
      <View style={FontStyle.button}>
        <CustomButton onPress={restartGame}>New Game</CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    margin: 20,
  },
});
