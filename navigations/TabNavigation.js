import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PreviousEpisodes from "../screens/PreviousEpisodes";
import Info from "../screens/Info";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StackNavigator from "./StackNavigator";
import { colors } from "../utils/AppColors";

const Tab = createBottomTabNavigator();
const TabNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.principalBlue,
      labelStyle: { fontWeight: "bold" },
    }}
  >
    <Tab.Screen
      name="Home"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="PreviousEpisodes"
      component={PreviousEpisodes}
      options={{
        title: "Podcast",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="podcast" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Información"
      component={Info}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="information"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
