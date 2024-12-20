import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { login } from "../API/restApi";
import { useAuth } from "../context/AuthContext";

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const {saveToken} = useAuth();

  async function handleLogin() {
    let valid = true;
    console.log("login")

    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } 

    // For the Log in
    console.log("sign in")
    try {
      const result = await login(
        email,
        password
      )
      const token = result.data.token
      saveToken(token)
      navigation.navigate("MainTabs", { screen: "Home" });
    } catch(e) {
     console.log(e)
    } finally {
      return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/Walled.png")} 
          style={styles.logo}
          resizeMode="contain" 
        />
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, emailError && styles.inputError]}
          placeholder="Email"
          placeholderTextColor="black"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <TextInput
          style={[styles.input, passwordError && styles.inputError]}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      </View>

      {/* Login Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin()}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Register Link */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerLink}>Register here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 100, 
  },
  inputContainer: {
    marginBottom: 24,
    padding: 16,
  },
  input: {
    backgroundColor: "#F7F8FA",
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    color: "#000000",
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 8,
  },
  inputError: {
    borderColor: "red", 
  },
  errorText: {
    fontSize: 12,
    color: "red",
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: "#088A85",
    borderRadius: 6,
    alignItems: "center",
    paddingVertical: 12,
    width: "90%",
  },
  buttonContainer: {
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingVertical: 10,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  footerText: {
    fontSize: 14,
    color: "black",
  },
  registerLink: {
    fontSize: 14,
    color: "#088A85",
  },
});