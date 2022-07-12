import { Reducer } from "redux";
import { CharacterState, CharactersTypes } from "./types";

const INITIAL_STATE: CharacterState = {
  data: [],

  thumbX: "",
  thumbO: "",

  play: false,
  errorX: false,
  errorO: false,
  loading: false,
};

const reducer: Reducer<CharacterState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharactersTypes.LOAD_REQUEST:
      return { ...state, errorX: false, errorO: false };

    case CharactersTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
        play: false,
      };

    case CharactersTypes.LOAD_FAILURE_X:
      return {
        ...state,
        loading: false,
        errorX: true,
      };

    case CharactersTypes.LOAD_FAILURE_O:
      return {
        ...state,
        loading: false,
        errorO: true,
      };

    case CharactersTypes.SET_THUMB_X:
      return {
        ...state,
        thumbX: action.payload.data,
        error: false,
        loading: false,
      };
    case CharactersTypes.SET_THUMB_O:
      return {
        ...state,
        thumbO: action.payload.data,
        error: false,
        loading: false,
      };

    case CharactersTypes.PLAY_GAME:
      return {
        ...state,
        play: true,
      };

    default:
      return state;
  }
};
export default reducer;
