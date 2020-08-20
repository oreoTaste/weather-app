import React from "react";
import axios from "axios";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import * as Location from "expo-location";
import Weather from "./Weather";

const API_KEY = "115fb8e86a24d17553219d74ed2a0b37";
class App extends React.Component {
  state = {
    isLoading: true,
    current: {},
    weathers: [],
    city: {},
    altitude: 0,
    latitude: 0,
    longitude: 0,
    speed: 0,
  };
  //

  getWeatherForecast = async ({ altitude, latitude, longitude, speed }) => {

    latitude = 37.5752618;
    longitude = 126.8194859;


    // 현재 날씨 정보
    // feels_like, temp, weather[0].main
    const {
      data: {
        main: { feels_like, temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );

    // list:  3시간이내 예보, 1일/2일/3일/4일뒤 예보
    // city: 도시정보
    const {
      data: { list, city },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    const weathers = [];
    for (let i = 0; i < list.length; i += 8) {
      weathers.push(list[i]);
    }

    latitude = Math.round(latitude * 10000000) / 10000000;
    longitude = Math.round(longitude * 10000000) / 10000000;
    console.log(latitude, longitude);

    this.setState({
      isLoading: false,
      // 현재 날씨
      current: {
        feels_like,
        temp,
      },
      weather,
      // 예보
      weathers,
      // 도시정보
      city,
      // 위치정보 (altitude, latitude, longitude,  speed)
      altitude,
      latitude,
      longitude,
      speed,
    });
  };

  getLocation = async () => {
    await Location.requestPermissionsAsync();
    const { coords } = await Location.getCurrentPositionAsync();
    this.getWeatherForecast(coords);
  };


  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {
      isLoading,
      // 현재 날씨
      current: { feels_like, temp },
      weather,
      // 예보
      weathers,
      // 도시정보
      city,
      // 위치정보 (altitude, latitude, longitude,  speed)
      altitude,
      latitude,
      longitude,
      speed,
    } = this.state;

    var main;
    for(let i in weather ) {
      main = weather[0].main;
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
            <Weather city={city} feels_like={feels_like} temp={temp} weather={main} weathers={weathers} />
        )}
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
