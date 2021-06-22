import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../utils/AppColors";

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
              color={colors.principalBlue}
              style={{ paddingRight: 15 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onInstagram}>
            <MaterialCommunityIcons
              name="instagram"
              size={30}
              color={colors.principalBlue}
              style={{ paddingRight: 15 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onYouTube}>
            <MaterialCommunityIcons
              name="youtube"
              size={30}
              color={colors.principalBlue}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
    flexDirection: "row",
    height: 120,
    shadowColor: colors.principalBlue,
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
    borderColor: colors.principalBlue,
    borderWidth: 0.1,
    alignSelf: "center",
  },
  hostName: {
    fontSize: 20,
    color: colors.principalBlue,
    fontWeight: "500",
  },
  verticalLine: {
    width: 0.3,
    backgroundColor: colors.principalBlue,
    margin: 20,
  },
  nameAndSocialContainer: { justifyContent: "space-evenly" },
  socialMedia: {
    flexDirection: "row",
  },
});
export default HostCard;
