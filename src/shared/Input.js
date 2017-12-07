/* @flow */
import React from 'react';
import { TextInput, StyleSheet, Platform } from 'react-native';

type Props = {
  style: Styles,
};

export default function Input({ style, ...props }: Props) {
  return (
    <TextInput
      style={[styles.input, style]}
      {...props}
    />
  )
};

const platformSpecificInputStyles = Platform.select({
  ios: {},
  android: {},
  web: {
    outline: 'none',
  }
})

const styles = StyleSheet.create({
  input: { 
    backgroundColor: '#eeeeee',
    borderRadius: 8,
    height: 30, 
    width: 200,
    borderColor: 'black', 
    borderWidth: 1,
    ...platformSpecificInputStyles,
  },
});