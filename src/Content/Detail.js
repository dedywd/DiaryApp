import React from 'react';
import { StyleSheet, Text,TextInput, View, Button, TouchableHighlight} from 'react-native';


export default class Detail extends React.Component {
  render() {
    return (
      <View style={styles.vMain}>
        <View style={styles.vForm}>
            <Text style={styles.txtForm}>Tanggal : xx xx xxxx</Text>
            <Text style={styles.txtForm}>Judul : Lorep Ipsum Dolor Sit Amet</Text>
            <Text style={styles.txtForm}>Lorep Ipsum Dolor Sit Amet
            Lorep Ipsum Dolor Sit Amet
            Lorep Ipsum Dolor Sit Amet
            Lorep Ipsum Dolor Sit Amet
            Lorep Ipsum Dolor Sit Amet
            Lorep Ipsum Dolor Sit Amet
            Lorep Ipsum Dolor Sit Amet
            Lorep Ipsum Dolor Sit Amet
            Lorep Ipsum Dolor Sit Amet
            </Text>
        </View>
        <View style={styles.containerNavigation}>
        <View style={styles.vNavigation}>
          <TouchableHighlight
            //onPress={}
            accessibilityLabel="BACK"
            style={styles.vItemNav}>
            <Text style={styles.textNavigation}>BACK</Text>
          </TouchableHighlight>
          <TouchableHighlight
            //onPress={}
            accessibilityLabel="EDIT"
            style={styles.vItemNav}>
            <Text style={styles.textNavigation}>EDIT</Text>
          </TouchableHighlight>
          <TouchableHighlight
            //onPress={}
            accessibilityLabel="DELETE"
            style={styles.vItemNav}>
            <Text style={styles.textNavigation}>DELETE</Text>
          </TouchableHighlight>
        </View>
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

 vForm:{
   flex: 1,
   backgroundColor:'#f08080',
   marginTop: 25,
   marginBottom: 25,
   marginLeft: 10,
   marginRight: 10
 },

 txtForm:{
   color:'white',
   fontSize:17,
   justifyContent:'center',
   fontWeight: 'bold',
   margin: 15,
 },

 txtInput: {
 flex:3,
 height:40,
 backgroundColor:'#fff',
 borderColor: 'gray',
 borderWidth: 1,
 margin: 10,
 },

vText:{
  flex: 3
},

 txtText:{
   height:300,
   backgroundColor:'#fff',
   borderColor: 'gray',
   borderWidth: 1,
   margin:10,
   textAlignVertical: 'top',
 },

 vButton:{
    flexDirection: 'row',
  },

  itemButton:{
   flex:1,
   backgroundColor:'#f08080',
 },

 vItemMenu:{
       backgroundColor:'#f0b880',
       marginLeft:250,
       marginBottom: 70,
       alignItems:'center',
       justifyContent:'center',
       height: 50,
       width: 100,
},


vNavigation:{
  flexDirection: 'row',
  backgroundColor:'#f0b880',
  height: 54,
  alignItems:'center',
  justifyContent:'center',
},

textNavigation:{
  flex: 1,
  fontSize:20,
  fontWeight: 'bold',
  marginTop: 10
},

vItemNav:{
  backgroundColor:'#f0b880',
  alignItems:'center',
  justifyContent:'center',
  height: 54,
  width: 130
}

});
