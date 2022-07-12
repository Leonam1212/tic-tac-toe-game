export enum CharactersTypes {
  LOAD_REQUEST = "@characters/LOAD_REQUEST",
  LOAD_SUCCESS = "@characters/LOAD_SUCCCES",
  LOAD_FAILURE_X = "@characters/LOAD_FAILURE_X",
  LOAD_FAILURE_O = "@characters/LOAD_FAILURE_O",
  LOAD_FAILURE = "@characters/LOAD_FAILURE",

  LOAD_THUMB = "@characters/LOAD_THUMB",

  SET_THUMB_X = "@characters/SET_THUMB_X",
  SET_THUMB_O = "@characters/SET_THUMB_O",

  PLAY_GAME = "@characters/PLAY_GAME",
}

export interface Character {
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

export interface CharacterState {
  data: Character[];

  thumbX: string;
  thumbO: string;

  play: boolean;
  loading: boolean;
  errorX: boolean;
  errorO: boolean;
}
