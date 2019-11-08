import React, { Component } from 'react';
import { Platform, AppRegistry, FlatList, StyleSheet, Image, Text, View } from 'react-native';
import { CONFIG } from '../env.js';

export default class UpcomingList extends Component {
  constructor(props){
    super(props);
  }

  _keyExtractor = (item, index) => {
    console.log(item);
    return JSON.stringify(item.id)
  };

  _renderItem = ({item}) => {
    return (
      <ImageListItem
      image={item}/>
  )};

  render() {
    console.log('here');
    return (
      <View style={{flex:1, flexDirection: 'row'}}>
        <FlatList
          data={this.props.images}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) =>
            <Image
              source={{uri: 'https://gopamoja.com/images/road.jpg'}}
              style={{ backgroundColor: 'yellow', resizeMode: 'contain', width: '100%', height: 200 }}/>
          }
        />
      </View>
    );
  }
}



// <Image
//     style={{width: 200, height: 200}}
//     resizeMode='cover'
//     source={{ uri: CONFIG.api + '/images/' + item.filename}}
//  />



const styles = StyleSheet.create({
  container :{
   flexDirection: 'column',
   flex:1
  }
})