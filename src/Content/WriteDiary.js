import React from 'react';
import { StyleSheet, Text,TextInput, View, Button, TouchableHighlight,ActivityIndicator} from 'react-native';


export default class WriteDiary extends React.Component {

  constructor()
    {
        super();
        this.state = {
          tanggal:'',
          judul:'',
          isi:'',
        }
    }

    Insert_Data_Into_MySQL = () =>
 {
     this.setState({ ActivityIndicator_Loading : true }, () =>
     {
         fetch('http://dailydiarymobile.000webhostapp.com/tambahDiary.php',
         {
             method: 'POST',
             headers:
             {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(
             {
               tanggal : this.state.tanggal,

               judul : this.state.judul,

               isi : this.state.isi

             })

         }).then((response) => response.json()).then((responseJsonFromServer) =>
         {
             alert(responseJsonFromServer);

             this.setState({ ActivityIndicator_Loading : false });

         }).catch((error) =>
         {
             console.error(error);

             this.setState({ ActivityIndicator_Loading : false});
         });
     });
 }

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
            onChangeText={(txttanggal) => this.setState({tanggal:txttanggal})}
            />
          </View>
          <View style={styles.vFormChild}>
            <Text style={styles.txtForm}>Judul</Text>
            <TextInput style={styles.txtInput} keyboardType = 'default'
            onChangeText={(txtjudul) => this.setState({judul:txtjudul})}
            />
          </View>
        </View>
        <View style={styles.vText}>
          <TextInput style={styles.txtText}
          keyboardType = 'default'
          onChangeText={(txtisi) => this.setState({isi:txtisi})}
          placeholder="Tulis catatan harian di sini"
          multiline = {true}
          />
        </View>

        <View style={styles.containerNavigation}>
        <View style={styles.vNavigation}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Layar1')}
            accessibilityLabel="BACK"
            style={styles.vItemNav}>
            <Text style={styles.textNavigation}>BACK</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.Insert_Data_Into_MySQL}
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
  flex: 2
},

 txtText:{
   height:200,
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
