import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';


export default class ButtonBasics extends Component {
    render() {
      return (
        <TouchableOpacity
          style={{ backgroundColor: 'pink', padding: 15, borderRadius: 15  }}
          onPress={this.props.onPressBtn}
        >
            <Text style={{color:'white'}}>
                {this.props.btnName}
            </Text>
        </TouchableOpacity>
      );
    }
  }