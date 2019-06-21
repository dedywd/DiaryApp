import React from 'react';
import { StyleSheet, Text,TextInput, View, Button, TouchableHighlight} from 'react-native';


export default class Register extends React.Component {
  render() {
    return (
      <View style={styles.vMain}>
        <View style={styles.vHeader}>
         <Text style={styles.txtHeader}>CREATE YOUR ACCOUNT</Text>
        </View>

        <View style={styles.vForm}>
          <View style={styles.vFormChild}>
            <Text style={styles.txtForm}>Nama</Text>
            <TextInput style={styles.txtInput} keyboardType = 'default'
            />
          </View>
          <View style={styles.vFormChild}>
            <Text style={styles.txtForm}>Username</Text>
            <TextInput style={styles.txtInput} keyboardType = 'default'
            />
          </View>
          <View style={styles.vFormChild}>
            <Text style={styles.txtForm}>Password</Text>
            <TextInput style={styles.txtInput} keyboardType = 'default'
            />
          </View>
        </View>

        <View style={styles.vButton}>
          <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Main')}
              accessibilityLabel="Cancel"
              style={styles.vItemMenu}>
              <Text style={styles.textForm}>CANCEL</Text>
          </TouchableHighlight>
          <TouchableHighlight
              //onPress={}
              accessibilityLabel="Register"
              style={styles.vItemMenu}>
              <Text style={styles.textForm}>REGISTER</Text>
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
flex:1,
alignItems:'center',
justifyContent:'center',
},

txtHeader: {
color:'white',
fontSize:25,
fontWeight: 'bold',
margin:10,
},

vForm:{
  flex: 1
},

vFormChild:{
  flexDirection: 'row',
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
      width: 150,
},

textForm:{
  fontSize:20,
  fontWeight: 'bold'
},



});
