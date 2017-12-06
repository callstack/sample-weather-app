/* @flow */
import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {|
  children: React$Element<*>
|};

export default function Header({ children }: Props) {
  return <Text style={styles.header}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginBottom: 5,
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 16,
  },
})