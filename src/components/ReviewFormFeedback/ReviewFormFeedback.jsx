import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header.jsx";
import "./ReviewFormFeedback.css";

function ReviewFormFeedback() {
  const dispatch = useDispatch();
  const history = useHistory();

  const feelingReducer = useSelector((store) => store.feelingReducer);
  const understandingReducer = useSelector(
    (store) => store.understandingReducer
  );
  const supportReducer = useSelector((store) => store.supportReducer);
  const commentsReducer = useSelector((store) => store.commentsReducer);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        handleClickOpen();
      })
      .catch((error) => {
        console.log("Error POSTing user feedback: ", error);
      });
  };

  const goToFeedbackSubmitted = () => {
    history.push("/feedback-submitted");
  };

  const handleDialogClose = () => {
    handleClose();
    goToFeedbackSubmitted();
  };

  return (
    <>
      <Header />
      <section className="review-feedback-container">
        <h2 className="table-h2">Review Your Feedback</h2>
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
            <tr>
              <td>{feelingReducer}</td>
              <td>{understandingReducer}</td>
              <td>{supportReducer}</td>
              <td>{commentsReducer}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="review-submit-container">
        <Card sx={{ width: 700, padding: "3rem" }}>
          <div className="review-feedback-submit-container">
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
                className="submit-feedback-button"
                type="submit"
                sx={{
                  fontSize: "22px",
                  fontFamily: "'Rubik Dirt', cursive;",
                  fontWeight: 200,
                  backgroundColor: "#D9857E",
                  color: "#000000",
                }}
                onClick={handleSubmitFeedback}
              >
                Submit Feedback ➡
              </Button>
            </CardActions>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                Confirm Feedback Submission
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  By clicking "Agree," you will submit your feedback. Once
                  submitted, it cannot be modified. Do you wish to proceed?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} className="dialog-action-button">
                  Cancel
                </Button>
                <Button
                  onClick={handleDialogClose}
                  autoFocus
                  className="dialog-action-button"
                >
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Card>
      </section>
    </>
  );
}

export default ReviewFormFeedback;
