import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import { CharacterState } from "./characters/types";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSagas";

export interface ApplicationState {
  characters: CharacterState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<unknown, AnyAction> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
