import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Constants, Audio } from "expo";

function LivePlayer({ onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Escuchar en vivo</Text>
      <TouchableOpacity style={styles.playButton} onPress={onPress}>
        <MaterialCommunityIcons name="play" size={100} color="#1B4D90" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B4D90",
    height: "35%",
    width: "100%",
    borderTopStartRadius: 120,
    borderTopEndRadius: 0,
    borderBottomRightRadius: 120,
    alignItems: "center",
    elevation: 15,
    shadowColor: "grey",
    shadowOffset: { width: 8, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    justifyContent: "space-evenly",
  },
  text: {
    paddingTop: 20,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  playButton: {
    height: 100,
    width: 100,
    borderRadius: 150,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default LivePlayer;
