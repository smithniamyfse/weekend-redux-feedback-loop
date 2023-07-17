import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Header from "../Header/Header.jsx";
import "./CommentsForm.css";

// http://localhost:3000/#/comments

function CommentsForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const userFeeling = useSelector((store) => store.feeling);
  // const userUnderstanding = useSelector((store) => store.understanding);
  const [comments, setComments] = useState("");

  const goToReviewFeedback = () => {
    history.push("/review-feedback");
  };

  const collectUserComments = (event) => {
    event.preventDefault();
    console.log("Collecting user comments: ", comments);

    dispatch({
      type: "SET_COMMENTS",
      payload: comments,
    });
    goToReviewFeedback();
  };

  return (
    <>
      <Header />
      <section className="comments-container">
        <h2 className="comment-h2">Your voice matters.</h2>
        <h4 className="comment-h4">
          Whether it's the ongoing disappearance of granola bars or the fact
          that flowcharts on the whiteboard help you learn, tell us what impacts
          you.
        </h4>
      </section>
      <section className="comments-form-container">
        <Card sx={{ width: 700, padding: "3rem" }}>
          <CardContent
            sx={{
              paddingLeft: 0,
              paddingRight: 0,
              "&:last-child": {
                paddingBottom: 0, // Set the desired padding-bottom value here
              },
            }}
          >
            <Typography gutterBottom variant="h5" component="div" padding="1em">
              Write your comments below:
            </Typography>
            <form onSubmit={collectUserComments} className="comments-form">
              <div className="comments-text-input-container">
                <input
                  type="text"
                  id="comments-input"
                  name="comments-input"
                  value={comments}
                  onChange={(event) => setComments(event.target.value)}
                />
              </div>
              <CardActions
                sx={{
                  justifyContent: "flex-end",
                  padding: 0,
                  "&:last-child": {
                    paddingBottom: 0,
                  },
                }}
              >
                <Button
                  className="submit-comments-button"
                  type="submit"
                  sx={{
                    fontSize: "22px",
                    fontFamily: "'Rubik Dirt', cursive;",
                    fontWeight: 200,
                    backgroundColor: "#D9857E",
                    color: "#000000",
                  }}
                >
                  Next ➡
                </Button>
              </CardActions>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
} // end CommentsForm component

export default CommentsForm;
