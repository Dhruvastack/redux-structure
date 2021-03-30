import { types } from "./constants";

export const createLogin = (data) => {
  debugger;
  console.log(data);
  return {
    type: types.CREATE_LOGIN,
    payload: data,
  };
};

export const createLoginSuccess = (payload) => {
  debugger
  return {
    type: types.CREATE_LOGIN_SUCCESS,
    payload,
  };
};

export const createLoginFailure = (error) => {
  debugger
  return {
    type: types.CREATE_LOGIN_FAILURE,
    payload: {},
    error: error,
  };
};
