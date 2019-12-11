import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import { setInterval } from 'timers';

export default class State extends Component {
    state={
        isShowingText:true
    }

    componentDidMount(){
        setInterval(()=>(
            this.setState(previousState=>({
                 isShowingText: !previousState.isShowingText 
            })
        )
    ),1000);
    }

    

    render() {
    if(!this.state.isShowingText){
        return null;
    }

    const styles=StyleSheet.create({
        red:{
            color:"red",
            fontWeight:"bold",   
        },

        
    });

      return (
        <View style={{width: 150, height: 150, backgroundColor: 'dodgerblue'}} >
            <Text style={styles.red}>{this.props.text}</Text>
        </View>
      );
    }
  }