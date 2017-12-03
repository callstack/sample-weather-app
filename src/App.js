import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';

const WeatherView = ({ icon, description, town, temp, date }) => (
  <View style={styles.weatherContainer}>
    <Text style={styles.town}>{town}</Text>
    <Image style={styles.image} source={{ uri: icon }} />
    <Text style={styles.text}>{description}</Text>
    <Text style={styles.temperature}>{temp} °F</Text>
  </View>
);

export default class App extends Component {
  state = {
    inputText: '',
    town: null,
    temp: null,
    condition: {
      icon: null,
      text: null,
    },
    date: null,
  };


  fetchWeatherData = async (query) => {
    const response = await fetch(
      `https://api.apixu.com/v1/current.json?key=6345e08ddab14e979b9183551172811&q=${query}`
    );
    const { location, current } = await response.json();

    this.setState(() => ({
      town: location.name,
      date: location.localtime,
      condition: {
        icon: `https:${current.condition.icon}`,
        text: current.condition.text,
      },
      temp: current.temp_f,
    }));
  }

  render() {
    const { inputText, condition, town, temp, date } = this.state;
    
    return (
      <ImageBackground style={styles.container} source={require('../assets/sky.jpg')}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
        />
        {town ? (
          <WeatherView 
            icon={condition.icon}
            description={condition.text}
            town={town}
            temp={temp}
            date={date}
          />
        ) : (
          <Text style={styles.instructions}>
            Type town name to see current weather
          </Text>
        )}
        <TextInput
          style={styles.input}
          onChangeText={(text) => { 
            this.setState(() => ({ inputText: text })); 
          }} 
          onSubmitEditing={() => { this.fetchWeatherData(inputText); }}
          value={inputText}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#48717A',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 16,
  },
  input: { 
    backgroundColor: '#eeeeee',
    borderRadius: 8,
    height: 30, 
    width: 200,
    borderColor: 'black', 
    borderWidth: 1 
  },
  weatherContainer: {
    alignItems: 'center',
  },
  town: {
    fontSize: 34,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'white',
  },
  text: {
    fontSize: 18,
    backgroundColor: 'transparent',
    color: 'white',
  },
  image: {
    width: 60,
    height: 60,
  },
  temperature: {
    fontSize: 40,
    backgroundColor: 'transparent',
    color: 'white',
  }
});
