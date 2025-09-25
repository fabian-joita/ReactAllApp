import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HistoryScreen from "../screens/HistoryScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
