import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.getParent()?.navigate("NewScreen");
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Text>{"Welcome to Home Page"}</Text>

      <TouchableOpacity
        onPress={onPress}
        style={{ marginTop: 200, padding: 10, backgroundColor: "blue" }}
      >
        <Text style={{ color: "white" }}>{"Apasă"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
