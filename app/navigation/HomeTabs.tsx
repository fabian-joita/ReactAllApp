import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HistoryStack from "../stacks/HistoryStack";
import HomeStack from "../stacks/HomeStack";
import TodayStack from "../stacks/TodayStack";

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          headerShown: false,
          tabBarStyle: {},
        }}
      />
      <Tab.Screen
        name="TodayStack"
        component={TodayStack}
        options={{
          title: "Today",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="HistoryStack"
        component={HistoryStack}
        options={{
          title: "History",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
