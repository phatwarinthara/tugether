import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

export default class CustomInput extends Component {
  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={() => {}}
        placeholder={this.props.placeholder}
        value={null}
      />
    );
  }
}


