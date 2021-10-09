import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Card, CustomButton } from "../components";
import Color from "../constants/color";
import { Input } from "../components";
import { NumberDisplay } from "../components";

export const GameStartScreen = ({ getChosenNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width / 4
  );

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(Dimensions.get("window").width / 4);
    };
    Dimensions.addEventListener("change", updateWidth);
    return () => {
      Dimensions.removeEventListener("change", updateWidth);
    };
  });

  const onChangeText = (inputText) => {
    setEnteredNumber(inputText.replace(/[^0-9]/g, ""));
  };

  const resetButtonHandler = () => {
    setEnteredNumber("");
    setConfirmed(false);
  };

  const confirmButtonHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 100) {
      Alert.alert("Number Required!!!", "Number Should be Between 1 and 99", [
        { text: "Okay", style: "cancel", onPress: resetButtonHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredNumber("");
    Keyboard.dismiss();
  };

  var ChosenNumberText;
  if (confirmed)
    ChosenNumberText = (
      <Card style={styles.chosenValue}>
        <Text>You have Selected</Text>
        <NumberDisplay>{selectedNumber}</NumberDisplay>
        <CustomButton onPress={() => getChosenNumber(selectedNumber)}>
          Start Game
        </CustomButton>
      </Card>
    );

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <Text style={styles.title}>The Game Screen</Text>
            <Card style={styles.inputContainer}>
              <Text>Enter a Number</Text>
              <Input
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                blurOnSumit
                maxLength={2}
                keyboardType="number-pad"
                value={enteredNumber}
                onChangeText={onChangeText}
              />
              <View style={styles.buttoncontainer}>
                <View style={{ width: screenWidth }}>
                  <Button
                    title="Reset"
                    onPress={resetButtonHandler}
                    color={Color.secondary}
                  />
                </View>
                <View style={{ width: screenWidth }}>
                  <Button
                    title="Confirm"
                    onPress={confirmButtonHandler}
                    color={Color.primary}
                  />
                </View>
              </View>
            </Card>
            {ChosenNumberText}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: "90%",
    alignItems: "center",
  },
  buttoncontainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "40%",
  },
  input: {
    width: 20,
    textAlign: "center",
  },
  chosenValue: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
