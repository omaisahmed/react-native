import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';


export default class HandlingTextInput extends Component {
    constructor(props){
        super(props)
    this.state={
       text: ''
    }
}

render(){
    
    
    return(
        <View style={{width:200,height:100,backgroundColor: 'white'}} >
            <TextInput style={{height: 40}}  placeholder="Type Here to Translate" onChangeText={(text) =>this.setState({text})} value={this.state.text}  />
            <Text>{this.state.text.split(' ').map((word)=>word && 'Hello').join(' ')}
                </Text>
        </View>
    )
}
}