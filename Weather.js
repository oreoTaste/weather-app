import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({ temp, condition }) {
  return (
    <View style={styles.container}>
      <View style={styles.first_container}>
        <MaterialCommunityIcons name="weather-lightning-rainy" size={92} color="black" />
        <Text style={styles.temp}>{temp}`C</Text>
      </View>
      <View style={styles.second_container}>
        <Text style={styles.condition}>{condition}</Text>
      </View>
    </View>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition : PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle", 
    "Rain" , 
    "Snow", 
    "Atmosphere", 
    "Clear", 
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired 
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: "center",
    alignItems: "center"
  },

  first_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  second_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  temp: {
    fontSize: 42,
  },

  condition: {
    fontSize: 26,
  }
});