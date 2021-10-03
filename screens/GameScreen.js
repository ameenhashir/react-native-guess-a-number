import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Button, Text, Alert } from "react-native";
import { Card, NumberDisplay } from "../components";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.floor(min);
  max = Math.ceil(max);
  let randNum = Math.floor(min + Math.random() * (max - min));
  if (randNum == exclude) return generateRandomNumber(min, max, exclude);
  else return randNum;
};

export const GameScreen = ({ selectedNumber, setTrials }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, selectedNumber)
  );
  const [rounds, setRounds] = useState(0);

  const currentMin = useRef(1);
  const currentMax = useRef(100);

  useEffect(() => {
    if (selectedNumber == currentGuess) setTrials(rounds);
  }, [currentGuess]);

  const preditNumber = (direction) => {
    setRounds(() => rounds + 1);
    if (
      (direction === "lower" && currentGuess <= selectedNumber) ||
      (direction === "upper" && currentGuess >= selectedNumber)
    ) {
      Alert.alert("Are you Sure?", "You have made a wrong prediction...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") currentMax.current = currentGuess;
    else currentMin.current = currentGuess;

    const nextGuess = generateRandomNumber(
      currentMin.current,
      currentMax.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
  };

  return (
    <View style={styles.mainView}>
      <Text>Oponents Guess</Text>
      <NumberDisplay style={styles.number}>{currentGuess}</NumberDisplay>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Lower" onPress={preditNumber.bind(this, "lower")} />
        </View>
        <View style={styles.button}>
          <Button title="Higher" onPress={preditNumber.bind(this, "upper")} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
  },
  buttonContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "95%",
  },
  button: {
    width: "40%",
    padding: 10,
  },
  number: {},
});
