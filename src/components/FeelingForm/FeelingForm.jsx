import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Header from "../Header/Header.jsx";
import "./FeelingForm.css";

// http://localhost:3000/#/

function FeelingForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [feeling, setFeeling] = useState('');



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
        <form onSubmit={collectUserFeeling} className="feeling-rating-form">
          <label htmlFor="rate-feeling">
            On a scale of 1-5, rate how you feel right now:
          </label>
          <br />
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
          <footer className="feeling-form-footer-next">
            <button className="submit-feeling-button" type="submit">
              Next
            </button>
          </footer>
        </form>
      </section>
    </>
  );
} // end FeelingForm component

export default FeelingForm;
