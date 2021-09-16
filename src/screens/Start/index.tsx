import React, { useState, useEffect } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions';
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'
import { styles } from './styles';


function Start(props) {

  useEffect(() => {

      return () => {
      }
  }, [])

  return (
    <View style={styles.container}>
        
        <Text style={styles.title}>Hangman</Text>
        {/* <Image source={{uri: 'hangman'}} resizeMode="contain" style={styles.img}/> */}

        <TouchableOpacity activeOpacity={0.8} onPress={()=>props.navigation.navigate('Game')}>
        <Text>Start</Text>
        
        </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, actions)(Start);