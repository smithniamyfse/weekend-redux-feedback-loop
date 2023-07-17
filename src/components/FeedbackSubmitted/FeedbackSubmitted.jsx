import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header.jsx";
import "./FeedbackSubmitted.css";

function FeedbackSubmitted() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGoToNewFeedback = () => {
    // Clear feedback state and navigate to the app home page
    dispatch({ type: "CLEAR_FEEDBACK" });
    history.push("/");
  };

  return (
    <>
      <Header />
      <section className="feedback-submitted-container">
        <h2 className="submitted-h2">
          Thank you for submitting your feedback.
        </h2>
        <h4 className="submitted-h4">
          You are appreciated and so is your insight.
        </h4>
      </section>
      <section className="new-feedback-container">
        <Card sx={{ width: 700, padding: "3rem" }}>
          <div className="new-feedback-submit-container">
            <CardActions
              sx={{
                width: 700,
                justifyContent: "center",
                padding: 0,
                "&:last-child": {
                  paddingBottom: 0,
                },
              }}
            >
              <Button
                className="new-feedback-button"
                sx={{
                  fontSize: "22px",
                  fontFamily: "'Rubik Dirt', cursive;",
                  fontWeight: 200,
                  backgroundColor: "#D9857E",
                  color: "#000000",
                }}
                onClick={handleGoToNewFeedback}
              >
                + Leave New Feedback
              </Button>
            </CardActions>
          </div>
        </Card>
      </section>
    </>
  );
} // end FeedbackSubmitted component

export default FeedbackSubmitted;
