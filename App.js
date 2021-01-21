import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { Audio } from "expo-av";
import { NavigationContainer } from "@react-navigation/native";
import LivePlayer from "./components/LivePlayer";
import TabNavigation from "./navigations/TabNavigation";

//const source = "http://72.29.87.97:8015/stream.mp3";

export default function App() {
  const play = () => {
    Audio.setAudioModeAsync({
      staysActiveInBackground: true,
    });
    const sound = new Audio.Sound();
    sound.loadAsync({ uri: "http://72.29.87.97:8015/stream.mp3" });
    sound.playAsync();
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
