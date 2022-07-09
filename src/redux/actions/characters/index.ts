import * as types from "../../types"

interface GetCharacters {

} 

export function getCharactersRequest(): {
  type: string
} {
    return {
      type: types.GET_CHARACTERS_REQUEST,
    }
}

export function getCharactersSuccess(characters: []): {
  type: string
  payload: []
} {
    return {
      type: types.GET_CHARACTERS_SUCCESS,
      payload: characters 
    }
}

export function getCharactersFailed(error: string): {
  type: string
  payload: string
} {
    return {
      type: types.GET_CHARACTERS_FAILED,
      payload: error 
    }
}