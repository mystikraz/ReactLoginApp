import React from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  TextInput,} from 'react-native';


export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to member Area</Text>
      </View>
    );
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2896d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#fff'
  }
});
