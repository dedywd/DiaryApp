import React from 'react';
import { StyleSheet, Text,TextInput, View, Button, TouchableHighlight} from 'react-native';


export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.vMain}>
        <View style={styles.vHeader}>
         <Text style={styles.txtHeader}>Hai user, bagaimana kesanmu hari ini?
         Ayo tuliskan beberapa catatan di buku harianmu.</Text>
        </View>
        <View style={styles.vMenu}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Layar3')}
            accessibilityLabel="Tulis"
            style={styles.vItemMenu}>
            <Text style={styles.textMenu}>TULIS BUKU HARIAN</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Layar5')}
            accessibilityLabel="Lihat"
            style={styles.vItemMenu}>
            <Text style={styles.textMenu}>LIHAT BUKU HARIAN</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Layar4')}
            accessibilityLabel="Lihat"
            style={styles.vItemMenu}>
            <Text style={styles.textMenu}>UPLOAD FOTO</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.vLogout}>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('Main')}
          accessibilityLabel="LogOut"
          style={styles.vItemMenu}>
          <Text style={styles.textMenu}>LOG OUT</Text>
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

txtHeader: {
color:'white',
fontSize:30,
fontWeight: 'bold',
margin:25,
},

vMenu:{
  flex:1,
  alignItems:'center',
},

vItemMenu:{
      backgroundColor:'#f0b880',
      marginBottom:25,
      marginLeft:10,
      marginRight:10,
      alignItems:'center',
      justifyContent:'center',
      height: 50,
      width: 320,
},

textMenu:{
  fontSize:20,
  fontWeight: 'bold',
  marginTop: 10
},

vLogout:{
  flex:1,
  alignItems:'center',
  justifyContent: 'flex-end'
}

});
