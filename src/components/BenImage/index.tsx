import React, {  } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions';
import { Image } from 'react-native'
import { styles } from './styles';



function BenImage(props:any) {

  return (
    <Image source={{uri: props.name}} resizeMode="contain" style={styles.img}/>
    );
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, actions)(BenImage);