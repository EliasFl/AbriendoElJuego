import React from "react";
import { View, StyleSheet, FlatList, Linking } from "react-native";

import AppHeader from "../components/AppHeader";
import HostCard from "../components/HostCard";
import hosts from "../database/HostData";

function Info() {
  const openSocialMedia = (social, user) => {
    if (social == "Twitter") {
      Linking.openURL(user);
    } else if (social == "Instagram") {
      Linking.openURL(user);
    } else {
      Linking.openURL(user);
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader text="Integrantes" />

      <FlatList
        data={hosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HostCard
            host={item}
            onTwitter={() => openSocialMedia("Twitter", item.twitter)}
            onYouTube={() => openSocialMedia("Youtube", item.youtube)}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf1fb",
  },
});
export default Info;
