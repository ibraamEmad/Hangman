import React, {  } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions';
import {  Text, ScrollView } from 'react-native'
import { styles } from './styles';
import  Selector  from '@components/Selector'
import BodyText from '@components/BodyText'
import BenImage from '@components/BenImage'
import Button from '@components/Button'

function Start(props:any) {


  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.title}>Hangman</Text>
        
        <BenImage name= 'runningben'/>

        <BodyText text="Start solving the mystery to save Ben from the bad people!"/>
 
        <Button nav={props.navigation} text="Start"/>

        <BodyText text="Number of letters"/>

        <Selector/>

    </ScrollView>
  );
}

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, actions)(Start);