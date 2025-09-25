import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type StartGameProps = {
  onYes: () => void;
  onNo: () => void;
};

type PlayGameProps = {
  onGameOver: () => void;
};

type GameOverProps = {
  onRestart: () => void;
};

const StartGame = ({ onYes, onNo }: StartGameProps) => (
  <View style={styles.center}>
    <Text>{'Are you ready for a new game?'}</Text>
    <TouchableOpacity style={styles.StartButtonYES} onPress={onYes}>
      <Text>{'YES'}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.StartButtonNO} onPress={onNo}>
      <Text>{'NO'}</Text>
    </TouchableOpacity>
  </View>
);

const PlayGame = ({ onGameOver }: PlayGameProps) => (
  <View style={styles.center}>
    <Text>{'Playing game...'}</Text>
    <TouchableOpacity onPress={onGameOver}>
      <Text>{'Finish Game'}</Text>
    </TouchableOpacity>
  </View>
);

const GameOver = ({ onRestart }: GameOverProps) => (
  <View style={styles.center}>
    <Text>{'Game Over!'}</Text>
    <TouchableOpacity onPress={onRestart}>
      <Text>{'Restart'}</Text>
    </TouchableOpacity>
  </View>
);

const HooksScreen = () => {
  const [screenStatus, setScreenStatus] = useState<"start" | "play" | "over">(
    "start"
  );

  if (screenStatus === "start") {
    const handleYes = () => setScreenStatus("play");
    const handleNo = () => setScreenStatus("over");

    return (
      <StartGame
        onYes={handleYes}
        onNo={handleNo}
      />
    );
  } else if (screenStatus === "play") {
    return <PlayGame onGameOver={() => setScreenStatus("over")} />;
  } else {
    return <GameOver onRestart={() => setScreenStatus("start")} />;
  }
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  StartButtonYES: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 60,
    margin: 5,
  },
  StartButtonNO: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 60,
    margin: 5,
  },
});

export default HooksScreen;
