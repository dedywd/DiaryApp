import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {ListItem } from 'react-native-elements'
import axios from 'axios';

type Props = {};
export default class Category extends Component<Props> {
  constructor(props) {
    super(props)
    prefik_url = 'http://dailydiarymobile.000webhostapp.com/uploads/';
    this.state = {
        categories: []
    };
  }

  componentDidMount() {
    axios.post(`http://dailydiarymobile.000webhostapp.com/getDiary.php?username=daniel`)
      .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
  <ListItem
    title={item.judul}
    leftAvatar={{ source: { uri: prefik_url+item.image } }}
  />
)
  render() {
    return (
        <View style={styles.container} >
          <View style={styles.header}>
            <Text style={styles.txtHeader}> List Catatan </Text>
          </View>
            <FlatList
               keyExtractor={this.keyExtractor}
               data={this.state.categories}
               renderItem={this.renderItem}
             />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor:'#f08080'
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#fff'
  },
  header: {
    height:70,
    backgroundColor:'#f0b880',
    justifyContent:'center',
    alignItems:'center'
  },

});
