import { action } from "typesafe-actions";
import { PointsTypes, Points } from "./types";

export const addPointX = () => action(PointsTypes.ADD_POINT_X);
export const addPointO = () => action(PointsTypes.ADD_POINT_O);
