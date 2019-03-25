import React, { Component } from 'react'; 
import { TouchableHighlight, Text, View } from 'react-native';
import { Button } from 'react-native';

export default class Contador extends Component {
  state = {
    segundos1: 0,
    segundos2: 0,
    minutos1: 0,
    minutos2: 0,
    horas1: 0,
    horas2: 0,
    bug: false,
  }

  time = () => {
    console.log(this.state.bug)
    alert(this.state.bug)
    if(this.state.bug == false){
        this.Interval = setInterval(() => {
          this.setState({
          segundos1: this.state.segundos1 + 1
          })
          if(this.state.segundos1 == 10){
            this.setState({
              segundos2: this.state.segundos2 + 1,
              segundos1: 0
            })
          }
          if(this.state.segundos2 == 6){
                this.setState({
                  minutos1: this.state.minutos1 + 1,
                  segundos1: 0,
                  segundos2: 0,
                })
          }
          if(this.state.minutos1 == 10){
                  this.setState({
                    minutos2: this.state.minutos2 + 1,
                    minutos1: 0
                  })
          }
          if(this.state.minutos2 == 6){
                this.setState({
                  horas1: this.state.horas1 + 1,
                  minutos1: 0,
                  minutos2: 0,
                })
          }
          if(this.state.horas1 == 10){
                  this.setState({
                    horas2: this.state.horas2 + 1,
                    horas1: 0
                  })
          }
        }, 1000);
    }
  }

  timeStart = () => {
    this.setState({
      bug: true,
    })
    this.time()
  }

  timeStop = () => {
    this.setState({
      segundos1: 0,
      segundos2: 0,
      minutos1: 0,
      minutos2: 0,
      horas1: 0,
      horas2: 0,
      bug: false,
    })
    clearInterval(this.Interval)
  }

  render() {
    return (
      <View style = {{flex: 100, backgroundColor: '#DCDCDC'}}>
        <Text style = {{flex: 30, fontSize:60, marginTop: 90, marginLeft: 20}}>Cronômetro</Text>
        <Text style = {{flex: 20, fontSize:50, marginLeft: 55, marginTop: 40}}>{this.state.horas2}{this.state.horas1} : {this.state.minutos2}{this.state.minutos1} : {this.state.segundos2}{this.state.segundos1}</Text>
        <View style = {{flex: 50, alignItems: "center"}}>
          <Button
            onPress = {this.timeStart}
            title = "start"
            color = "#696969"
          >
          </Button>
          <Text/>
          <Button
            onPress = {this.timeStop}
            title = "Stop"
            color = "#696969"
          >
          </Button>
        </View>
      </View>
    )
  }
}