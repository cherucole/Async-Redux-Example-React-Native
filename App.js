import React from "react";
import AppContainer from "./components/AppContainer";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import peopleReducer from "./redux/reducers/peopleReducer";

// const rootReducer = combineReducers({
//   poeple: peopleReducer
// });

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(peopleReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
