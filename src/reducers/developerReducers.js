import {
  DEVELOPER_LIST_REQUEST,
  DEVELOPER_LIST_SUCCESS,
  DEVELOPER_LIST_FAIL,
} from "../constants/developerConstants";

export const developerListReducer = (
  state = { loading: true, developers: [] },
  action
) => {
  switch (action.type) {
    case DEVELOPER_LIST_REQUEST:
      return { ...state, loading: true };
    case DEVELOPER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        developers: action.payload,
      };
    case DEVELOPER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
