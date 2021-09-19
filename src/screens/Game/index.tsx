import React, { useState, useEffect, useRef } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions';
import { View, Text, ScrollView, Image, Animated } from 'react-native'
import { styles } from './styles';

import Header from '@components/Header'
import LettersContainer from '@components/LettersContainer';


function Game(props:any) {
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [allowedAttempts, setAllowedAttempts] = useState(6);
    const [word, setWord] = useState('');
    const [solution, setSolution] = useState('');
    const [number, setNumber] = useState(5);
    const [showRed, setShowRed] = useState(false);
    const animation = useRef(new Animated.Value(1)).current;


    if (props.number !== number){
        setNumber(props.number)
    };
    if (props.word !== word){
      Load(props.word)
      setWord(props.word)
    };

  useEffect(() => {
    props.getWord(props.number.toString())
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
          startAnimation()

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


  function startAnimation(){
    setShowRed(true)
    Animated.sequence([
      Animated.timing(animation, {
          toValue: 1.2,                  
          duration: 500,  
          useNativeDriver :true
      }),
      Animated.timing(animation, {
          toValue: 1,                  
          duration: 500,  
          useNativeDriver :true
      })
  ]).start(()=>{
    setShowRed(false)
  })
  }



  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}} showsVerticalScrollIndicator={false}>

      <Header title={'Hangman'} nav={props.navigation}/>

       <View style={styles.imageContainer} >
         {showRed?
       <Animated.Image source={{uri: 'redhangman'}} resizeMode="contain" style={[styles.img,{transform: [{ scale: animation }]}]}/>
       :
      <Image source={{uri: 'hangman'}} resizeMode="contain" style={styles.img}/>
         }
      </View>

        <View style={styles.solutionContainer}>
        <Text style={styles.solution}>{solution}</Text>
        </View>
        
        <LettersContainer selectedLetters={selectedLetters} selectLetter={selectLetter}/>
       
    </ScrollView>
  );
}

const mapStateToProps = (state:any) => ({
  word:state.app.word,
  number:state.app.numberOfLetters

})

export default connect(mapStateToProps, actions)(Game);