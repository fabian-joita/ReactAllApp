import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GameScreen from "../screens/GameScreen";
import HomeScreen from "../screens/HomeScreen";
import HooksScreen from "../screens/HooksScreen";
import NewScreen from "../screens/NewScreen";

export type HomeStackParamList = {
  HomeScreen: undefined;
  NewScreen: undefined;
  GameScreen: undefined;
  HooksScreen: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="NewScreen" component={NewScreen} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="HooksScreen" component={HooksScreen} />
        </Stack.Group>
      </Stack.Group>
    </Stack.Navigator>
  );
}
