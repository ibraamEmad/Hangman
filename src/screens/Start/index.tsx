import React, { useState, useEffect } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles';
import  Selector  from '@components/Selector'

function Start(props:any) {


  return (
    <View style={styles.container}>
        
        <Text style={styles.title}>Hangman</Text>
        <Image source={{uri: 'runningben'}} resizeMode="contain" style={styles.img}/>

        <Text style={styles.body}>Start solving the mystery to save Ben from the bad people!</Text>

 
        <TouchableOpacity style={styles.startButton} activeOpacity={0.8} onPress={()=>props.navigation.navigate('Game')}>
        <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>

        <Text style={styles.body}>Number of letters</Text>
        <Selector/>

    </View>
  );
}

const mapStateToProps = (state:any) => ({

})

export default connect(mapStateToProps, actions)(Start);