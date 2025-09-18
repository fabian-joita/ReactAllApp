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

//pentru a optimiza si usura urmarirea codului , ar fi necesara folosirea state ului pentru lives
//intern intr un child pentru a nu reranda de fiecare data componenta princiala a ecranului in intregime
//astfel aceasta componenta o sa se rerandeze doar daca este game over si va aparea total alt screen
const GameScreen = () => {
  const navigation = useNavigation();
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const [lives, setLives] = useState(3);
  let alive = true;

  console.log("se rerandeaza componenta root");
  console.log("Nmb of lives" + " " + lives);

  if (lives <= 0) {
    alive = false;
  }

  const containerWidth = SCREEN_WIDTH * 0.8;
  const containerHeight = containerWidth * 1.5;

  const pressOnImage = () => {
    console.log("randez fct pressOnImage");
    setLives((lives) => lives - 1);
    //aici o sa treaca prin intreaga functie pressonimg, apoi intra in set
  };

  if (alive == true) {
    return (
      <View style={styles.screen}>
        <View style={styles.infoBar}>
          <Text style={styles.infoText}>{lives} vieți</Text>
          <Text style={styles.infoText}>Timp</Text>
        </View>

        <Text style={styles.introText}>
          Bine ai intrat în joc! În continuare trebuie să găsești diferența
          dintre cele 2 imagini!
        </Text>

        <View
          style={[
            styles.container,
            { width: containerWidth, height: containerHeight },
          ]}
        >
          <Pressable onPress={pressOnImage}>
            <Image
              source={require("@/assets/images/imgForGame.png")}
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
        <Text> GAME OVER!</Text>
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
