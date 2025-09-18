import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const StartGame = ({
  onYes,
  onNo,
}: {
  onYes: () => void;
  onNo: () => void;
}) => {
  console.log("Randare StartGame");

  return (
    <View style={styles.container}>
      <Text>Are you ready for a new game?</Text>
      <TouchableOpacity style={styles.StartButtonYES} onPress={onYes}>
        <Text>YES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.StartButtonNO} onPress={onNo}>
        <Text>NO</Text>
      </TouchableOpacity>
    </View>
  );
};

const PlayGame = () => {
  console.log("Randare PlayGame");
  return (
    <View style={styles.container}>
      <Text>🎮 Playing...</Text>
    </View>
  );
};

const GameOver = () => {
  console.log("Randare GameOver");
  return (
    <View style={styles.container}>
      <Text>💀 Game Over</Text>
    </View>
  );
};

const HooksScreen = () => {
  const [screenStatus, setScreenStatus] = useState<
    "startgame" | "playgame" | "gameover"
  >("startgame");

  console.log("Randare HooksScreen");

  if (screenStatus === "startgame") {
    return (
      <StartGame
        onYes={() => setScreenStatus("playgame")}
        onNo={() => setScreenStatus("gameover")}
      />
    );
  } else if (screenStatus === "playgame") {
    return <PlayGame />;
  } else {
    return <GameOver />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
