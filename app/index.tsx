// App.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabs from "./navigation/HomeTabs";
import GameScreen from "./screens/GameScreen";
//import HooksScreen from "./screens/HooksScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={HomeTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="HooksScreen"
        component={HooksScreen}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}
