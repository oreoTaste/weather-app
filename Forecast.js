import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class extends React.Component {


  getIconName = (str) => {
    switch(str) {
      case "Clouds": return "weather-cloudy";
      case "Thunderstorm": return "weather-lightning";
      case "Drizzle":  return "grain";
      case "Rain": return "weather-rainy";
      case "Snow": return "weather-snowy";
      case "Mist": return "weather-fog";
      case "Smoke": return "soundcloud";
      case "Haze": return "weather-fog";
      case "Dust": return "weather-fog";
      case "Fog": return "weather-fog";
      case "Sand": return "weather-cloudy";
      case "Ash": return "weather-fog";
      case "Squall": return "weather-tornado";
      case "Tornado": return "weather-tornado";
      case "Clear": return "weather-sunny";
    }
  };

  state = {
    isLoading: true,
    forecasts: [],
  }

  getWeathers() {
    const {weathers} = this.props;
    const forecasts = [];

    for(let i = 0; i < weathers.length; i++) {
      forecasts.push({
        temp: weathers[i].main.temp,
        feels_like: weathers[i].main.feels_like,  
        main: weathers[i].weather[0].main,
        icon_name: this.getIconName(weathers[i].weather[0].main),
        dt: weathers[i].dt * 1000,
      })
    }

    this.setState({isLoading: false, forecasts});
  }

  componentDidMount() {
    this.getWeathers();
  }

  render() {
    const {isLoading, forecasts} = this.state;

    return (
    <View>
      {
        isLoading ? 
        (<Text>Loading...</Text>) : 
        (<View style={styles.root}>


          <View style={styles.container}>
            <Text style={styles.main}>
              {new Date(forecasts[0].dt).toLocaleDateString('kor').replace(/\ /gi, "").replace(/\./gi, "/")}
            </Text>
            <Text style={styles.main}>
              {new Date(forecasts[0].dt).toLocaleTimeString('kor').split(":")[0]}시
            </Text>
            <MaterialCommunityIcons name={forecasts[0].icon_name} size={50} style={styles.icon}/>
            <Text style={styles.main}>{forecasts[0].main}</Text>
            <Text style={styles.temp}>{Math.round(forecasts[0].temp)}℃ ({Math.round(forecasts[0].feels_like)}℃)</Text>
          </View>


          <View style={styles.container}>
            <Text style={styles.main}>
              {new Date(forecasts[1].dt).toLocaleDateString('kor').replace(/\ /gi, "").replace(/\./gi, "/")}
            </Text>
            <Text style={styles.main}>
              {new Date(forecasts[1].dt).toLocaleTimeString('kor').split(":")[0]}시
            </Text>
            <MaterialCommunityIcons name={forecasts[1].icon_name} size={50} style={styles.icon}/>
            <Text style={styles.main}>{forecasts[1].main}</Text>
            <Text style={styles.temp}>{Math.round(forecasts[1].temp)}℃ ({Math.round(forecasts[1].feels_like)}℃)</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.main}>
              {new Date(forecasts[2].dt).toLocaleDateString('kor').replace(/\ /gi, "").replace(/\./gi, "/")}
            </Text>
            <Text style={styles.main}>
              {new Date(forecasts[2].dt).toLocaleTimeString('kor').split(":")[0]}시
            </Text>
            <MaterialCommunityIcons name={forecasts[2].icon_name} size={50} style={styles.icon}/>
            <Text style={styles.main}>{forecasts[2].main}</Text>
            <Text style={styles.temp}>{Math.round(forecasts[2].temp)}℃ ({Math.round(forecasts[0].feels_like)}℃)</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.main}>
              {new Date(forecasts[3].dt).toLocaleDateString('kor').replace(/\ /gi, "").replace(/\./gi, "/")}
            </Text>
            <Text style={styles.main}>
              {new Date(forecasts[3].dt).toLocaleTimeString('kor').split(":")[0]}시
            </Text>
            <MaterialCommunityIcons name={forecasts[3].icon_name} size={50} style={styles.icon}/>
            <Text style={styles.main}>{forecasts[3].main}</Text>
            <Text style={styles.temp}>{Math.round(forecasts[3].temp)}℃ ({Math.round(forecasts[0].feels_like)}℃)</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.main}>
              {new Date(forecasts[4].dt).toLocaleDateString('kor').replace(/\ /gi, "").replace(/\./gi, "/")}
            </Text>
            <Text style={styles.main}>
              {new Date(forecasts[4].dt).toLocaleTimeString('kor').split(":")[0]}시
            </Text>
            <MaterialCommunityIcons name={forecasts[4].icon_name} size={50} style={styles.icon}/>
            <Text style={styles.main}>{forecasts[4].main}</Text>
            <Text style={styles.temp}>{Math.round(forecasts[4].temp)}℃ ({Math.round(forecasts[0].feels_like)}℃)</Text>
          </View>
          
        </View>)
      }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    width: "80vh",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
  },
  icon: {
    color: "white",
    textShadowColor: "black",
    textShadowOffset:{
        width: 3,
        height: 1,
    }  
  },
  temp: {
    fontSize: 16,
    fontWeight: "800",
    color: "white",
    textShadowColor: "black",
    textShadowOffset:{
        width: 3,
        height: 1,
    },
    textShadowRadius: 10,
  },
  main: {
    fontSize: 18,
    fontWeight: "800",
    color: "white",
    textShadowColor: "black",
    textShadowOffset:{
        width: 3,
        height: 1,
    },
    textShadowRadius: 10,

  },
});