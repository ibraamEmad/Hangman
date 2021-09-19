import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'
import { CommonActions } from '@react-navigation/native';
import { Alert } from 'react-native'

import { WORD, SET_NUMBER_OF_LETTERS } from './types';
import data from './data'
let url="https://sandbox.musement.com/api/v3/"


export const getWord = (number) => {
    return async(dispatch) => {
    let max=data.dictionary[number].length
    let random = Math.floor(Math.random()  * max) ;
    dispatch({type: WORD, word:data.dictionary[number][random]})    
  }
  }


  export const updateNumber = (number) => {
    return async(dispatch) => {
 
    dispatch({type: SET_NUMBER_OF_LETTERS, numberOfLetters:number})    
  }
  }
