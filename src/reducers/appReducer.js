import { WORD, SET_NUMBER_OF_LETTERS } from '../actions/types';


const initialState = {
    word:'',
    numberOfLetters:5,
  }
  
  export default (state = initialState , action) => {
    switch(action.type){
      case WORD :  return {...state,word:action.word};
      case SET_NUMBER_OF_LETTERS :  return {...state,numberOfLetters:action.numberOfLetters};
    
      default: return state;
    }
  }