import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodayScreen from "../screens/TodayScreen";

const Stack = createNativeStackNavigator();

export default function TodayStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="TodayScreen" component={TodayScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
