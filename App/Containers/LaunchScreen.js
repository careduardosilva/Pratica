import React, {Component} from 'react';
import {View, Text, TextInput, Button, YellowBox} from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import styles from './Styles/LaunchScreenStyles'

class App extends Component {
  state = {
    login: '',
    password: '',
  }
  onLoginChange = (login) => {
    this.setState({login});
  }
  onPasswordChange = (password) => {
    this.setState({password})
  }
  checkUser = () => {
    if(this.state.password === 'edu102030' && this.state.login == 'Carlos'){
      alert("Foi!")
    }
    else{
      alert("Não confere")
    }
  }
  
  render(){
    return (
    <View style = {{flex:100}}>
      <View style = {{flex:5, flexDirection:'row', backgroundColor:'darkgreen'}}>
        <Button title = "Voltar" color = "darkgreen">
        </Button>
        <View style = {{flex:5, alignItems:'center'}}>
          <Text style = {{fontSize:20, color:'white'}}>Validador</Text>
        </View>
      </View>
      <View style = {{flex:50,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Text>Login:</Text>
        <TextInput style = {{color:'black'}}
        placeholder = 'Username'
        onChangeText = {this.onLoginChange}
        ></TextInput>
        <Text>Password:</Text>
        <TextInput style = {{color:'black'}}
        placeholder = 'Password'
        onChangeText = {this.onPasswordChange}></TextInput>
        <Button
        title = "Submit"color = "black"
        styles = {styles.button}
        onPress = {this.checkUser}
        borderColor = 'white'>
        </Button> 
      </View>
    </View>
    );
  }
}

export default App
