import React from 'react';
import Home from './components/Home'
import Details from './components/Details'
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'
import { StackNavigator } from 'react-navigation'
import styled from 'styled-components'

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Details: {
      screen: Details,
    },
  }, {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
