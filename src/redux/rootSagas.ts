import { all, takeLatest } from "redux-saga/effects";

import { CharactersTypes } from "./characters/types";
import { load } from "./characters/sagas";

export default function* rootSaga(): Generator<any> {
  return yield all([takeLatest(CharactersTypes.LOAD_REQUEST, load)]);
}
