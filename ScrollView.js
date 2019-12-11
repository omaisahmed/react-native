import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

export default class ScrollView extends Component {
  render() {
      return (
        <View>
          <Text>Scroll me plz</Text>
          <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 100, height: 100}} />
          
          
        </View>
    );
  }
}
