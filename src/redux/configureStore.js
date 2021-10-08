import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import web3Reducer from "../redux/reducer/web3reducer";
import tokenStatsReducer from "./reducer/tokenStatsReducer";

import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({
  web3: web3Reducer,
  tokenStatsReducer
});

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default Store;
