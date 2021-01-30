import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, LogBox } from "react-native";
import { WebView } from "react-native-webview";
import firebase from "../database/firebase";
import AppHeader from "../components/AppHeader";

LogBox.ignoreLogs(["Setting a timer"]);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    console.warn(message);
  }
};

function PreviousEpisodes() {
  const [program, setProgram] = useState([]);
  const [programDate, setProgramDate] = useState("");

  useEffect(() => {
    getProgram();
  }, [program]);

  const getProgram = () => {
    firebase.db.collection("programs").onSnapshot((data) => {
      const previousPrograms = [];
      data.docs.forEach((program, index) => {
        const url = program.data().url;
        const date = program.data().date;
        previousPrograms.push({ id: index + 1, url, date });
      });
      setProgram(previousPrograms[0].url);
      setProgramDate(previousPrograms[0].date);
    });
  };

  return (
    <View style={styles.container}>
      <AppHeader text="Podcast" />
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <WebView
        source={{
          html: `
          <h1 style="text-align:center;font-size: 50;color: #1B4D90;">${programDate}</h1>
          <p align="center">
          <iframe id="audioplayer" 
          style="
          height:300px;
          width:99%;
          border:5px solid #1B4D90;
          frameborder="1";
          src=${program}></iframe>
          </p>`,
        }}
      />
      <View style={styles.textProvider}>
        <Text style={{ color: "#0DBAD2" }}>Podcast provided by</Text>
      </View>

      <View style={styles.imageProviderContainer}>
        <Image
          source={require("../assets/domiplayIsotipo.png")}
          style={{ width: 30, height: 30 }}
        />
        <Image
          source={require("../assets/domiplayLogo.png")}
          style={{ width: 130, height: 30 }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    zIndex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageProviderContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    bottom: 10,
  },
  textProvider: {
    alignItems: "center",
    bottom: 20,
  },
});
export default PreviousEpisodes;
