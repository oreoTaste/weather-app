import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";

const API_KEY = "115fb8e86a24d17553219d74ed2a0b37";

export default class extends React.Component {
  state = {
    isLoading : true
  }

  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data);
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
         coords: {latitude, longitude, speed}
        } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude, speed);
      
      // send to API and get Weather
      const weather = this.getWeather(latitude, longitude);
      this.setState({isLoading: false});
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render () {
    const { isLoading, longitude, latitude, speed } = this.state;
    return (
      isLoading ?
      <Loading /> :
      null
    );
  }
}

