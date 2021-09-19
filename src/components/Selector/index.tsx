import React, { useState,  } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions';
import { View, Text, TouchableOpacity,} from 'react-native'
import { styles } from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { normalize } from '../../screens/normalize'

function Selector(props:any) {
    const [number, setNumber] = useState(5);

    if (props.number !== number){
        setNumber(props.number)
    };

    function updateNumber(number:number){
      props.updateNumber(number)
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>updateNumber(number-1)} disabled={number==5?true:false} activeOpacity={0.8}>
        <Icon name={'minuscircleo'} size={normalize(25)} color={number==5?'silver':'black'} />
        </TouchableOpacity>
        <Text style={styles.number}>{number}</Text>
        <TouchableOpacity style={styles.button} onPress={()=>updateNumber(number+1)} disabled={number==9?true:false} activeOpacity={0.8}>
        <Icon name={'pluscircleo'} size={normalize(25)} color={number==9?'silver':'black'} />
        </TouchableOpacity>

    </View>
  );
}

const mapStateToProps = (state:any) => ({
  number:state.app.numberOfLetters
})

export default connect(mapStateToProps, actions)(Selector);