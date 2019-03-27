import React, {Component} from 'react';
import {View, Text, TextInput, Button, TouchableHighlight} from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import styles from './Styles/LaunchScreenStyles';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';

class AccountCheck extends Component {
  state = {
    login: '',
    password: '',
    press_times: 0,
  }
  createAccount = () => {
    this.props.navigation.navigate('Create Account');
  }
  onLoginChange = (login) => {
    this.setState({login});
  }
  onPasswordChange = (password) => {
    this.setState({password});
  }
  checkUser = () => {
    this.setState({press_times: this.state.press_times + 1})
    if(this.state.press_times < 4){
      if(this.state.password === 'edu102030' && this.state.login === 'Carlos'){
        alert("Foi!")
      }
      else{
        alert("Senha/Login inválido");
      }
    } else {
      alert("Conta bloqueada");
    }
  }
  
  render(){
    const {navigation} = this.props
    return (
    <View style = {styles.v1}>
      <View style = {{flexDirection:'row', backgroundColor:'darkgreen'}}>
        <Button title = "Back" color = "darkgreen"
        icon=
        {
          <Icon 
            name="question"
            size ={15}
        />
        }>
        </Button>
        <View style = {{flex:20, alignItems:'center'}}>
          <Text style = {{fontSize:20, color:'white'}}>Access Account</Text>
        </View>
      </View>

      <View style = {styles.v2}>
        <View>
        <Text>Login:</Text>
        <TextInput style = {{color:'black'}}
        placeholder = 'Username'
        onChangeText = {this.onLoginChange}
        ></TextInput>
        <Text>Password:</Text>
        <TextInput style = {{color:'black'}}
        placeholder = 'Password'
        onChangeText = {this.onPasswordChange}/>
        </View>
        <View style ={{height:100, justifyContent:'space-evenly'}}>
        <Button
          title = "Submit"color = "darkgreen"
          styles = {styles.button}
          onPress = {this.checkUser}
          borderColor = 'white'/>
          <Button 
          title = "Create Account"color = "black"
          styles = {styles.button}
          onPress = {this.createAccount}
          borderColor = 'white'/>
        </View>
      </View>

    </View>
    );
  }
}
class CreateAccount extends Component{   
  render(){
  return(
  <View style = {styles.v1}>
    <View style = {{flexDirection:'row', backgroundColor:'darkgreen'}}>
        <Button title = "Back" color = "darkgreen">
        </Button>
        <View style = {{flex:20, alignItems:'center'}}>
          <Text style = {{fontSize:20, color:'white'}}>Create Account</Text>
        </View>
    </View>
  </View>
)
  }
}
const TabNavigator = createBottomTabNavigator(
  {
  'Check Account': AccountCheck,
  'Create Account': CreateAccount,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused,horizontal,tintColor}) => {
        const{routeName} = navigation.state
        let iconName;
        if(routeName == 'Check Account'){
          iconName = 'user'
          return <Feather name = {iconName} size = {30} color="900"/>
        }
        else if(routeName == 'Create Account'){
          iconName = 'user-plus'
          return <Feather name = {iconName} size={30}/>
        }
      }
    })
  })
export default createAppContainer(TabNavigator)


