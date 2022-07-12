import { combineReducers } from "redux";
import boardReducer from "./board/reducer";

import reducer from "./characters/reducers";
import pointsReducer from "./scoreboard/reducers";

export default combineReducers({
  reducer,
  pointsReducer,
  boardReducer,
});
