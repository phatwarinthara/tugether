import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './src/pages/Login'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='login' component={Login} title='Login'/>
        </Stack>
      </Router>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
