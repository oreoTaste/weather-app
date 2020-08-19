import React from "react";
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Forecast from "./Forecast";

function Weather({city, feels_like, temp, weather, weathers}) {
    const icon = {};
    switch(weather) {
        case "Clouds": icon.name="weather-cloudy"; break;
        case "Thunderstorm": icon.name="weather-lightning"; break;
        case "Drizzle":  icon.name="grain"; break;
        case "Rain": icon.name="weather-rainy"; break;
        case "Snow": icon.name="weather-snowy"; break;
        case "Mist": icon.name="weather-fog"; break;
        case "Smoke": icon.name="soundcloud"; break;
        case "Haze": icon.name="weather-fog"; break;
        case "Dust": icon.name="weather-fog"; break;
        case "Fog": icon.name="weather-fog"; break;
        case "Sand": icon.name="weather-cloudy"; break;
        case "Ash": icon.name="weather-fog"; break;
        case "Squall": icon.name="weather-tornado"; break;
        case "Tornado": icon.name="weather-tornado"; break;
        case "Clear": icon.name="weather-sunny"; break;
    }

    console.log(weathers);
    return (
    <View style={styles.container}>
        <View style={styles.first_half}>
            <MaterialCommunityIcons name={icon.name} size={100} color="black" />
            <Text style={styles.current}>{Math.round(temp*10)/10}℃ ({Math.round(feels_like*10)/10}℃)</Text>
            <Text style={styles.city}>{city.name}, {city.country}</Text>
        </View>
        <View style={styles.second_half}>
            <Forecast weathers={weathers}/>
        </View>
    </View>
    ) 
}
export default Weather;

Weather.propTypes = {
    weather : PropTypes.oneOf([
        "Thunderstorm","Drizzle","Rain","Snow","Mist","Smoke","Haze","Dust","Fog","Sand","Ash","Squall","Tornado","Clear","Clouds"
    ]).isRequired
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    first_half: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    current: {
        fontSize: 35,
        fontWeight: "bold",
    },
    city: {
        fontSize: 28,
        fontWeight: "bold",
    },    second_half: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});