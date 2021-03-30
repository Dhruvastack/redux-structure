import { types } from './constants';

const initialState = {
    loading: false,
    users:[],
    error: {},
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_USERS:
            debugger;
            return {
                ...state,
                loading: true
            }
        case types.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: {},
              
            }
        case types.GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.error,
            }
        default:

            return state;
    }
}