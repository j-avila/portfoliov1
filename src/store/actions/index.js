import Axios from "axios";
import * as type from "../types";
import { apiUrl, statsUrl } from "../envConst";

const headConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const switchMode = (mode) => ({
  type: type.SET_MODE,
  mode: mode,
});

const loadingStatus = (status) => ({
  type: type.LOADING,
  load: status,
});

export const fetchWorks = () => {
  const url = `${apiUrl}trabajos?_embed`;

  return async (dispatch) => {
    dispatch(loadingStatus(true));
    await Axios.get(url, headConfig)
      .then(({ data }) => {
        dispatch({
          type: type.FETCH_DATA,
          payload: data,
        });
        dispatch(loadingStatus(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loadingStatus(false));
      });
  };
};

export const fetchAbout = () => {
  const url = `${apiUrl}posts`;

  return async (dispatch) => {
    dispatch(loadingStatus(true));
    await Axios.get(url, headConfig)
      .then(({ data }) => {
        // console.log(data);
        dispatch({
          type: type.GET_ABOUT,
          payload: data,
        });
        dispatch(loadingStatus(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loadingStatus(false));
      });
  };
};

export const fetchStats = () => {
  const url = `${statsUrl}`;

  return async (dispatch) => {
    dispatch(loadingStatus(true));
    Axios.get(url, headConfig)
      .then((resp) => {
        dispatch({
          type: type.GET_STATS,
          stats: resp,
        });
        dispatch(loadingStatus(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loadingStatus(false));
      });
  };
};

export const getProject = (slug) => {
  const url = `${apiUrl}trabajos?slug=${slug}`;

  return async (dispatch) => {
    dispatch(loadingStatus(true));

    await Axios.get(url, headConfig)
      .then(({ data }) => {
        dispatch({
          type: type.GET_PROJECT,
          project: data[0],
        });
        dispatch(loadingStatus(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
