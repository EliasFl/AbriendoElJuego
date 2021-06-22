import React from "react";
import { View, StyleSheet, FlatList, Linking, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppHeader from "../components/AppHeader";
import HostCard from "../components/HostCard";
import hosts from "../database/HostData";
import { colors } from "../utils/AppColors";

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
      <AppHeader text="Información" />
      <View
        style={{
          backgroundColor: colors.white,
          width: "100%",
          alignSelf: "center",
          paddingTop: 10,
          paddingBottom: 15,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: colors.principalBlue,
            margin: 2,
            alignSelf: "center",
            fontWeight: "bold",
          }}
        >
          Abriendo el Juego
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: colors.principalBlue,
            margin: 2,
            alignSelf: "center",
          }} //
        >
          Programa deportivo líder en las mañanas
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
            paddingTop: 10,
          }}
        >
          <MaterialCommunityIcons
            name="radio"
            size={20}
            color={colors.orange}
          />
          <Text
            style={{
              fontSize: 15,
              color: colors.principalBlue,
              paddingLeft: 10,
            }}
          >
            Kiss 94.9 FM
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
            paddingTop: 10,
          }}
        >
          <MaterialCommunityIcons
            name="calendar-clock"
            size={20}
            color={colors.orange}
          />
          <Text
            style={{
              fontSize: 15,
              color: colors.principalBlue,
              paddingLeft: 10,
            }}
          >
            Lunes a Viernes de 7:00 a 9:00 AM
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
            paddingTop: 10,
          }}
        >
          <MaterialCommunityIcons
            name="phone-classic"
            size={20}
            color={colors.orange}
          />
          <Text
            style={{
              fontSize: 15,
              color: colors.principalBlue,
              paddingLeft: 10,
            }}
          >
            Cabina: 809-221-2116
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 15,
          }}
        >
          <MaterialCommunityIcons
            name="twitter"
            size={30}
            color={colors.principalBlue}
            style={{ paddingRight: 15 }}
          />
          <MaterialCommunityIcons
            name="instagram"
            size={30}
            color={colors.principalBlue}
            style={{ paddingRight: 15 }}
          />
          <MaterialCommunityIcons
            name="youtube"
            size={30}
            color={colors.principalBlue}
            style={{ paddingRight: 15 }}
          />
        </View>
      </View>
      <AppHeader text="Conductores" />
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
    backgroundColor: colors.white,
  },
});
export default Info;
