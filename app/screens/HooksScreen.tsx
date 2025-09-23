import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
//aici am multe de adaugat
const handleYes = (screenStatus: string) => {
  screenStatus = "playgame";
};

const handleNO = () => {};

const StartGame = (screenStatus: string) => {
  console.log("Randare StartGame");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Are you ready for a new game?</Text>
      <TouchableOpacity
        style={styles.StartButtonYES}
        onPress={() => handleYes(screenStatus)}
      >
        <Text>YES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.StartButtonNO} onPress={() => handleNO}>
        <Text>NO</Text>
      </TouchableOpacity>
    </View>
  );
};

const PlayGame = () => {
  console.log("Randare PlayGame");

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    ></View>
  );
};

const GameOver = () => {
  console.log("Randare GameOver");

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    ></View>
  );
};

const HooksScreen = () => {
  let screenStatus: string = "startgame";

  console.log("Randare HooksScreen");

  if (screenStatus == "startgame") {
    return <StartGame></StartGame>;
  } else if (screenStatus == "playgame") {
    return <PlayGame></PlayGame>;
  } else if (screenStatus == "gameover") {
    return <GameOver></GameOver>;
  }
};

const styles = StyleSheet.create({
  StartButtonYES: {
    backgroundColor: "green",
    padding: 5,
    borderRadius: 60,
  },
  StartButtonNO: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 60,
  },
});

export default HooksScreen;
