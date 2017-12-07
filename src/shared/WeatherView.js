/* @flow */
import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

type Props = {|
  icon: string, 
  description: string, 
  town: string, 
  temp: string
|};

export default function WeatherView({ 
  icon, description, town, temp 
}: Props) {
  return (
    <View style={styles.weatherContainer}>
      <Text style={styles.town}>{town}</Text>
      <Image style={styles.image} source={{ uri: icon }} />
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.temperature}>{temp} °F</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
})