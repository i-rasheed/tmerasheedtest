import {
  CURRENCY_LIST_REQUEST,
  CURRENCY_LIST_SUCCESS,
  CURRENCY_LIST_FAIL,
} from "../constants/currencyConstants";

export const currencyListReducer = (
  state = { loading: true, currencies: [] },
  action
) => {
  switch (action.type) {
    case CURRENCY_LIST_REQUEST:
      return { ...state, loading: true };
    case CURRENCY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        currencies: action.payload,
      };
    case CURRENCY_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
