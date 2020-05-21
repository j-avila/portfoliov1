import { combineReducers } from "redux";
import * as types from "../types";

const loading = (state = false, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        loading: action.load,
      };
    default:
      return state;
  }
};

const works = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

const currentProject = (state = [], action) => {
  switch (action.type) {
    case types.GET_PROJECT:
      return {
        project: action.project,
      };
    default:
      return state;
  }
};

const aboutInfo = (state = [], action) => {
  switch (action.type) {
    case types.GET_ABOUT:
      return {
        info: [...action.payload],
      };
    default:
      return state;
  }
};

export default combineReducers({
  loading,
  works,
  currentProject,
  aboutInfo,
});
