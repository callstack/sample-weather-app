/* @flow */
import React from 'react';

type Props = {};
type State = {
  fetched: boolean,
} & Weather;

export default (Component: React$Element<*>) => 
  class WeatherComponent extends React.Component<Props, State> {
    state = {
      fetched: false,
      town: null,
      temp: null,
      condition: {
        icon: null,
        text: null,
      },
      date: null,
    };

    fetchWeatherData = (query: string) => {
      const self = this;
      fetch(
        `https://api.apixu.com/v1/current.json?key=6345e08ddab14e979b9183551172811&q=${query}`
      ).then(res => res.json()).then(({ location, current } ) => {
        self.setState(() => ({
          fetched: true,
          town: location.name,
          date: location.localtime,
          condition: {
            icon: `https:${current.condition.icon}`,
            text: current.condition.text,
          },
          temp: current.temp_f,
        }));
      });
    }

    render() {
      const { fetched, ...weather } = this.state;
      return (
        <Component 
          weather={fetched ? weather : null} 
          fetchWeatherData={this.fetchWeatherData}
          {...this.props}
        />
      )
    }
  }