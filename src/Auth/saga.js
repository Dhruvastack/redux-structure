import {takeEvery,call,put} from 'redux-saga/effects'
import {types} from './constants';
import axios from 'axios';
import {getLoginSuccess} from './actions';


function* addLogin(action) {
    try {
      const url =`https://reqres.in/api/login`
      const response = yield axios.post((url)).then(response => response.data);
      yield put({ type: types.CREATE_LOGIN_SUCCESS, data: login });
    } catch (error) {
      yield put({ type: types.CREATE_LOGIN_FAILURE, error });
    }
  }

function *addLogin(){
    try{
        const url=`https://reqres.in/api/users`
        const response = yield call (()=>axios.post(url))
        console.log(response);
        yield put(getLoginSuccess(response.data))
    }
    catch(e){
        console.log(e);
    }
}
export function* authSaga(){
    yield takeEvery(types.CREATE_LOGIN, addLogin)
}