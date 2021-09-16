import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'
import { CommonActions } from '@react-navigation/native';
import { Alert } from 'react-native'

import { VENUES, EVENTS, CITIES } from './types';
let url="https://sandbox.musement.com/api/v3/"


export const ListingWords = () => {
    return async(dispatch) => {

    await axios.get(url+'venues',{}).then(async function (response) {
      dispatch({type: VENUES, venues:response.data})    
 
    }).catch(function (error) {
    console.log(error.response)
    console.log(error)
  })
  }
  }
