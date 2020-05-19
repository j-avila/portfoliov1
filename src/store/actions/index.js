import Axios from "axios";
import * as type from "../types";
import { worksUrl } from "../envConst";

const headConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const fetchWorks = () => {
  const url = worksUrl;

  return async (dispatch) =>
    await Axios.get(url, headConfig)
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: type.FETCH_DATA,
          payload: data.payload,
        });
      })
      .catch((error) => console.log(error));
};
