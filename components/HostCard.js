import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function HostCard({ host, onTwitter, onInstagram, onYouTube }) {
  return (
    <View style={styles.container}>
      <Image source={host.picture} style={styles.hostPicture} />

      <View style={styles.verticalLine} />

      <View style={styles.nameAndSocialContainer}>
        <Text style={styles.hostName}>{host.name}</Text>

        <View style={styles.socialMedia}>
          <TouchableOpacity onPress={onTwitter}>
            <MaterialCommunityIcons
              name="twitter"
              size={30}
              color="#1B4D90"
              style={{ paddingRight: 15 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onInstagram}>
            <MaterialCommunityIcons
              name="instagram"
              size={30}
              color="#1B4D90"
              style={{ paddingRight: 15 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onYouTube}>
            <MaterialCommunityIcons name="youtube" size={30} color="#1B4D90" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    height: 120,
    shadowColor: "#1B4D90",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 10,
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  hostPicture: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginLeft: 10,
    borderColor: "#1B4D90",
    borderWidth: 0.1,
    alignSelf: "center",
  },
  hostName: {
    fontSize: 20,
    color: "#1B4D90",
    fontWeight: "500",
  },
  verticalLine: {
    width: 0.3,
    backgroundColor: "#1B4D90",
    margin: 20,
  },
  nameAndSocialContainer: { justifyContent: "space-evenly" },
  socialMedia: {
    flexDirection: "row",
  },
});
export default HostCard;
