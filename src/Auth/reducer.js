import { types } from "./constants";

const initialState = {
  loading: false,
  error: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_LOGIN:
      debugger;
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_LOGIN_SUCCESS:
      debugger;
      return {
        ...state,
        loading: false,
        login: action.payload,
        error: {},
      };
    case types.CREATE_LOGIN_FAILURE:
      debugger;
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
