import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./SupportForm.css";

// http://localhost:3000/#/support

function SupportForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const userFeeling = useSelector((store) => store.feeling);
  // const userUnderstanding = useSelector((store) => store.understanding);
  const [support, setSupport] = useState(0);

  const clearSupport = () => {
    setSupport(0);
  };

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

    clearSupport();
    goToComments();
  };

  return (
    <>
      <section className="support-scale-container">
        <h2>How well are you being supported?</h2>
        <div className="support-scale-chart">
          <div>
            1
            <br />I cannot understand any of the content.
          </div>
          <div>
            2
            <br />I understand only a small portion of the content.
          </div>
          <div>
            3
            <br />I understand a moderate amount of the content.
          </div>
          <div>
            4
            <br />I understand most of the content and can explain it to others.
          </div>
          <div>
            5
            <br />
            The content is clear to me, and I can teach it to others.
          </div>
        </div>
      </section>
      <section className="support-form-container">
        <form onSubmit={collectUserSupport} className="support-rating-form">
          <label htmlFor="rate-support">
            On a scale of 1-5, rate how satisfied you are with the support you
            have received:
          </label>
          <br />
          <input
            required
            type="number"
            id="rate-support"
            name="rate-support"
            value={support}
            onChange={(event) => setSupport(Number(event.target.value))}
          />
          <footer className="support-form-footer-next">
            <button className="submit-support-button" type="submit">
              Next
            </button>
          </footer>
        </form>
      </section>
    </>
  );
} // end SupportForm component

export default SupportForm;
