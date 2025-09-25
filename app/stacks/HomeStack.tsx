import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import NewScreen from "../screens/NewScreen";

export type HomeStackParamList = {
  HomeScreen: undefined;
  NewScreen: undefined;
  GameScreen: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewScreen" component={NewScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
