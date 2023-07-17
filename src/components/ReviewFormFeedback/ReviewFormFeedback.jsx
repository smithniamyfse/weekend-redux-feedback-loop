import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header.jsx";
import "./ReviewFormFeedback.css";

function ReviewFormFeedback() {
  const dispatch = useDispatch();
  const history = useHistory();

  const feelingReducer = useSelector((store) => store.feelingReducer);
  const understandingReducer = useSelector((store) => store.understandingReducer);
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
            <tr>
              <td>{feelingReducer}</td>
              <td>{understandingReducer}</td>
              <td>{supportReducer}</td>
              <td>{commentsReducer}</td>
            </tr>
          </tbody>
        </table>
        <footer className="review-feedback-submit-container">
          <Button
            variant="outlined"
            className="submit-feedback-button"
            type="submit"
            onClick={handleSubmitFeedback}
          >
            Submit Feedback
          </Button>
          <Dialog
  open={open}
  onClose={handleClose}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
>
  <DialogTitle id="alert-dialog-title">Confirm Feedback Submission</DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">
      By clicking "Agree," you will submit your feedback. Once submitted, it cannot be modified. Do you wish to proceed? 
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleDialogClose} autoFocus>
      Agree
    </Button>
  </DialogActions>
</Dialog>
        </footer>
      </section>
    </>
  );
}

export default ReviewFormFeedback;


/*
import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header.jsx";
import "./ReviewFormFeedback.css";

function ReviewFormFeedback() {

  

  const dispatch = useDispatch();
  const history = useHistory();

  const feelingReducer = useSelector((store) => store.feelingReducer);
  const understandingReducer = useSelector((store) => store.understandingReducer);
  const supportReducer = useSelector((store) => store.supportReducer);
  const commentsReducer = useSelector((store) => store.commentsReducer);

  const [open, setOpen] = React.useState(false);

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
    <Header />
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
              <tr>
                <td>{feelingReducer}</td>
                <td>{understandingReducer}</td>
                <td>{supportReducer}</td>
                <td>{commentsReducer}</td>
              </tr>
          </tbody>
        </table>
        <footer className="review-feedback-submit-container">
          <Button 
            variant="outlined"
            className="submit-feedback-button"
            type="submit"
            onClick={handleSubmitFeedback}>
            Submit Feedback
          </Button>
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
        </footer>
      </section>
    </>
  );
}

export default ReviewFormFeedback;

*/

/*
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

*/