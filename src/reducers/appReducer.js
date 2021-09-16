import { WORDS } from '../actions/types';


const initialState = {
    words:[]
  }
  
  export default (state = initialState , action) => {
    // console.log(action.type)
    switch(action.type){
      case WORDS :  return {...state,words:action.words};
    
      default: return state;
    }
  }