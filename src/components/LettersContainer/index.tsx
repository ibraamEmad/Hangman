import React, {  } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions';
import { View, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles';



function LettersContainer(props:any) {

  return (
    <View style={styles.container}>
    {Array.from(Array(26).keys()).map((item)=>
    props.selectedLetters.includes((item+10).toString(36))?
    <View style={styles.selectedCard} key={item+"1"}>
     <Text style={styles.letter}>{(item+10).toString(36)}</Text>
     </View>
    :
    <TouchableOpacity style={styles.card} onPress={()=>props.selectLetter((item+10).toString(36))} activeOpacity={1.0} key={item+"2"}>
        <Text style={styles.letter}>{(item+10).toString(36)}</Text>
     </TouchableOpacity>
    )
    }
    </View>
  );
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, actions)(LettersContainer);