import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList } from "react-native";
import Program from "../components/Program";

import firebase from "../database/firebase";
import { Audio } from "expo-av";
import AppHeader from "../components/AppHeader";

function PreviousEpisodes() {
  const [sound, setSound] = useState("");
  const [program, setProgram] = useState([]);
  const [shouldPause, setShouldPause] = useState(false);
  const [time, setTime] = useState(15000);
  const source = {
    uri: program,
  };

  useEffect(() => {
    audioConfiguration();
    getProgram();
  }, []);

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

  const getProgram = () => {
    firebase.db.collection("programs").onSnapshot((data) => {
      const previousPrograms = [];
      data.docs.forEach((program, index) => {
        const url = program.data().url;
        const date = program.data().date;
        previousPrograms.push({ id: index + 1, program: url, date });
      });
      setProgram(previousPrograms.reverse());
    });
  };

  const playProgram = async (source) => {
    try {
      if (!shouldPause) {
        const { sound } = await Audio.Sound.createAsync(source);
        setSound(sound);
        setShouldPause(true);
        return sound.playAsync();
      } else {
        return sound.playAsync();
      }
    } catch (error) {
      Alert.alert("Error", "Intenta nuevamente", [{ text: "Ok" }]);
    }
  };

  const pauseProgram = async () => {
    try {
      sound.pauseAsync();
    } catch (error) {
      Alert.alert("Error", "Intenta nuevamente", [{ text: "Ok" }]);
    }
  };

  const forwardProgramTime = () => {
    const myTime = time + 15000;
    setTime(myTime);
    sound.setPositionAsync(myTime);
  };

  const backwardProgramTime = () => {
    if (time != 0) {
      const myTime = time - 15000;
      setTime(myTime);
      sound.setPositionAsync(myTime);
    } else {
      sound.setPositionAsync(time);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <AppHeader text="Podcast" />

      <FlatList
        data={source.uri}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Program
                onPlay={() => playProgram({ uri: item.program })}
                onPause={pauseProgram}
                move={forwardProgramTime}
                back={backwardProgramTime}
                programDate={item.date}
              />
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 12,
  },
});
export default PreviousEpisodes;
