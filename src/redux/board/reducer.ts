import { Reducer } from "redux";
import { Winner, WinnerTypes } from "./types";

const INITIAL_STATE: Winner = {
  winner: undefined,
};

const boardReducer: Reducer<Winner> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WinnerTypes.SET_WINNER_X:
      return {
        ...state,
        winner: "X",
      };
    case WinnerTypes.SET_WINNER_O:
      return {
        ...state,
        winner: "O",
      };

    case WinnerTypes.RESET_WINNER:
      return {
        ...state,
        winner: undefined,
      };

    default:
      return state;
  }
};

export default boardReducer;
