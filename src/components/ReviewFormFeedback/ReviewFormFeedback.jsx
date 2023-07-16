import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./ReviewFormFeedback.css";

function ReviewFormFeedback() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userFeedbackList = useSelector((store) => store.userFeedbackList);
  const feelingReducer = useSelector((store) => store.feelingReducer);
  const understandingReducer = useSelector((store) => store.understandingReducer);
  const supportReducer = useSelector((store) => store.supportReducer);
  const commentsReducer = useSelector((store) => store.commentsReducer);

  const handleSubmitFeedback = (event) => {
    event.preventDefault();
    const feedbackEntry = {
      feeling: feelingReducer,
      understanding: understandingReducer,
      support: supportReducer,
      comments: commentsReducer,
    };
  
    axios
      .post("/feedback", feedbackEntry)
      .then((response) => {
        dispatch({ type: "COLLECT_USER_FEEDBACK", payload: feedbackEntry });
        goToFeedbackSubmitted();
      })
      .catch((error) => {
        console.log("Error POSTing user feedback: ", error);
      });
  };
  
  const goToFeedbackSubmitted = () => {
    history.push("/feedback-submitted");
  };

  return (
    <>
      <section className="review-feedback-container">
        <h2>Review Your Feedback</h2>
        <table className="review-feedback-table">
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {userFeedbackList.map((feedbackEntry, index) => (
              <tr key={index}>
                <td>{feedbackEntry.feeling}</td>
                <td>{feedbackEntry.understanding}</td>
                <td>{feedbackEntry.support}</td>
                <td>{feedbackEntry.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <footer className="review-feedback-submit-container">
          <button
            className="submit-feedback-button"
            type="submit"
            onClick={handleSubmitFeedback}
          >
            Submit Feedback
          </button>
        </footer>
      </section>
    </>
  );
}

export default ReviewFormFeedback;
