import { all } from "redux-saga/effects"
import characters from "./characters"

export default function* rootSaga(): Generator<any> {
  return yield all([characters])
}