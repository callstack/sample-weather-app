/* @flow */
import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {|
  children: React$Element<*>
|};

export default function Container({ children }: Props) {
  return (
    <View style={styles.container}>{children}</View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url("background.png")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'darkblue',
  }
})

