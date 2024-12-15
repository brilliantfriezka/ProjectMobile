import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://via.placeholder.com/50",
          }}
          style={styles.profileImage}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Chelsea Island</Text>
          <Text style={styles.subTitle}>Personal Account</Text>
        </View>
        <Text style={styles.sunIcon}>☀️</Text>
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.greeting}>Good Morning, Chelsea</Text>
        <Text style={styles.description}>
          Check all your incoming and outgoing transactions here
        </Text>
      </View>

      <View style={styles.accountNumberContainer}>
        <Text style={{
              color: 'white',
              fontSize: 18,
              marginBottom : 5,
        }}>Account No.</Text>
        <Text style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 600,
        }}>100899</Text>
      </View>
      <View style={styles.accountInfo}>
        <Text style={{
              fontWeight: 500,
        }}>Balance</Text>
        <Text style={styles.balanceAmount}>Rp 10.000.000</Text>
      </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>✈️</Text>
          </TouchableOpacity>
        </View>

      {/* Transaction History */}
      <View style={styles.historySection}>
        <Text style={styles.historyTitle}>Transaction History</Text>
        {["Transfer", "Topup"].map((type, index) => (
          <View style={styles.historyItem} key={index}>
            <View style={styles.circle} />
            <View style={{ flex: 1 }}>
              <Text style={styles.historyName}>Adityo Gizwanda</Text>
              <Text style={styles.historyType}>{type}</Text>
              <Text style={styles.historyDate}>08 December 2024</Text>
            </View>
            <Text
              style={[
                styles.historyAmount,
                type === "Topup" ? styles.positive : styles.negative,
              ]}
            >
              {type === "Topup" ? "+75.000,00" : "-75.000,00"}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  accountNumberContainer: {
    color: 'white',
    flexDirection: 'row',
    backgroundColor: "#19918F",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    justifyContent: 'space-between',
    letterSpacing: 1.5,
  },
  accountNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
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
    color: "gray",
  },
  sunIcon: {
    fontSize: 24,
  },
  welcomeSection: {
    marginBottom: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    color: "gray",
  },
  accountInfo: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  // accountLabel: {
  //   color: "white",
  // },
  // accountNumber: {
  //   color: 'white',
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   marginBottom: 16,
  // },
  balanceSection: {
    marginBottom: 16,
  },

  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    backgroundColor: "#4CAF50",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  actionText: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  historySection: {
    marginBottom: 16,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "lightgray",
    marginRight: 16,
  },
  historyName: {
    fontWeight: "bold",
  },
  historyType: {
    color: "gray",
  },
  historyDate: {
    color: "gray",
    fontSize: 12,
  },
  historyAmount: {
    fontWeight: "bold",
  },
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
});