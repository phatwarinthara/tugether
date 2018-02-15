import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './src/pages/Login'
import Description from './src/pages/Description'
import Joined from './src/pages/Joined'
import CreateEvent from './src/pages/CreateEvent'
import Home from './src/pages/Home'
import Main from './src/pages/Main'



export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='login' component={Login} title='Login'/>
          <Scene key='Description' component={Description} title='Title'/>
          <Scene key='Joined' component={Joined} title='Joined'/>
          <Scene key='CreateEvent' component={CreateEvent} title='CreateEvent' initial={true}/>
          <Scene key='Home' component={Home} title='Home'/>
          <Scene key='Main' component={Main} title='Main'/>
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
