//to stop from everytime iterating state using immer
import produce from "immer";
import { types } from "./constants";

const initialState = {
  loading: false,
  users: [],
  error: {},
};

const usersReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.GET_USERS:
        draft.loading = true;
        break;

      case types.GET_USERS_SUCCESS:
        draft.loading = false;
        draft.users = action.payload;
        draft.error = {};
        break;

      case types.GET_USERS_FAILURE:
        draft.loading = false;
        draft.users = [];
        draft.error = action.error;
        break;
      default:
        return state;
    }
  });
};
export default usersReducer;
