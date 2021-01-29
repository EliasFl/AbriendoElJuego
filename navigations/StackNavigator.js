import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Info from "../screens/Info";
import PreviousEpisodes from "../screens/PreviousEpisodes";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  Button,
} from "react-native";

const Stack = createStackNavigator();

const StackNavigator = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: "#1B4D90",
      headerLeft: ({ onPress }) => (
        <Button title="Regresar" onPress={() => navigation.navigate("Home")} />
      ),
    }}
  >
    <Stack.Screen
      name="Podcast"
      component={PreviousEpisodes}
      options={{
        title: "ajis",
        headerStyle: { backgroundColor: "white" },
        headerTitleAlign: "center",
      }}
    />
  </Stack.Navigator>
);

export default StackNavigator;
