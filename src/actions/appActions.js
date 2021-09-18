import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'
import { CommonActions } from '@react-navigation/native';
import { Alert } from 'react-native'

import { WORD } from './types';
import data from './data'
let url="https://sandbox.musement.com/api/v3/"


export const getWord = () => {
    return async(dispatch) => {
    let random = Math.floor(Math.random()  * 6) ;
    console.log(random)
    dispatch({type: WORD, word:data.dictionary[random]})    
  }
  }
