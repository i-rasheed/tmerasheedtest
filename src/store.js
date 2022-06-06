import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { currencyListReducer } from "./reducers/currencyReducers";

import { developerListReducer } from "./reducers/developerReducers";

const initialState = {};
const reducer = combineReducers({
  developerList: developerListReducer,
  currencyList: currencyListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
