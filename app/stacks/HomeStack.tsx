import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import NewScreen from "../screens/NewScreen";

//tipurile stivei asta daca vreau sa folosesc tiparea pusa la dispozitie de typescript
//altfel pot folosi any in navigare, presupunand ca eu stiu mai bine decat typescript
export type HomeStackParamList = {
  HomeSC: undefined;
  NewScreen: undefined;
  GameScreen: undefined;
};

//navigator tipat
const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeSC">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeSC" component={HomeScreen} />
        <Stack.Screen name="NewScreen" component={NewScreen} />
        {/* <Stack.Screen name="GameScreen" component={GameScreen} /> */}
      </Stack.Group>
    </Stack.Navigator>
  );
}
