import React, {  } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions';
import { View } from 'react-native'
import { styles } from './styles';
import Header from '@components/Header'
import BodyText from '@components/BodyText'
import BenImage from '@components/BenImage'
import Button from '@components/Button'

function Success(props:any) {
  

  return (
    <View style={styles.container}>
      
        <Header title={'Congratulations!'} nav={props.navigation}/>

        <BenImage name= 'happyben'/>

        <BodyText text="Thanks to you, Ben have been released!"/>

        <Button nav={props.navigation} text="Play Again"/>
      
    </View>
  );
}

const mapStateToProps = (state:any) => ({
  word:state.app.word
})

export default connect(mapStateToProps, actions)(Success);