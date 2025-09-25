import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { HomeStackParamList } from "../stacks/HomeStack";

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>(); //ori pun any pentru a arata typescriptului ca eu stiu mai bine decat el
  //altfel fac definire a stivei

  const onPress = useCallback(() => {
    navigation.navigate("NewScreen");
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
