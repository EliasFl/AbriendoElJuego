import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";

function LivePlayer() {
  const [sound, setSound] = useState();

  const playSound = async () => {
    try {
      const { sound, status } = await Audio.Sound.createAsync(
        { uri: "http://72.29.87.97:8015/stream.mp3" }
        //require('./assets/Hello.mp3')
      );

      setSound(sound);
      return await sound.playAsync();
    } catch (error) {
      Alert.alert("Error", "Intenta nuevamente", [{ text: "Ok" }]);
    }
  };

  const pauseSound = async () => {
    try {
      const { sound, status } = await Audio.Sound.createAsync(
        { uri: "http://72.29.87.97:8015/stream.mp3" }
        //require('./assets/Hello.mp3')
      );

      setSound("");
      return await sound.pauseAsync();
    } catch (error) {
      Alert.alert("Error", "Intenta nuevamente", [{ text: "Ok" }]);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Escuchar en vivo</Text>
      <TouchableOpacity
        style={styles.playButton}
        onPress={sound ? pauseSound : playSound}
      >
        {sound ? (
          <MaterialCommunityIcons name="pause" size={60} color="#1B4D90" />
        ) : (
          <MaterialCommunityIcons name="play" size={80} color="#1B4D90" />
        )}
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
