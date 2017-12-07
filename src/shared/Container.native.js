/* @flow */
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

type Props = {|
  children: React$Element<*>
|};

export default function Container({ children }: Props) {
  return (
    <ImageBackground 
      style={styles.container} 
      source={require('../../assets/sky.jpg')}
    >
      {children}
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
  },
})

