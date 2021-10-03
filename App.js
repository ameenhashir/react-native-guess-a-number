import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "./components";
import { GameStartScreen, GameScreen, GameOverScreen } from "./screens";
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";

//funtion not to be rendered again
const fetchFonts = () => {
  return Fonts.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [chosenNumber, setChosenNumber] = useState();
  const [rounds, setRounds] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsLoading(false)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const restartGame = () => {
    setRounds(0);
    setChosenNumber(null);
  };

  let content = (
    <GameStartScreen
      getChosenNumber={(selectedNumber) => {
        setChosenNumber(selectedNumber);
      }}
    />
  );

  if (chosenNumber && rounds <= 0)
    content = (
      <GameScreen
        selectedNumber={chosenNumber}
        setTrials={(rounds) => setRounds(rounds)}
      />
    );
  else if (chosenNumber && rounds > 0)
    content = (
      <GameOverScreen
        gussedNumber={chosenNumber}
        trials={rounds}
        restartGame={restartGame}
      />
    );

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
