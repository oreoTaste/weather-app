import React from "react";
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Forecast from "./Forecast";

function Weather({city, feels_like, temp, weather, weathers}) {
    var icon = {
        name: "",
        colors:[],
    };

    switch(weather) {
        case "Clouds": icon.name="weather-cloudy"; icon.colors=["#373B44", "#4286f4"]; break;
        case "Thunderstorm": icon.name="weather-lightning"; icon.colors=["#4c669f", "#3b5998", "#192f6a"]; break;
        case "Drizzle":  icon.name="grain"; icon.colors=["#2c3e50", "#bdc3c7"]; break;
        case "Rain": icon.name="weather-rainy"; icon.colors=["#2c3e50", "#2980b9"]; break;
        case "Snow": icon.name="weather-snowy"; icon.colors=["#acb6e5", "#83a4d4"]; break;
        case "Mist": icon.name="weather-fog"; icon.colors=["#00416a", "#076585"]; break;
        case "Smoke": icon.name="soundcloud"; icon.colors=["#000000", "#434343"]; break;
        case "Haze": icon.name="weather-fog"; icon.colors=["#232526", "#414345"]; break;
        case "Dust": icon.name="weather-fog"; icon.colors=["#1e130c", "#9a8478"]; break;
        case "Fog": icon.name="weather-fog"; icon.colors=["#00416a", "#076585"]; break;
        case "Sand": icon.name="weather-cloudy"; icon.colors=["#1e130c", "#9a8478"]; break;
        case "Ash": icon.name="weather-fog"; icon.colors=["#232526", "#414345"]; break;
        case "Squall": icon.name="weather-tornado"; icon.colors=["#232526", "#414345"]; break;
        case "Tornado": icon.name="weather-tornado"; icon.colors=["#414345", "#2C5364"]; break;
        case "Clear": icon.name="weather-sunny"; icon.colors=["#f83600", "#fe8c00"]; break;
    }

    return (
        <LinearGradient
        colors={icon.colors}
        style={{ height: "100%", width: "100%", alignItems: 'center'}}
        >
            <View style={styles.container}>
                <View style={styles.first_half}>
                    <MaterialCommunityIcons name={icon.name} size={150} style={styles.icon}/>
                    <Text style={styles.weather}>{weather}</Text>
                    <Text style={styles.tempGroup}>
                        <Text style={styles.temp}>{Math.round(temp)}℃ </Text>
                        <Text style={styles.feels_like}>({Math.round(feels_like)}℃)</Text>
                    </Text>
                    <Text style={styles.city}>{city.name}, {city.country}</Text>
                </View>
                <View style={styles.second_half}>
                    <Forecast weathers={weathers}/>
                </View>
            </View>
        </LinearGradient>
    ) 
}
export default Weather;

Weather.propTypes = {
    weather: PropTypes.oneOf([
        "Thunderstorm","Drizzle","Rain","Snow","Mist","Smoke","Haze","Dust","Fog","Sand","Ash","Squall","Tornado","Clear","Clouds"
    ]).isRequired
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "80%",
    },
    first_half: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        color: "white",
        textShadowColor: "black",
        textShadowOffset:{
            width: 6,
            height: 3,
        },
        textShadowRadius: 1,
        marginTop: "10%",
    },
    weather: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        textShadowColor: "black",
        textShadowOffset:{
            width: 6,
            height: 3,
        },
        textShadowRadius: 8,
        marginBottom: "3%",
    },
    tempGroup: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        textShadowColor: "black",
        textShadowOffset:{
            width: 6,
            height: 3,
        },
        textShadowRadius: 8,
    },
    feels_like: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        textShadowColor: "black",
        textShadowOffset:{
            width: 6,
            height: 3,
        },
        textShadowRadius: 8,
    },
    city: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
        textShadowColor: "black",
        textShadowOffset:{
            width: 6,
            height: 3,
        },
        textShadowRadius: 8,
        marginTop: "5%",
    },
    second_half: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});