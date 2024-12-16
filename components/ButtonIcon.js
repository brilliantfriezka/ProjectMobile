import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ButtonIcon({ iconName, onPress, style, size = 24, color = "white" }) {
  return (
    <TouchableOpacity style={[styles.iconButton, style]} onPress={onPress}>
      <MaterialIcons name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#19918F",
  },
});
