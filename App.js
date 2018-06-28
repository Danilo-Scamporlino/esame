import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';

import DetailScreen from './components/DetailScreen';
import ListScreen from './components/ListScreen';
import AddScreen from './components/AddScreen';

const StackNavigator = createStackNavigator(
  {
    List: ListScreen,
    Details: DetailScreen,
    Add: AddScreen
  },
  {
    initialRouteName: 'List',
  }
);

export default class App extends Component {
  render() {
    return <StackNavigator />;
  }
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
*/
