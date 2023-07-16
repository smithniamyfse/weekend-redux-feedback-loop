import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// Shorthand import, {} in import is called destructuring
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

// importing Components
import Header from "../Header/Header.jsx";
import FeelingForm from "../FeelingForm/FeelingForm";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";
import SupportForm from "../SupportForm/SupportForm";
import CommentsForm from '../CommentsForm/CommentsForm';
// import ReviewFormFeedback from '../ReviewFormFeedback/ReviewFormFeedback';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route path="/feeling">
          <FeelingForm />
        </Route>

        <Route path="/understanding">
          <UnderstandingForm />
        </Route>

        <Route path="/support">
          <SupportForm />
        </Route>

        <Route path="/comments">
          <CommentsForm />
        </Route>
        {/*
      <Route path="/review-feedback">
        <ReviewFormFeedback />
      </Route>
       */}
      </div>
    </Router>
  );
}

export default App;
