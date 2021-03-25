import { types } from "./constants";

export const createLogin = (data) => {
  return {
    type: types.CREATE_LOGIN,
    payload: data,
  };
};

export const createLoginSuccess = (users) => {
  return {
    type: types.CREATE_LOGIN_SUCCESS,
    payload: login,
  };
};

export const createLoginFailure = (error) => {
  return {
    type: types.CREATE_LOGIN_FAILURE,
    payload: {},
    error: error,
  };
};
