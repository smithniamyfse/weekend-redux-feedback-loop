import React from "react";
// Shorthand import, {} in import is called destructuring
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

// importing Components
import Header from "../Header/Header.jsx";
import FeelingForm from "../FeelingForm/FeelingForm";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";
import SupportForm from "../SupportForm/SupportForm";
import CommentsForm from "../CommentsForm/CommentsForm";
import ReviewFormFeedback from "../ReviewFormFeedback/ReviewFormFeedback";
import FeedbackSubmitted from "../FeedbackSubmitted/FeedbackSubmitted";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
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

        <Route path="/review-feedback">
          <ReviewFormFeedback />
        </Route>

        <Route path="/feedback-submitted">
          <FeedbackSubmitted />
        </Route>
      </div>
    </Router>
  );
}

export default App;
