import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the foking weather</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: "5%",
    paddingVertical : "15%",
    backgroundColor: "#FDF6AA"
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30
  }
})