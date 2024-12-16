import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./screens/HomePage";
import TransferPage from "./screens/TransferPage";
import TopUpPage from "./screens/TopupPage";
import LoginPage from "./screens/LoginPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="TransferPage" component={TransferPage} />
        <Stack.Screen name="TopUpPage" component={TopUpPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}