import { ADD2 } from "../Actions/ActionTypes"

const initialState = {
    counter: 100
  }
  
  export default function counter2(state = initialState, action) {
  
    switch(action.type) {
      case ADD2:
        return {
          counter: state.counter + action.payload
        }
      default:
        return state
    }
  
    
}