import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  ScrollView,
  Keyboard,
} from "react-native";
import { Card, NumberDisplay } from "../components";
import { NormalButton } from "../components/NormalButton";
import { AntDesign } from "@expo/vector-icons";
import Color from "../constants/color";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.floor(min);
  max = Math.ceil(max);
  let randNum = Math.floor(min + Math.random() * (max - min));
  if (randNum == exclude) return generateRandomNumber(min, max, exclude);
  else return randNum;
};

export const GameScreen = ({ selectedNumber, setTrials }) => {
  const intialGuess = generateRandomNumber(1, 100, selectedNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);
  const [rounds, setRounds] = useState([intialGuess]);

  const currentMin = useRef(1);
  const currentMax = useRef(100);

  useEffect(() => {
    if (selectedNumber == currentGuess) setTrials(rounds.length);
  }, [currentGuess]);

  const preditNumber = (direction) => {
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
    else currentMin.current = currentGuess + 1;

    const nextGuess = generateRandomNumber(
      currentMin.current,
      currentMax.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setRounds((rounds) => [nextGuess, ...rounds]);
    // console.log(rounds);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.mainView}>
      <Text>Oponents Guess</Text>
      <NumberDisplay style={styles.number}>{currentGuess}</NumberDisplay>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <NormalButton onPress={preditNumber.bind(this, "lower")}>
            <AntDesign name="downcircle" size={48} color="white" />
          </NormalButton>
        </View>
        <View style={styles.button}>
          <NormalButton onPress={preditNumber.bind(this, "upper")}>
            <AntDesign name="upcircle" size={48} color="white" />
          </NormalButton>
        </View>
      </Card>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {rounds.map((round, i) => (
          <View key={i} style={styles.content}>
            <Text style={styles.text}>#{rounds.length - i}</Text>
            <Text style={styles.text}>{round}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "95%",
  },
  button: {
    width: "40%",
    padding: 10,
  },
  listCointainer: {
    //flex: 1,
    width: "80%",
  },
  content: {
    paddingVertical: 20,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 3,
    backgroundColor: "#ccc",
    borderRadius: 10,
    width: "60%",
  },
  text: { fontSize: 20, color: "white", fontWeight: "bold" },
  textMain: {
    backgroundColor: Color.secondary,
    padding: 10,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
