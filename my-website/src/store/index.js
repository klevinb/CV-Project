import { createStore, compose, applyMiddleware } from "redux";
import mainReducer from "../reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: {},
  admin: false,
};

export default function configureStore() {
  return createStore(
    mainReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
