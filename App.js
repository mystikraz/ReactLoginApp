import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from './app/component/Login';
import Profile from './app/component/Profile';


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
