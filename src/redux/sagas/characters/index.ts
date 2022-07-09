import { api } from "../../../services/api";
import { all, call, put, takeLatest } from "redux-saga/effects"
import { getCharactersFailed, getCharactersSuccess } from "../../actions";
import * as types from "../../types"

const marvelCharacters = async () => {
  const getCharacters = await api.get('')
  console.log(getCharacters.data.data.results)
  return getCharacters.data.data.results
}

function* charactersSaga(action: any) {
  try {
    yield call(marvelCharacters)
  }
  catch (err) {
    yield put(getCharactersFailed("Failed to capture characters"))
  }
}

export default all([takeLatest(types.GET_CHARACTERS_REQUEST, charactersSaga)])