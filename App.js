import React from "react";
import AppContainer from "./components/AppContainer";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import peopleReducer from "./redux/reducers/peopleReducer";

//if we have several reducers this is how we create a store for it. Note now you will
//use dot notation in component to access them e.g props.randomPeople.peopleList.isFetching to access
//isFetching property inside people reducer and props.randomPeople.anotherReducerKey.people to access
//people inside the anotherReducerKey that points to given reducer that has states you interested in

// const rootReducer = combineReducers({
//   peopleList: peopleReducer
// });
// const store = createStore(rootReducer, applyMiddleware(thunk));

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(peopleReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
