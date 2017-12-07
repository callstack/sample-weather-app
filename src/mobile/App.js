/* @flow */
import React, { Component } from 'react';
import {
  StatusBar,
} from 'react-native';

import Header from 'shared/Header';
import Container from 'shared/Container';
import Input from 'shared/Input';
import WeatherView from 'shared/WeatherView';

import withWeather from 'shared/withWeather';

type Props = {|
  weather: Weather,
  fetchWeatherData: (query: string) => void
|};

type State = {|
  inputText: string,
|}

class App extends Component<Props, State> {
  state = {
    inputText: '',
  };

  render() {
    const { weather, fetchWeatherData } = this.props;
    const { inputText } = this.state;
    
    return (
      <Container>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
        />
        {weather ? (
          <WeatherView 
            icon={weather.condition.icon}
            description={weather.condition.text}
            town={weather.town}
            temp={weather.temp}
            date={weather.date}
          />
        ) : (
          <Header>
            Type town name to see current weather
          </Header>
        )}
        <Input
          onChangeText={(text) => { 
            this.setState(() => ({ inputText: text })); 
          }} 
          onSubmitEditing={() => { fetchWeatherData(inputText); }}
          value={inputText}
        />
      </Container>
    );
  }
}

export default withWeather(App);
