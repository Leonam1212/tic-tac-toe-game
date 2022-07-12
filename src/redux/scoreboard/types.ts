export enum PointsTypes {
  LOAAD_POINTS = "@scoreboard/LOAAD_POINTS",
  ADD_POINT_X = "@scoreboard/ADD_POINT_X",
  ADD_POINT_O = "@scoreboard/ADD_POINT_O",
}

export interface Points {
  step: number;
  pointsX: number;
  pointsO: number;
}

export interface PointsState {
  step: number;
  pointsX: number;
  pointsO: number;
}
