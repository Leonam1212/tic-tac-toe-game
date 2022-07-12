export enum WinnerTypes {
  SET_WINNER_X = "@board/SET_WINNER_X",
  SET_WINNER_O = "@board/SET_WINNER_O",
  RESET_WINNER = "@board/RESET_WINNER",
}

export interface Winner {
  winner: string | undefined;
}
