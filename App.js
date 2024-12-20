import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TransferPage from "./screens/TransferPage";
import TopupPage from "./screens/TopupPage";
import HomePage from "./screens/HomePage";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Transfer") {
            iconName = "swap-horiz";
          } else if (route.name === "TopUp") {
            iconName = "account-balance-wallet";
          } 

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#088A85",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { height: 60, paddingBottom: 8 },
      })}
    >
      <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Tab.Screen name="Transfer" component={TransferPage} options={{ headerShown: false }} />
      <Tab.Screen name="TopUp" component={TopupPage} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  const { user, saveToken } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("userToken");
      if (token) {
        saveToken(token);
      }
      setLoading(false);
    };

    checkToken();
  }, []);

  return (
    <Stack.Navigator initialRouteName="Login">
    {!user ? ( 
      <>
          <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
      </>
      ) : (
        <Stack.Screen name="HomePage" component={MainTabs} options={{ headerShown: false }} />
      )} 
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}