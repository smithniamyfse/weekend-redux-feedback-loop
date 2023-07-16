import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./CommentsForm.css";

// http://localhost:3000/#/comments

function CommentsForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const userFeeling = useSelector((store) => store.feeling);
  // const userUnderstanding = useSelector((store) => store.understanding);
  const [comments, setComments] = useState('');

  const clearComments = () => {
    setComments('');
  };

  const goToReviewFeedback = () => {
    history.push("/review-feedback")
  };

  const collectUserComments = (event) => {
    event.preventDefault();
    console.log("Collecting user comments: ", comments);

    dispatch({
      type: "SET_COMMENTS",
      payload: comments,
    });

    clearComments();
    goToReviewFeedback();
    };

    return (
      <>
      <section className="comments-container">
        <h2>Your voice matters.</h2>
        <h4>Whether it's the ongoing disappearance of granola bars or the fact that flowcharts on the whiteboard help you learn, tell us what impacts you.</h4>
      </section>
      <section className="comments-form-container">
        <form onSubmit={collectUserComments} className="comments-form">
        {/* <label htmlFor="comments-prompt">
        </label> */}
        <br />
        <input 
        type="text"
        id="comments-input"
        name="comments-input"
        value={comments}
        onChange={(event) => setComments(event.target.value)}
        />
        <footer className="comments-form-footer-next">
          <button className="submit-comments-button" type="submit">
            Next
          </button>
        </footer>
        </form>
      </section>
      </>
    )
  
} // end CommentsForm component

export default CommentsForm;
