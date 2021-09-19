import React, {  } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions';
import { View } from 'react-native'
import { styles } from './styles';
import Header from '@components/Header'
import BodyText from '@components/BodyText'
import BenImage from '@components/BenImage'
import Button from '@components/Button'


function Failure(props:any) {


  return (
    <View style={styles.container}>
        
        <Header title={'Ops!'} nav={props.navigation}/>

        <BenImage name= 'ben'/>

        <BodyText text="You have failed Ben."/>

        <Button nav={props.navigation} text="Play Again"/>

    </View>
  );
}

const mapStateToProps = (state:any) => ({
  word:state.app.word
})

export default connect(mapStateToProps, actions)(Failure);