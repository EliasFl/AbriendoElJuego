import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../utils/AppColors";

function AppHeader({ text }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  header: {
    width: "100%",
    height: 50,
    backgroundColor: colors.principalBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "bold",
  },
});
export default AppHeader;
