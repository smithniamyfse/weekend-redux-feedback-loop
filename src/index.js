import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

// importing REDUX
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

// adding REDUCER to make state (data) available to multiple components
const userFeedback = (state = [], action) => {
  // Collect user feedback to the userFeedback array
  if (action.type === "COLLECT_USER_FEEDBACK") {
    console.log("User feedback added: ", action.payload);
    return action.payload;
  }
  return state;
};

// store manages the state of the application
//  It enables handling of actions, updating the state, and notifies various parts/components to reflect the changes.
const store = createStore(
  combineReducers({
    userFeedback,
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
