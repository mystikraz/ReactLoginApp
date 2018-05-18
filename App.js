import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from './app/component/Login';


const Application = StackNavigator({
  Home:{screen:Login},
},{
  navigationOptions:{
    header:false,
  }
});

export default class App extends React.Component {
  render() {
    return (
    <Application/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
