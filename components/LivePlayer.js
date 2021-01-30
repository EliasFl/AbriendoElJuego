import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import useRadioStation from "../Hooks/useRadioStation";

function LivePlayer() {
  const radioStation = useRadioStation();
  const [sound, setSound] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    audioConfiguration();
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const source = {
    uri: radioStation,
  };

  const playSound = async () => {
    try {
      setLoading(true);
      const { sound } = await Audio.Sound.createAsync(source);
      setLoading(false);
      setSound(sound);
      return sound.playAsync();
    } catch (error) {
      Alert.alert("Error", "Intenta nuevamente", [{ text: "Ok" }]);
      setLoading(false);
    }
  };

  const stopSound = async () => {
    try {
      setSound("");
      return sound.stopAsync();
    } catch (error) {
      Alert.alert("Error", "Intenta nuevamente", [{ text: "Ok" }]);
      setLoading(false);
    }
  };

  const audioConfiguration = async () => {
    return await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      playThroughEarpieceAndroid: false,
    });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Image
          source={require("../assets/loading.gif")}
          style={{ width: 100, height: 100 }}
        />
      ) : (
        <View style={styles.playButton}>
          {sound ? (
            <Image
              source={require("../assets/live.gif")}
              style={{ position: "absolute" }}
            />
          ) : null}
          <TouchableOpacity
            style={styles.playButton}
            onPress={sound ? stopSound : playSound}
          >
            {sound ? (
              <MaterialCommunityIcons name="stop" size={60} color="#1B4D90" />
            ) : (
              <MaterialCommunityIcons name="play" size={80} color="#1B4D90" />
            )}
          </TouchableOpacity>
        </View>
      )}
      <Text style={[styles.text, { color: sound ? "red" : "white" }]}>
        {sound ? "On Air" : "Escuchar en vivo"}
      </Text>
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
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    position: "absolute",
    bottom: 7,
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
