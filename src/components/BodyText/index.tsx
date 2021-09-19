import React, {  } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions';
import { Text } from 'react-native'
import { styles } from './styles';



function BodyText(props:any) {

  return (
   <Text style={styles.txt}>{props.text}</Text>
  );
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, actions)(BodyText);