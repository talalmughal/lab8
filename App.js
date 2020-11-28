import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function App() {
  const [Original_Price, SetPriceOriginal] = useState();
  const [Discount_Percent, setPriceDiscount] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.headerStyles}> Calculator App (Discount)</Text>
      <TextInput
        style={styles.inputStyles}
        placeholder="Enter Original Price"
      />
      <TextInput
        style={[styles.inputStyles, { marginTop: 6 }]}
        placeholder="Discount (%)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "grey",
  },
  headerStyles: {
    textAlign: "center",
    backgroundColor: "#63f542",
    marginTop: 0,
    marginBottom: 40,
    padding: 5,
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff"
  },
  inputStyles: {
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    padding: 5,
    margin: "auto",
    borderRadius: 4
  }
});
