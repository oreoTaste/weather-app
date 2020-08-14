import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#B79891", "#94716B", "#0f0f0f"],
    // uigradients.com
    title: "Haze",
    subtitle: "Just don't go outside",
  },
  Clouds: {
    iconName: "cloud",
    gradient: ["#536976", "#292E49", "#0f0f0f"],
    title: "Clouds",
    subtitle: "Please take Vit.D",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#2c3e50", "#292E49", "#0f0f0f"],
    title: "Thunderstorm",
    subtitle: "Don't be scared",
  },
  Drizzle: {
    iconName: "water",
    gradient: ["#2c3e50", "#bdc3c7"],
    title: "Drizzle",
    subtitle: "it could rain, but drizzle",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#373B44", "#363795"],
    title: "Rain",
    subtitle: "Please take your umbrella",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#6DD5FA", "#8e9eab"],
    title: "Snow",
    subtitle: "Safe Driving",
  },
  Atmosphere: {
    iconName: "weather-windy",
    gradient: ["#7F7FD5", "#86A8E7"],
    title: "Atmosphere",
    subtitle: "as usual",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#F2994A", "#F2C94C"],
    title: "Clear",
    subtitle: "Clear and Sunny",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#005AA7", "#2193b0"],
    title: "Mist",
    subtitle: "Misty, be careful",
  },
  Dust: {
    iconName: "weather-hazy",
    gradient: ["#6D6027", "#d6ae7b"],
    title: "Dust",
    subtitle: "Please prepare your masks",
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
        <View style={styles.text_container}>
          <Text style={styles.condition}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
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

  text_container: {
    paddingHorizontal: 20
  },

  temp: {
    fontSize: 42,
    color: "white"
  },

  condition: {
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    color: "white",
    alignItems: "flex-start"
  },
  subtitle: {
    fontSize: 26,
    color: "white",
    alignItems: "flex-start"
  }
});