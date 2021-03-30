import { take, call, all } from "redux-saga/effects";
import { usersSaga } from "../Users/saga";
import { authSaga } from "../Auth/saga";
export default function* rootSagas() {
  yield all([usersSaga(),authSaga()]);
}
