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
import "./SupportForm.css";

// http://localhost:3000/#/support

function SupportForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [support, setSupport] = useState("");

  const goToComments = () => {
    history.push("/comments");
  };

  const collectUserSupport = (event) => {
    event.preventDefault();
    console.log("Collecting user support rating: ", support);

    dispatch({
      type: "SET_SUPPORT",
      payload: support,
    });

    goToComments();
  };

  return (
    <>
      <Header />
      <section className="support-scale-container">
        <h2>How well are you being supported?</h2>
        <div className="support-scale-chart">
          <div>
            <span className="rating-text">1</span>
            <br />I feel unsupported and haven't received the guidance I needed.
          </div>
          <div>
            <span className="rating-text">2</span>
            <br />I feel somewhat supported, but I could benefit from more
            guidance.
          </div>
          <div>
            <span className="rating-text">3</span>
            <br />I feel moderately supported and have received satisfactory
            guidance.
          </div>
          <div>
            <span className="rating-text">4</span>
            <br />I feel well supported and have received helpful guidance.
          </div>
          <div>
            <span className="rating-text">5</span>
            <br />I feel fully supported and have received exceptional guidance.
          </div>
        </div>
      </section>
      <section className="support-form-container">
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
              On a scale of 1-5, rate how satisfied you are with the support you
              have received:
            </Typography>
            <form onSubmit={collectUserSupport} className="support-rating-form">
              <div className="support-rating-input-container">
                <input
                  required
                  type="number"
                  min="1"
                  max="5"
                  id="rate-support"
                  name="rate-support"
                  value={support}
                  onChange={(event) => setSupport(Number(event.target.value))}
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
                  className="submit-support-button"
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
} // end SupportForm component

export default SupportForm;
