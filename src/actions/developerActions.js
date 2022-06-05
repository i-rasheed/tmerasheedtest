import Axios from "axios";

import {
  DEVELOPER_LIST_REQUEST,
  DEVELOPER_LIST_SUCCESS,
  DEVELOPER_LIST_FAIL,
} from "../constants/developerConstants";

export const listDevelopers = () => async (dispatch) => {
  dispatch({
    type: DEVELOPER_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      "https://api.terawork.com/service-categories/sellers-services/computer-software-development"
    );
    dispatch({
      type: DEVELOPER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: DEVELOPER_LIST_FAIL, payload: error.message });
  }
};
