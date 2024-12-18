import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./screens/HomePage";
import TransferPage from "./screens/TransferPage";
import TopupPage from "./screens/TopupPage";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthProvider } from "./context/AuthContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tabs Component
function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Set icons for each tab based on route name
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Transfer") {
            iconName = "swap-horiz";
          } else if (route.name === "TopUp") {
            iconName = "logout";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#088A85",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { height: 60, paddingBottom: 8 },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Transfer"
        component={TransferPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TopUp"
        component={TopupPage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

// Main App Component
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}