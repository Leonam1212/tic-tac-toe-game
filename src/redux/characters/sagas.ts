import { AxiosResponse } from "axios";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";

import { loadFailure, loadSuccess } from "./actions";
import { CharactersTypes } from "./types";

export function* load() {
  try {
    const response: AxiosResponse = yield call(api.get, "");
    yield put(loadSuccess(response.data.data.results));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default all([takeLatest(CharactersTypes.LOAD_REQUEST, load)]);
