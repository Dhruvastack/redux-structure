import {takeEvery,call,put} from 'redux-saga/effects'
import {types} from './constants';
import axios from 'axios';
import {getUsersSuccess} from './actions';



function *fetchUsers(){
    try{
        const url=`https://reqres.in/api/users`
        const response = yield call (()=>axios.get(url))
        console.log(response);
        yield put(getUsersSuccess(response.data))
    }
    catch(e){
        console.log(e);
    }
}
export function* usersSaga(){
    yield takeEvery(types.GET_USERS, fetchUsers)
}