import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../utils/AppColors";

function Program({ date, onPlay, onPause, move, back, programDate }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 120, height: 120 }}
        />
      </View>

      <View style={styles.information}>
        <Text style={styles.text}>Abriendo el Juego</Text>
        <Text style={styles.text}>{programDate}</Text>
        <Text>{date}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={back}>
            <MaterialCommunityIcons
              name="play"
              size={50}
              color={colors.principalBlue}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={move}>
            <MaterialCommunityIcons
              name="pause"
              size={50}
              color={colors.principalBlue}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={onPlay}>
        <MaterialCommunityIcons
          name="play"
          size={50}
          color={colors.principalBlue}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPause}>
        <MaterialCommunityIcons
          name="pause"
          size={50}
          color={colors.principalBlue}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "100%",
    height: "25%",
    borderRadius: 25,
    elevation: 15,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
  },
  podcastContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
    marginTop: 5,
  },
});
export default Program;
