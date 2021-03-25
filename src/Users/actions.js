import { types } from "./constants";

export const getUsers = (data) => {
  return {
    type: types.GET_USERS,
    payload: data,
  };
};

export const getUsersSuccess = (users) => {
  return {
    type: types.GET_USERS_SUCCESS,
    payload: users,
  };
};

export const getUsersFailure = (error) => {
  return {
    type: types.GET_USERS_FAILURE,
    payload: {},
    error: error,
  };
};
