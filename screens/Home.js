import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import LivePlayer from "../components/LivePlayer";

function Home() {
  return (
    <View style={[StyleSheet.absoluteFillObject]}>
      <ImageBackground
        source={require("../assets/logo.png")}
        style={styles.logo}
      ></ImageBackground>
      <LivePlayer />
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    flex: 0.9,
    width: "100%",
  },
});
export default Home;
