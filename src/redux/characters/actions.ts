import { action } from "typesafe-actions";
import { CharactersTypes, Character, CharacterState } from "./types";

export const loadRequest = () => action(CharactersTypes.LOAD_REQUEST);

export const loadSuccess = (data: Character[]) =>
  action(CharactersTypes.LOAD_SUCCESS, { data });

export const loadFailureX = () => action(CharactersTypes.LOAD_FAILURE_X);

export const loadFailureO = () => action(CharactersTypes.LOAD_FAILURE_O);

export const loadFailure = () => action(CharactersTypes.LOAD_FAILURE);

export const loadThumb = () => action(CharactersTypes.LOAD_THUMB);

export const setThumbX = (data: string) =>
  action(CharactersTypes.SET_THUMB_X, { data });

export const setThumbO = (data: string) =>
  action(CharactersTypes.SET_THUMB_O, { data });

export const playGame = () => action(CharactersTypes.PLAY_GAME);
