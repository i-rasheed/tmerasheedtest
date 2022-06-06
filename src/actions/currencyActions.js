import Axios from "axios";

import {
  CURRENCY_LIST_REQUEST,
  CURRENCY_LIST_SUCCESS,
  CURRENCY_LIST_FAIL,
} from "../constants/currencyConstants";

export const listCurrency = () => async (dispatch) => {
  dispatch({
    type: CURRENCY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("https://api.terawork.com/resources");
    dispatch({
      type: CURRENCY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: CURRENCY_LIST_FAIL, payload: error.message });
  }
};
