import { types } from "./constants";

export const getUsers = (data) => {
  debugger;
  return {
    
    type: types.GET_USERS,
    payload: data,
  };
};

export const getUsersSuccess = (users) => {
  debugger;
  return {
    type: types.GET_USERS_SUCCESS,
    payload: users,
  };
};

export const getUsersFailure = (error) => {
  debugger;
  return {
    type: types.GET_USERS_FAILURE,
    payload: {},
    error: error,
  };
};
