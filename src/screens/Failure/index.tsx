import React, { useState, useEffect } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions';
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'
import { styles } from './styles';


function Failure(props) {


  return (
    <View style={styles.container}>
        
        <Text style={styles.title}>Hangman</Text>
        <Image source={{uri: 'ben'}} resizeMode="contain" style={styles.img}/>

        <Text style={styles.body}>Ops! You have failed Ben.</Text>

        <TouchableOpacity style={styles.startButton} activeOpacity={0.8} onPress={()=>props.navigation.reset({
    index: 1,
    routes: [
      { name: 'Game' },
    ]})}>
        <Text style={styles.startText}>Play Again</Text>

        </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({
  word:state.app.word
})

export default connect(mapStateToProps, actions)(Failure);