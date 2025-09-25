import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

/**
 * For better optimization and easier code tracking,
 * consider using state to manage lives.
 */

/**
 * Nested inside a child component to avoid re-rendering
 * the entire main screen every time.
 * This component will only re-render if the game is over,
 * at which point a completely new screen will be shown.
 */
const GameScreen = () => {
  const navigation = useNavigation();
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const [lives, setLives] = useState(3);
  const alive = lives > 0;

  console.log("Nmb of lives" + " " + lives);

  const containerWidth = SCREEN_WIDTH * 0.8;
  const containerHeight = containerWidth * 1.5;

  const pressOnImage = () => {
  console.log("Rendering pressOnImage function");
  setLives((lives) => lives - 1);
  /**
   * The function executes fully, then the state update happens asynchronously.
   * setLives will schedule a re-render after this function completes.
   */
  };

  // Outside the component
  const imgForGame = require("@/assets/images/imgForGame.png");

  if (alive == true) {
    return (
      <View style={styles.screen}>
  <View style={styles.infoBar}>
    <Text style={styles.infoText}>{lives} {'lives'}</Text>
    <Text style={styles.infoText}>{'Time'}</Text>
  </View>

  <Text style={styles.introText}>
    {'Welcome to the game! Next, you need to find the difference between the two images!'}
  </Text>
</View>

        <View
          style={[
            styles.container,
            { width: containerWidth, height: containerHeight },
          ]}
        >
          <Pressable onPress={pressOnImage}>
            <Image
              source={imgForGame}
              style={styles.image}
              resizeMode="contain"
            />
          </Pressable>
          <TouchableOpacity style={styles.buttonNotVissible}></TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>{'GAME OVER!'}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  buttonNotVissible: {
    backgroundColor: "red",
    position: "absolute",
    top: 100,
    left: 120,
    width: 50,
    height: 50,
  },
  screen: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  infoBar: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 10,
    zIndex: 1,
  },
  infoText: {
    color: "white",
    fontWeight: "bold",
  },
  introText: {
    position: "absolute",
    top: 100,
    left: 20,
    right: 20,
    color: "white",
    textAlign: "center",
  },
  container: {
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameScreen;
