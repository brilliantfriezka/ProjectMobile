import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import Navbar from "../components/Navbar";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-web";

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [balanceVisible, setBalanceVisible] = useState(true);

  const transactions = [
    { id: 1, name: "Adityo Gizwanda", type: "Transfer", amount: -150000, image: require("../assets/MELODY.jpg") },
    { id: 2, name: "Adityo", type: "Topup", amount: 750000, image: require("../assets/MELODY.jpg") },
    { id: 3, name: "Adityo", type: "Topup", amount: 500000, image: require("../assets/MELODY.jpg") },
    { id: 4, name: "Adityo Gizwanda", type: "Transfer", amount: -25000, image: require("../assets/MELODY.jpg") },
    { id: 5, name: "Adityo Gizwanda", type: "Transfer", amount: -150000, image: require("../assets/MELODY.jpg") },
    { id: 6, name: "Adityo", type: "Topup", amount: 750000, image: require("../assets/MELODY.jpg") },
    // { id: 7, name: "Adityo", type: "Topup", amount: 500000, image: require("../assets/MELODY.jpg") },
    // { id: 8, name: "Adityo Gizwanda", type: "Transfer", amount: -25000, image: require("../assets/MELODY.jpg") },
    // { id: 9, name: "Adityo Gizwanda", type: "Transfer", amount: -150000, image: require("../assets/MELODY.jpg") },
    // { id: 10, name: "Adityo", type: "Topup", amount: 750000, image: require("../assets/MELODY.jpg") },
    // { id: 11, name: "Adityo", type: "Topup", amount: 500000, image: require("../assets/MELODY.jpg") },
    // { id: 12, name: "Adityo Gizwanda", type: "Transfer", amount: -25000, image: require("../assets/MELODY.jpg") },
    // { id: 13, name: "Adityo Gizwanda", type: "Transfer", amount: -150000, image: require("../assets/MELODY.jpg") },
    // { id: 14, name: "Adityo", type: "Topup", amount: 750000, image: require("../assets/MELODY.jpg") },
    // { id: 15, name: "Adityo", type: "Topup", amount: 500000, image: require("../assets/MELODY.jpg") },
    // { id: 16, name: "Adityo Gizwanda", type: "Transfer", amount: -25000, image: require("../assets/MELODY.jpg") },
  ];

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const toggleBalanceVisibility = () => setBalanceVisible((prev) => !prev);

  const themeStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, themeStyles.container]}>
      {/* Header Section */}
      <View style={[styles.header, themeStyles.card]}>
        <View style={styles.profile}>
        <Image
          source={require("../assets/MELODY.jpg")}
          style={styles.profileImage}/>
          <View>
            <Text style={[styles.name, themeStyles.text]}>
              Brilliant Friezka Aina
            </Text>
            <Text style={[styles.subtitle, themeStyles.text]}>
              Personal Account
            </Text>
          </View>
        </View>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      {/* Greeting Section */}
      <View style={{flexDirection: "row", justifyContent: "space-between", paddingBottom: 12}}>
      <View style={styles.greetingSection}>
        <Text style={[styles.greetingText, themeStyles.text]}>
          Good Morning, Brilliant
        </Text>
        <Text style={themeStyles.text}>
          Check all your incoming and outgoing transactions here
        </Text>
      </View>
      <View>
      <Image source={require("../assets/Sun.png")}/>
      </View>
      </View>

      {/* Account Number */}
      <View style={styles.accountNumberContainer}>
        <Text style={styles.accountLabel}>Account No.</Text>
        <Text style={styles.accountValue}>100899</Text>
      </View>

      {/* Balance Section */}
      <View style={[styles.balanceSection, themeStyles.card]}>
        <View>
        <Text style={[themeStyles.text]}>Balance</Text>
        <View style={styles.balanceDisplay}>
          <Text style={[styles.balanceAmount, themeStyles.text]}>
            {balanceVisible ? "Rp. 10.000.000" : "Rp. ••••••••"}
          </Text>
          <TouchableOpacity onPress={toggleBalanceVisibility}>
            <MaterialIcons
              name={balanceVisible ? "visibility" : "visibility-off"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
      </View>
      </View>

        {/* Topup & Transfer Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.iconButton, themeStyles.button]}>
            <MaterialIcons name="add" size={28} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconButton, themeStyles.button]}>
            <MaterialIcons
              name="send"
              size={20}
              color="#FFFFFF"
              style={{ transform: [{ rotate: "-30deg" }] }}
            />
          </TouchableOpacity>
        </View>
      </View>


      {/* Transaction History */}
      <ScrollView>
      <View style={[styles.transactionContainer, themeStyles.card]}>
        <Text style={[styles.transactionTitle, themeStyles.text]}>
          Transaction History
        </Text>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              {/* Profile Image */}
              <Image source={item.image} style={styles.profileImage} />

              {/* Transaction Details */}
              <View style={styles.detailsContainer}>
                <Text style={[styles.transactionName, themeStyles.text]}>
                  {item.name}
                </Text>
                <Text style={[styles.transactionType, themeStyles.text]}>
                  {item.type}
                </Text>
                <Text style={styles.transactionDate}>08 December 2024</Text>
              </View>

              {/* Transaction Amount */}
              <Text
                style={[
                  styles.transactionAmount,
                  { color: item.amount > 0 ? "#2DC071" : "gray" },
                ]}
              >
                {item.amount > 0 ? `+ ${item.amount},00` : `${item.amount},00`}
              </Text>
            </View>
          )}
        />
      </View>
      </ScrollView>
      <View>
      <Navbar navigation={navigation} />
      </View>
    </View>
  );
}

const lightTheme = {
  container: { backgroundColor: "#FFFFFF" },
  card: { backgroundColor: "#F9F9F9", elevation: 4 },
  text: { color: "#000000" },
  button: { backgroundColor: "#19918F" },
};

const darkTheme = {
  container: { backgroundColor: "#121212" },
  card: { backgroundColor: "#1E1E1E", elevation: 4 },
  text: { color: "#FFFFFF" },
  button: { backgroundColor: "#333333" },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: "gray",
  },
  greetingSection: {
    marginBottom: 10,
    width: "60%"
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  accountNumber: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accountNumberContainer: {
    backgroundColor: "#19918F",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  accountLabel: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  accountValue: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  balanceDisplay: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceSection: {
    padding : 8,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "500",
    marginRight: 8, 
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
  },  
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: "#19918F",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 7,
    shadowColor: "#19918F",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8, 
    shadowRadius: 5, 
    elevation: 8,
  },
  transactionContainer: {
    borderRadius: 10,
    padding: 16,
    marginTop: 12,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  detailsContainer: {
    flex: 1, // Allow this section to take up available space
    marginRight: 16, // Add spacing between the details and the amount
  },
  transactionName: {
    fontSize: 14,
    fontWeight: "500",
  },
  transactionType: {
    fontSize: 12,
  },
  transactionDate: {
    fontSize: 10,
    color: "gray",
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: "semibold",
  },
});