import React from "react";
import { View, Text, Image, Switch, StyleSheet } from "react-native";

export default function Header({ isDarkMode, toggleDarkMode, name, subtitle }) {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/MELODY.jpg")}
        style={styles.profileImage}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#F9F9F9",
    elevation: 4,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    color: "gray",
  },
});