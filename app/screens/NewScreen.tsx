import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HomeStackParamList } from "../stacks/HomeStack";

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList>;

const NewScreen = () => {
  const navigation: any = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Welcome to my Game!</Text>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>BACK</Text>
        </TouchableOpacity>

        <View style={styles.startGameContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("GameScreen")}
            style={styles.startGameButton}
          >
            <Text style={styles.startGameText}>Press to start new game!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("HooksScreen")}
            style={styles.startGameButton}
          >
            <Text>Catre pagina de Hooks</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.highScoreText}>HIGH SCORE:</Text>
        <Text style={styles.highScoreValue}>
          // aici o sa apara secundele minime
        </Text>
      </View>
    </View>
  );
};

export default NewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: "white",
  },
  backButton: {
    backgroundColor: "red",
    marginTop: 20,
    padding: 10,
  },
  backButtonText: {
    color: "black",
  },
  startGameContainer: {
    padding: 5,
  },
  startGameButton: {
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
  },
  startGameText: {
    color: "white",
  },
  highScoreText: {
    padding: 5,
    color: "white",
    marginTop: 10,
    fontWeight: "bold",
  },
  highScoreValue: {
    color: "white",
  },
});
