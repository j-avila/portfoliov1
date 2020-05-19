import { combineReducers } from "redux";
import * as types from "../types";

const defaultReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_DATA:
      return {
        data: action.payload,
      };

    default:
      return state;
      break;
  }
};

export default combineReducers({
  defaultReducer,
});
