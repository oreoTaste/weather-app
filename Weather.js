import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#B79891", "#94716B", "#0f0f0f"]
    // uigradients.com
  },
  Clouds: {
    iconName: "cloud",
    gradient: ["#536976", "#292E49", "#0f0f0f"]
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#2c3e50", "#292E49", "#0f0f0f"]
  },
  Drizzle: {
    iconName: "water",
    gradient: ["#2c3e50", "#bdc3c7"]
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#373B44", "#363795"]
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#6DD5FA", "#8e9eab"]
  },
  Atmosphere: {
    iconName: "weather-windy",
    gradient: ["#7F7FD5", "#86A8E7"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#F2994A", "#F2C94C"]
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#005AA7", "#2193b0"]
  },
  Dust: {
    iconName: "weather-hazy",
    gradient: ["#6D6027", "#d6ae7b"]
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} 
                    style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.first_container}>
        <MaterialCommunityIcons 
          name={weatherOptions[condition].iconName}
          size={92} 
          color="white" />
        <Text style={styles.temp}>{temp}`C</Text>
      </View>
      <View style={styles.second_container}>
        <Text style={styles.condition}>{condition}</Text>
      </View>
    </LinearGradient>
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
    color: "white"
  },

  condition: {
    fontSize: 26,
    color: "white"
  }
});