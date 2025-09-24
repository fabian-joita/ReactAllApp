import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GameScreen from "../screens/GameScreen";
import HooksScreen from "../screens/HooksScreen";
import HomeTabs from "./HomeTabs";

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tabs"
      component={HomeTabs}
      options={{ headerShown: false }}
    />
    <Stack.Group>
      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HooksScreen"
        component={HooksScreen}
        options={{ headerShown: false }}
      />
    </Stack.Group>
  </Stack.Navigator>
);

export default RootNavigator;
