import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "../screens/GameScreen";
import HooksScreen from "../screens/HooksScreen";
import NewScreen from "../screens/NewScreen";
import Tabs from "./Tabs";

export type RootStackParamList = {
  Tabs: undefined;
  NewScreen: undefined;
  GameScreen: undefined;
  HooksScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          options={{ headerShown: false }}
          component={Tabs}
        ></Stack.Screen>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="NewScreen" component={NewScreen} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="HooksScreen" component={HooksScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
