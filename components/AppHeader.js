import React from "react";
import { View, StyleSheet, Text } from "react-native";

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
    backgroundColor: "#1B4D90",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
export default AppHeader;
