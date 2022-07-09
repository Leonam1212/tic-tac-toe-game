import * as types from "../../types"
interface CharactersState {

}

const initialState = {
  result: [],
  error: ""
}

export const charactersReducer = (state = initialState, action: {
  type: string,
  payload: []
}) => {
  switch(action.type) {
    case types.GET_CHARACTERS_REQUEST:
      return {
        ...state,
        result: action.payload,
        error: ""
      }
    case types.GET_CHARACTERS_SUCCESS: 
      return {
        ...state,
        result: action.payload,
        error: ""
      }
    case types.GET_CHARACTERS_FAILED: 
      return {
        ...state,
        error: action.payload
      }
    
    default: return state
  }
}