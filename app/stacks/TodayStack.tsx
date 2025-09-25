import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TodayScreen from "../screens/TodayScreen";

const Stack = createNativeStackNavigator();

export default function TodayStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Today" component={TodayScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
