import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Header from "../Header/Header.jsx";
import "./UnderstandingForm.css";

// http://localhost:3000/#/understanding

function UnderstandingForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [understanding, setUnderstanding] = useState("");

  const goToSupport = () => {
    history.push("/support");
  };

  const collectUserUnderstanding = (event) => {
    event.preventDefault();
    console.log("Collecting user understanding rating: ", understanding);

    dispatch({
      type: "SET_UNDERSTANDING",
      payload: understanding,
    });

    goToSupport();
  };

  return (
    <>
      <Header />
      <section className="understanding-scale-container">
        <h2>How well are you understanding the content?</h2>
        <div className="understanding-scale-chart">
          <div>
            <span className="rating-text">1</span>
            <br />I cannot understand any of the content.
          </div>
          <div>
            <span className="rating-text">2</span>
            <br />I understand only a small portion of the content.
          </div>
          <div>
            <span className="rating-text">3</span>
            <br />I understand a moderate amount of the content.
          </div>
          <div>
            <span className="rating-text">4</span>
            <br />I understand most of the content and can explain it to others.
          </div>
          <div>
            <span className="rating-text">5</span>
            <br />
            The content is clear to me, and I can teach it to others.
          </div>
        </div>
      </section>
      <section className="understanding-form-container">
        <Card sx={{ maxWidth: 700, padding: "3rem" }}>
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
              On a scale of 1-5, rate how well you understand the content:
            </Typography>
            <form
              onSubmit={collectUserUnderstanding}
              className="understanding-rating-form"
            >
              <div className="understanding-rating-input-container">
                <input
                  required
                  type="number"
                  min="1"
                  max="5"
                  id="rate-understanding"
                  name="rate-understanding"
                  value={understanding}
                  onChange={(event) =>
                    setUnderstanding(Number(event.target.value))
                  }
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
                  className="submit-understanding-button"
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
} // end UnderstandingForm component

export default UnderstandingForm;
