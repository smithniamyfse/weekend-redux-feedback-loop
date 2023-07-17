import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header.jsx";
import "./FeelingForm.css";

function FeelingForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [feeling, setFeeling] = useState("");

  const goToUnderstanding = () => {
    history.push("/understanding");
  };

  const collectUserFeeling = (event) => {
    event.preventDefault();
    console.log("Collecting user feeling rating: ", feeling);

    dispatch({
      type: "SET_FEELING",
      payload: feeling,
    });

    goToUnderstanding();
  };

  return (
    <>
      <Header />
      <section className="feeling-scale-container">
        <h2>How are you feeling today?</h2>
        <div className="feelings-scale-chart">
          <div>
            1
            <br />
            😢
          </div>
          <div>
            2
            <br />
            😞
          </div>
          <div>
            3
            <br />
            😐
          </div>
          <div>
            4
            <br />
            🙂
          </div>
          <div>
            5
            <br />
            😁
          </div>
        </div>
      </section>
      <section className="feeling-form-container">
        <Card sx={{ maxWidth: 800, padding: "3rem" }}>
          <CardContent
            sx={{
              paddingLeft: 0,
              paddingRight: 0,
              // padding: 0,
              "&:last-child": {
                paddingBottom: 0, // Set the desired padding-bottom value here
              },
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              padding="1em"
            >
              On a scale of 1-5, rate how you feel right now:
            </Typography>
            <form onSubmit={collectUserFeeling} className="feeling-rating-form">
              <div className="rating-input-container">
                <input
                  required
                  type="number"
                  min="1"
                  max="5"
                  id="rate-feeling"
                  name="rate-feeling"
                  value={feeling}
                  onChange={(event) => setFeeling(Number(event.target.value))}
                />
              </div>
              <CardActions
                sx={{ justifyContent: "flex-end",
                  padding: 0,
                  "&:last-child": {
                    paddingBottom: 0, // Set the desired padding-bottom value here
                  },
                }}
              >
                <Button
                  className="submit-feeling-button"
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
}

export default FeelingForm;
