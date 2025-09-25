import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { ComponentType } from "react";
import React from "react";
import HistoryStack from "../stacks/HistoryStack";
import HomeStack from "../stacks/HomeStack";
import TodayStack from "../stacks/TodayStack";

const Tab = createBottomTabNavigator();

// TODO: Figure out how to hide the tab bar without causing lag and without affecting the components on that screen

type TabType = {
  name: string;
  component: ComponentType<any>;
  label: string;
};

const tabs: TabType[] = [
  {
    name: "HomeStack",
    component: HomeStack,
    label: "Home",
  },
  {
    name: "HistoryStack",
    component: HistoryStack,
    label: "History",
  },
  {
    name: "TodayStack",
    component: TodayStack,
    label: "Today",
  },
];

const listOfTabs = tabs;

export default function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Group>
        {tabs.map(({ name, component, label }) => {
          const tabPress = () => {
            console.log("Schimba la tabul" + " " + name);
          };

          return (
            <Tab.Screen
              listeners={{ tabPress }}
              key={name}
              name={name}
              component={component}
              options={{ title: label }}
            />
          );
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
}
