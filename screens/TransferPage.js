import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

export default function TransferPage({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "center",
        flex: 1,
      }}
    >
      <View>
        {/* Title Section */}
        <View style={{ padding: 20, backgroundColor: "#FFF" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Transfer</Text>
        </View>

        <View style={{ gap: 30 }}>
        {/* Account Number */}
        <View style={styles.accountNumberContainer}>
          <Text style={styles.accountValue}>ATo : 9000008940208</Text>
        </View>

          {/* Amount Section */}
          <View style={styles.container}>
            <Text style={{ fontSize: 12, color: "gray", marginBottom: 15 }}>
              Amount
            </Text>
            <View style={styles.inputArea}>
              <View style={{ flexDirection: "row", borderBottomWidth: 2 }}>
                <Text style={{ fontSize: 16, paddingRight: 10, fontWeight: "500"}}>IDR</Text>
                <TextInput
                  placeholder=""
                  style={{
                    fontSize: 36,
                    color: "gray",
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 12, color: "#19918F" }}>Balance</Text>
                <Text style={{ fontSize: 12, color: "#19918F" }}>
                  IDR 10.000.000
                </Text>
              </View>
            </View>
          </View>

          {/* Notes Section */}
          <View style={styles.container}>
            <Text style={{ fontSize: 16, color: "#B3B3B3" }}>Notes</Text>
            <View style={styles.inputArea}>
              <TextInput
                placeholder=""
                style={{ borderBottomWidth: 2, flex: 1, fontSize: 36 }}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Transfer Button */}
      <TouchableOpacity style={styles.buttonTopUp}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Transfer
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 45,
    gap: 10,
  },
  accountNumberContainer: {
    backgroundColor: "#19918F",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 12,
  },
  accountValue: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  inputArea: {
    height: 40,
    flexDirection: "column",
  },
  buttonTopUp: {
    backgroundColor: "#19918F",
    margin: 15,
    padding: 20,
    borderRadius: 8,
  },
});