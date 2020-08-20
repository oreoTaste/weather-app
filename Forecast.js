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
      var date = new Date(weathers[i].dt * 1000);

      forecasts.push({
        temp: weathers[i].main.temp,
        feels_like: weathers[i].main.feels_like,  
        main: weathers[i].weather[0].main,
        icon_name: this.getIconName(weathers[i].weather[0].main),
        dt: (date.getMonth() + 1) + "/" + date.getDate(),
        dh: date.getHours() == 12 ? 
            date.getHours() + "PM" :
              (date.getHours() > 12) ?
              ((date.getHours() - 12) + "PM") :
              (date.getHours() + "AM"),
      })
    }

    this.setState({isLoading: false, forecasts});
  }

  componentDidMount() {
    this.getWeathers();
  }

  render() {
    const {isLoading, forecasts} = this.state;

    if(forecasts[0] !== undefined) {
      console.log(forecasts[0].dt, forecasts[0].dh)
    }

    return (
    <View>
      {
        isLoading ? 
        (<Text>Loading...</Text>) : 
        (<View style={styles.root}>

          <View style={styles.container}>
            <Text style={styles.main}>
              {forecasts[0].dt}
            </Text>
            <Text style={styles.main}>
              {forecasts[0].dh}
            </Text> 
            <MaterialCommunityIcons name={forecasts[0].icon_name} size={50} style={styles.icon}/>
            <Text style={styles.main}>{forecasts[0].main}</Text>
            <Text style={styles.temp}>{Math.round(forecasts[0].temp)}℃</Text>
            <Text style={styles.feels_like}>({Math.round(forecasts[0].feels_like)}℃)</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.main}>
              {forecasts[1].dt}
            </Text>
            <Text style={styles.main}>
              {forecasts[1].dh}
            </Text> 
            <MaterialCommunityIcons name={forecasts[1].icon_name} size={50} style={styles.icon}/>
            <Text style={styles.main}>{forecasts[1].main}</Text>
            <Text style={styles.temp}>{Math.round(forecasts[1].temp)}℃</Text>
            <Text style={styles.feels_like}>({Math.round(forecasts[1].feels_like)}℃)</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.main}>
              {forecasts[2].dt}
            </Text>
            <Text style={styles.main}>
              {forecasts[2].dh}
            </Text> 
            <MaterialCommunityIcons name={forecasts[2].icon_name} size={50} style={styles.icon}/>
            <Text style={styles.main}>{forecasts[2].main}</Text>
            <Text style={styles.temp}>{Math.round(forecasts[2].temp)}℃</Text>
            <Text style={styles.feels_like}>({Math.round(forecasts[2].feels_like)}℃)</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.main}>
              {forecasts[3].dt}
            </Text>
            <Text style={styles.main}>
              {forecasts[3].dh}
            </Text> 
            <MaterialCommunityIcons name={forecasts[3].icon_name} size={50} style={styles.icon}/>
            <Text style={styles.main}>{forecasts[3].main}</Text>
            <Text style={styles.temp}>{Math.round(forecasts[3].temp)}℃</Text>
            <Text style={styles.feels_like}>({Math.round(forecasts[3].feels_like)}℃)</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.main}>
              {forecasts[4].dt}
            </Text>
            <Text style={styles.main}>
              {forecasts[4].dh}
            </Text> 
            <MaterialCommunityIcons name={forecasts[4].icon_name} size={50} style={styles.icon}/>
            <Text style={styles.main}>{forecasts[4].main}</Text>
            <Text style={styles.temp}>{Math.round(forecasts[4].temp)}℃</Text>
            <Text style={styles.feels_like}>({Math.round(forecasts[4].feels_like)}℃)</Text>
          </View>

        </View>)
      }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
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
    },
    textShadowRadius: 1,
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
    textShadowRadius: 1,
  },
  feels_like: {
    fontSize: 11,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "black",
    textShadowOffset:{
        width: 3,
        height: 1,
    },
    textShadowRadius: 1,
  },
  main: {
    fontSize: 15,
    fontWeight: "800",
    color: "white",
    textShadowColor: "black",
    textShadowOffset:{
        width: 3,
        height: 1,
    },
    textShadowRadius: 1,

  },
});