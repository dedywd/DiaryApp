import React from 'react';
import { StyleSheet, Text,TextInput, View, Button, TouchableHighlight,Image} from 'react-native';
import axios from 'axios';


export default class Login extends React.Component {
  constructor(props){
      super(props);
      this.state={
        username:''
      }
    }

  render() {
    return (
      <View style={styles.vMain}>

        <View style={styles.vHeader}>
         <Image style={styles.gambar} source={require('../images/logom.png')}/>
        </View>

        <View style={styles.vForm}>
          <View style={styles.vFormChild}>
            <Text style={styles.txtForm}>Username</Text>
            <TextInput style={styles.txtInput} keyboardType = 'default'
            placeholder = 'Username'
            onChangeText={(txtusername) => this.setState({username:txtusername})}
            value={this.state.username}
            />
          </View>
          <View style={styles.vFormChild}>
            <Text style={styles.txtForm}>Password</Text>
            <TextInput style={styles.txtInput} keyboardType = 'default'
            placeholder = 'Password'
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            />
          </View>
        </View>

        <View style={styles.vButton}>
          <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Layar1',{ username: this.state.username })}
              accessibilityLabel="Login"
              style={styles.vItemMenu}>
              <Text style={styles.textForm}>LOGIN</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.vFooter}>
        <Text style={styles.txtFooter}>Belum Memiliki Akun?</Text>
        <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Layar2')}
            accessibilityLabel="Register"
            style={styles.vItemMenuFooter}>
            <Text style={styles.textFooter}>REGISTER</Text>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
vMain:{
  flex:1,
  backgroundColor:'#f08080'
},

vHeader: {
flex:2,
alignItems:'center',
justifyContent:'center',
},

txtFooter: {
  flex: 1,
color:'white',
fontSize:15,
marginBottom:10,
marginLeft:40,
alignItems:'center',
justifyContent:'center',
},

vForm:{
  flex: 1
},

vFormChild:{
  flexDirection: 'row',
  justifyContent:'center',
},

txtForm:{
  flex: 1,
  color:'white',
  fontSize:17,
  alignItems:'center',
  justifyContent:'center',
  fontWeight: 'bold',
  margin: 10,
},

txtInput: {
flex:3,
height:40,
backgroundColor:'#fff',
borderColor: 'gray',
borderWidth: 1,
margin: 10,
},

vButton:{
  flex:1,
  flexDirection: 'row',
  justifyContent:'center',
  alignItems:'center'
},

vItemMenu:{
      backgroundColor:'#f0b880',
      marginBottom:25,
      marginLeft:10,
      marginRight:10,
      alignItems:'center',
      justifyContent:'center',
      height: 50,
      width: 350,
},

textForm:{
  fontSize:20,
  fontWeight: 'bold'
},

textFooter:{
  flex:1,
  fontSize:15,
  color:'white',
  fontWeight: 'bold',
  alignItems:'flex-start',
  justifyContent:'center',
},

gambar: {
  flex: 1,
  margin: 15,
  height: 300,
  width: 300,
},

vFooter:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  flexDirection: 'row'
},

vItemMenuFooter:{
  flex: 1,
  backgroundColor:'#f08080',
  marginBottom:10,
  marginLeft:10,
  marginRight:10,
  alignItems:'center',
  justifyContent:'center',
  height: 20,
  width: 30,
},





});
