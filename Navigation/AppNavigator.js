import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import TopupScreen from "./screens/TopupScreen";
import TransferScreen from "./screens/TransferScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#19918F" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        {/* Halaman Home */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        {/* Halaman Top Up */}
        <Stack.Screen
          name="Topup"
          component={TopupScreen}
          options={{ title: "Top Up" }}
        />

        {/* Halaman Transfer */}
        <Stack.Screen
          name="Transfer"
          component={TransferScreen}
          options={{ title: "Transfer" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}