import { Reducer } from "redux";
import { Points, PointsState, PointsTypes } from "./types";

const INITIAL_STATE: PointsState = {
  step: 1,
  pointsX: 0,
  pointsO: 0,
};

const pointsReducer: Reducer<PointsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PointsTypes.ADD_POINT_X:
      return {
        ...state,
        pointsX: state.pointsX + state.step,
      };

    case PointsTypes.ADD_POINT_O:
      return {
        ...state,
        pointsO: state.pointsO + state.step,
      };

    default:
      return state;
  }
};
export default pointsReducer;
