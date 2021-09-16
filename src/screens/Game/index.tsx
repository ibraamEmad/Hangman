import React, { useState, useEffect } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions';
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'
import { styles } from './styles';
import FastImage from 'react-native-fast-image'


function Game(props) {
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [allowedAttempts, setAllowedAttempts] = useState(6);



    // if (props.events.length !== events.length){
    //   setEvents(props.events)
    // };

  useEffect(() => {

      return () => {
      }
  }, [])

  function selectLetter(letter){
      if(allowedAttempts>0){
        let x= [...selectedLetters]
        x.push(letter)
        setSelectedLetters(x)
        setAllowedAttempts(allowedAttempts-1)
      }
   
  }



  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
        
        {/* <Text style={styles.title}>Hangman</Text> */}
        <Image source={{uri: 'hangman'}} resizeMode="contain" style={styles.img}/>
        <View style={styles.lettersContainer}>
       {Array.from(Array(26).keys()).map((item,index)=>
       selectedLetters.includes(item)?
       <View style={styles.selectedCard} >
        <Text style={styles.letter}>{(item+10).toString(36)}</Text>
        </View>
       :
       <TouchableOpacity style={styles.card} onPress={()=>selectLetter(item)} activeOpacity={1.0}>
           <Text style={styles.letter}>{(item+10).toString(36)}</Text>
        </TouchableOpacity>
       )
       }
       </View>
    </ScrollView>
  );
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, actions)(Game);