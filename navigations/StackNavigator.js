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
  <Stack.Navigator>
    <Stack.Screen name="Podcast" component={PreviousEpisodes} />
    <Stack.Screen name="Information" component={Info} />
  </Stack.Navigator>
);

export default StackNavigator;
