import React, { useState, useEffect } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { styles } from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { normalize } from '../normalize'


function Game(props:any) {
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [allowedAttempts, setAllowedAttempts] = useState(6);
    const [word, setWord] = useState('');
    const [solution, setSolution] = useState('');

    if (props.word !== word){
      Load(props.word)
      setWord(props.word)
    };

  useEffect(() => {
    props.getWord()
      return () => {
      }
  }, [])

  function Load(wo:string){
    setWord(wo)
    let sol=""
    for(let i=0;i<wo.length;i++){
        sol+="_ "
    }
    setSolution(sol)
  }

  function selectLetter(letter:string){
      if(allowedAttempts>0){
        let x= [...selectedLetters]
        x.push(letter)
        let newSolution=""
        for(let i=0;i<word.length;i++){
            if(x.includes(word[i])){
                newSolution+=word[i]+" "
            }else{
                newSolution+="_ "
            }
        }
        setSolution(newSolution)
        setSelectedLetters(x)
        if(!word.includes(letter)){
          let newFailures=allowedAttempts-1
          setAllowedAttempts(newFailures)
          if(newFailures==0){
            props.navigation.navigate("Failure")
          }

        }
        if(!newSolution.includes('_')){
          props.navigation.navigate("Success")
        }
      }
   
  }



  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
        <TouchableOpacity style={styles.back} onPress={()=>props.navigation.reset({
    index: 1,
    routes: [
      { name: 'Start' },
    ]})}>
           <Icon name={'arrowleft'} size={normalize(25)} color={'black'} />
        </TouchableOpacity>
        
        <Image source={{uri: 'hangman'}} resizeMode="contain" style={styles.img}/>

        <View style={styles.solutionContainer}>
        <Text style={styles.solution}>{solution}</Text>
        </View>

        <View style={styles.lettersContainer}>
       {Array.from(Array(26).keys()).map((item)=>
       selectedLetters.includes((item+10).toString(36))?
       <View style={styles.selectedCard} key={item+"1"}>
        <Text style={styles.letter}>{(item+10).toString(36)}</Text>
        </View>
       :
       <TouchableOpacity style={styles.card} onPress={()=>selectLetter((item+10).toString(36))} activeOpacity={1.0} key={item+"2"}>
           <Text style={styles.letter}>{(item+10).toString(36)}</Text>
        </TouchableOpacity>
       )
       }
       </View>
    </ScrollView>
  );
}

const mapStateToProps = (state:any) => ({
  word:state.app.word

})

export default connect(mapStateToProps, actions)(Game);