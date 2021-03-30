import { takeEvery, call, put } from "redux-saga/effects";
import { types } from "./constants";
import axios from "axios";
import { createLoginSuccess, createLoginFailure } from "./actions";

function* addLogin({ payload }) {
  try {
    const response = yield call(
      axios.post,
      `https://reqres.in/api/login`,
      payload
    );

    console.log("response>>>", response);
    yield put(createLoginSuccess({ data: response.data }));
  } catch (error) {
    yield put(createLoginFailure(error));
  }
}

export function* authSaga() {
  yield takeEvery(types.CREATE_LOGIN, addLogin);
}
