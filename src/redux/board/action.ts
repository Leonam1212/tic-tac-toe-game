import { action } from "typesafe-actions";
import { WinnerTypes } from "./types";

export const addWinnerX = () => action(WinnerTypes.SET_WINNER_X);
export const addWinnerO = () => action(WinnerTypes.SET_WINNER_O);
export const resetWinner = () => action(WinnerTypes.RESET_WINNER);
