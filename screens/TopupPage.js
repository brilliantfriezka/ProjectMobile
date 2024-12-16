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
    <SafeAreaView
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "center",
        flex: 1,
      }}
    >
      {/* Title Section */}
      <View style={{ backgroundColor: "#19918F", padding: 20 }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Top Up
        </Text>
      </View>

      <View style={{ gap: 30 }}>
        {/* Amount Input */}
        <View style={styles.container}>
          <Text style={{ fontSize: 16, color: "#B3B3B3" }}>Amount</Text>
          <View style={styles.inputArea}>
            <Text style={{ fontSize: 16, paddingRight: 10 }}>Rp</Text>
            <TextInput
              placeholder="Enter amount"
              keyboardType="numeric"
              onChangeText={setAmount}
              style={{ borderBottomWidth: 2, flex: 1, fontSize: 36 }}
            />
          </View>
        </View>

        {/* Dropdown */}
        <Dropdown
          style={styles.dropDown}
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

        {/* Notes Input */}
        <View style={styles.container}>
          <Text style={{ fontSize: 16, color: "#B3B3B3" }}>Notes</Text>
          <View style={styles.inputArea}>
            <TextInput
              placeholder="Add a note"
              onChangeText={setNotes}
              style={{ borderBottomWidth: 2, flex: 1, fontSize: 16 }}
            />
          </View>
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.buttonTopUp}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Top Up
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 10,
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  dropDown: {
    padding: 20,
    backgroundColor: "white",
  },
  item: {
    padding: 20,
  },
  buttonTopUp: {
    backgroundColor: "#19918F",
    margin: 15,
    padding: 20,
    borderRadius: 8,
  },
});