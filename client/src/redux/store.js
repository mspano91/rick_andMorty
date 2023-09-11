// import { createStore } from "redux";
// import reducer from "./reducer";

// const store = createStore(reducer);

// export default store;

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
