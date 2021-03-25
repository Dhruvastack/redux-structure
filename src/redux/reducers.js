import { combineReducers } from 'redux'
 import usersReducer from '../Users/reducer';

const rootReducers = combineReducers({ 
    usersReducer : usersReducer,
})

export default rootReducers
