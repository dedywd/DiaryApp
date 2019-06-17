import React from 'react';
import { StyleSheet, Text,TextInput, View, Button, TouchableHighlight} from 'react-native';


export default class WriteDiary extends React.Component {
  render() {
    return (
      <View style={styles.vMain}>
        <View style={styles.vHeader}>
         <Text style={styles.txtHeader}>Tulis Buku Harian</Text>
        </View>
        <View style={styles.vForm}>
          <View style={styles.vFormChild}>
            <Text style={styles.txtForm}>Tanggal</Text>
            <TextInput style={styles.txtInput} keyboardType = 'default'
            />
          </View>
          <View style={styles.vFormChild}>
            <Text style={styles.txtForm}>Judul</Text>
            <TextInput style={styles.txtInput} keyboardType = 'default'
            />
          </View>
        </View>
        <View style={styles.vText}>
          <TextInput style={styles.txtText}
          keyboardType = 'default'
          placeholder="Tulis catatan harian di sini"
          multiline = {true}
          />
        </View>
        <View style={styles.vButton}>
          <View style={styles.vItemButton}>
          <TouchableHighlight
              //onPress={}
              accessibilityLabel="Add Photo"
              style={styles.vItemMenu}>
              <Text style={styles.textForm}>ADD PHOTO</Text>
          </TouchableHighlight>
          </View>
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
            accessibilityLabel="SAVE"
            style={styles.vItemNav}>
            <Text style={styles.textNavigation}>SAVE</Text>
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

 vHeader: {
 flex:1,
 alignItems:'center',
 justifyContent:'center',
 },

 txtHeader: {
 color:'white',
 fontSize:35,
 fontWeight: 'bold'
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

containerNavigation:{

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
  width: 170
}

});
