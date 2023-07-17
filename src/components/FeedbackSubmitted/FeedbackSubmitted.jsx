import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header.jsx";
import "./FeedbackSubmitted.css";

function FeedbackSubmitted() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleGoToNewFeedback = () => {
        // Clear feedback state and navigate to the app home page
        dispatch({ type: "CLEAR_FEEDBACK"});
        history.push("/");
    };

    return (
        <>
        <Header />
        <section className="feedback-submitted-container">
            <h2>Thank you for submitting your feedback.</h2>
            <h4>You are appreciated and so is your insight.</h4>
        </section>
        <section className="new-feedback-container">
            <div>
                <button className="new-feedback-button" onClick={handleGoToNewFeedback}>Leave New Feedback</button>
            </div>
        </section>
        </>
    )



} // end FeedbackSubmitted component

export default FeedbackSubmitted;