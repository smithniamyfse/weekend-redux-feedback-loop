import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

// Importing Redux dependencies
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

// adding REDUCER to make state (data) available to multiple components
const userFeedbackList = (state = [], action) => {
  if (action.type === "COLLECT_USER_FEEDBACK") {
    // Combine user feedback to the userFeedback array
    const { feeling, understanding, support, comments } = action.payload;
    console.log("User feedback added: ", action.payload);
    const feedbackEntry = {
      feeling,
      understanding,
      support,
      comments,
    };
    return [...state, feedbackEntry];
  } else if (action.type === "CLEAR_FEEDBACK") {
    return [];
  }
  return state;
};

// Reducer for feeling rating
const feelingReducer = (state = 0, action) => {
  if (action.type === "SET_FEELING") {
    return action.payload;
  } else if (action.type === "CLEAR_FEEDBACK") {
    return 0;
  }
  return state;
};

// Reducer for understanding rating
const understandingReducer = (state = 0, action) => {
  if (action.type === "SET_UNDERSTANDING") {
    return action.payload;
  } else if (action.type === "CLEAR_FEEDBACK") {
    return 0;
  }
  return state;
};

// Reducer for support rating
const supportReducer = (state = 0, action) => {
  if (action.type === "SET_SUPPORT") {
    return action.payload;
  } else if (action.type === "CLEAR_FEEDBACK") {
    return 0;
  }
  return state;
};

// Reducer for comments
const commentsReducer = (state = "", action) => {
  if (action.type === "SET_COMMENTS") {
    return action.payload;
  } else if (action.type === "CLEAR_FEEDBACK") {
    return "";
  }
  return state;
};

// store manages the state of the application
//  It enables handling of actions, updating the state, and notifies various parts/components to reflect the changes.
const store = createStore(
  combineReducers({
    userFeedbackList,
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentsReducer,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
