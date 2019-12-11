import React, { Component } from 'react';
import { Text, View,Button,TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';

export default class Helloworld extends Component {

  _onPressButton() {
    alert('You tapped the button!')
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }


    render() {
    
      return (
        <View style={{width: 200, height: 200, backgroundColor: 'yellow'}} >
          <Text>Hello, OMAIS</Text>
          <Button title="Click" onPress={this._onPressButton} color="#841584"/>

          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={{backgroundColor:"pink"}}>
            <Text>TouchableHighlight</Text>
          </View>
          </TouchableHighlight>

          <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
          <View style={{backgroundColor:"lightgray"}}>
            <Text>TouchableOpacity</Text>
          </View>
          </TouchableOpacity>

          <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={{backgroundColor:"lightblue"}}>
            <Text>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={{backgroundColor:"gray"}}>
            <Text>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
    
         
        </View>
      );
    }
  }