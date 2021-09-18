import React, { useState, useEffect } from 'react';
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

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
        <Icon name={'minuscircleo'} size={normalize(25)} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.number}>{number}</Text>
        <TouchableOpacity style={styles.button}>
        <Icon name={'pluscircleo'} size={normalize(25)} color={'black'} />
        </TouchableOpacity>

    </View>
  );
}

const mapStateToProps = (state:any) => ({
  number:state.app.numberOfLetters
})

export default connect(mapStateToProps, actions)(Selector);