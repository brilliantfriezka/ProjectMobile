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

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    let valid = true;

    // Reset error messages
    setEmailError("");
    setPasswordError("");

    // Validate email
    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } 
    // else if (password.length < 8) {
    //   setPasswordError("Password must be at least 8 characters.");
    //   valid = false;
    // }

    // If form is valid, proceed with login
    if (valid) {
      alert("Logged in successfully!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/Walled.png")} // Place wallet icon in assets folder
          style={styles.logo}
          resizeMode="contain" // Ensures the full image fits inside the container
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
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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
    width: 200, // Adjust as needed for the desired size
    height: 100, // Keep it square or as per the original aspect ratio
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
    borderColor: "#D3D3D3", // Default border color
    borderRadius: 8,
  },
  inputError: {
    borderColor: "red", // Red border on error
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