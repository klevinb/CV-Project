import { createStore, compose, applyMiddleware } from "redux";
import mainReducer from "../reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialStore = {
  cityInfo: null,
  selectedVideo: null,
  selectedCity: null,
};

export default function configureStore() {
  return createStore(
    mainReducer,
    initialStore,
    composeEnhancers(applyMiddleware(thunk))
  );
}
