// App.tsx
import { registerRootComponent } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./navigation/RootNavigator";
registerRootComponent(App);

export default function App() {
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}
