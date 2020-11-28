import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function App() {
  const [Original_Price, SetPriceOriginal] = useState();
  const [Discount_Percent, setPriceDiscount] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.Header_Styles}> Calculator App (Discount)</Text>
      <TextInput
        style={styles.Input_Styles}
        value={Original_Price}
        onChange={(field) => SetPriceOriginal(field.target.value)}
        placeholder="Enter Original Price"
      />
      <TextInput
        style={[styles.Input_Styles, { marginTop: 6 }]}
        value={Discount_Percent}
        onChange={(field) => setPriceDiscount(field.target.value)}
        placeholder="Discount (%)"
      />
      <View style={styles.Discout_Style}>
        <Text style={styles.pricingStyles}>
          Amount Saved: {Original_Price * (Discount_Percent / 100)}${" "}
        </Text>
        <Text style={styles.Pricing_Style}>
          Price After discount: {Original_Price * (Discount_Percent / 100)}$
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BEBDBD"
  },
  Header_Styles: {
    textAlign: "center",
    backgroundColor: "#63f542",
    marginTop: 0,
    marginBottom: 45,
    padding: 5,
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff"
  },
  Input_Styles: {
    borderWidth: 3,
    borderColor: "black",
    width: "100%",
    padding: 5,
    margin: "auto",
    borderRadius: 4
  },
  Discout_Style: {
    textAlign: "center",
    marginTop: 10
  },
  Pricing_Style: {
    fontWeight: "italic",
    fontSize: 15
  }
});
