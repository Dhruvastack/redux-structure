import { combineReducers } from 'redux'
 import usersReducer from '../Users/reducer';
 import authReducer from '../Auth/reducer';

const rootReducers = combineReducers({ 
    usersReducer : usersReducer,
    authReducer: authReducer
})

export default rootReducers
