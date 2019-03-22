import React, {Component} from 'react';
import {TouchableHighlight, Text, Button,View} from  'react-native';
export default class Contador extends Component{
  state = {
    numero: 0,
  }
  incrementar = () => {
    this.setState({
      numero: this.state.numero + 1
    })
  }
  zerar = () => {
    this.setState({
      numero: 0
    })
  }
  render(){
    return (
      <View>
      </View>
    )
  }
}
