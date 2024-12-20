import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

export default function TopupPage({ navigation }) {
  const [value, setValue] = useState(null);
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");

  const dropDownData = [
    { label: "BYOND Pay", value: "BYOND Pay" },
    { label: "Hasanah Card", value: "Hasanah Card" },
    { label: "QRIS", value: "QRIS" },
    { label: "DEBIT", value: "DEBIT" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Top Up</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        {/* Amount Input */}
        <View style={styles.container}>
          <Text style={{ fontSize: 20, fontWeight: "400", marginBottom: 7 }}>Amount</Text>
          <View style={styles.inputArea}>
            <Text style={{ fontSize: 16, paddingRight: 10}}>IDR</Text>
            <TextInput
              placeholder="Enter amount"
              keyboardType="numeric"
              onChangeText={setAmount}
              style={{ borderBottomWidth: 0.2, flex: 1, fontSize: 16, color: "gray" }}
            />
          </View>
        </View>

        {/* Dropdown */}
        <View style={styles.container}>
          <Text style={{ fontSize: 20, fontWeight: "400" }}>Select Payment</Text>
          <Dropdown
            style={styles.dropDown}
            placeholderStyle={{ color: "gray", fontSize: 16 }}
            placeholder="Select Payment"
            data={dropDownData}
            labelField="label"
            valueField="value"
            value={value}
            onChange={(item) => setValue(item.value)}
            renderItem={(item) => (
              <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
              </View>
            )}
          />
        </View>

        {/* Notes Input */}
        <View style={styles.container}>
          <Text style={{ fontSize: 20, fontWeight: "400", marginBottom: 7 }}>Notes</Text>
          <View style={styles.inputArea}>
            <TextInput
              placeholder="Add a note"
              onChangeText={setNotes}
              style={{ borderBottomWidth: 0.2, flex: 1, fontSize: 16, color: "gray" }}
            />
          </View>
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.buttonTopUp}>
        <Text style={styles.buttonText}>Top Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
  formContainer: {
    flex: 1,
    marginTop: 10,
  },
  container: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  dropDown: {
    borderBottomWidth: 0.2,
    paddingVertical: 10,
  },
  item: {
    padding: 10,
  },
  buttonTopUp: {
    backgroundColor: "#19918F",
    margin: 15,
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});