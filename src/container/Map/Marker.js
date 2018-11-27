import React, { Component } from 'react';
import { View } from 'native-base';
import IconIonicons from 'react-native-vector-icons/Ionicons';

export default class extends Component {
  render() {
    return (
      <View
        padder
        style={{
          backgroundColor: '#BFCDE2',
          borderRadius: 200,
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <IconIonicons name="ios-radio-button-on" size={20} color="#4688F1" />
      </View>
    );
  }
}
