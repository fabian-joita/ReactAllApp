import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Tabs from "./Tabs";

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();

const RootNavigator = () => {
  const [routeName, setRouteName] = useState<string>("HomeScreen");
  console.log(routeName + "1");
  const onReady = () => {
    const currentRoute = navigationRef.getCurrentRoute();
    setRouteName(currentRoute?.name ?? "HomeScreen");
  };

  const onStateChange = () => {
    const currentRoute = navigationRef.getCurrentRoute();

    setRouteName(currentRoute?.name ?? "HomeScreen");
    console.log(routeName + "2");
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      onStateChange={onStateChange}
    >
      <Stack.Navigator>
        <Stack.Screen name="Tabs" options={{ headerShown: false }}>
          {() => <Tabs routeName={routeName} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
