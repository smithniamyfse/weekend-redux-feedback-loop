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
import Header from "../Header/Header.jsx";
import "./SupportForm.css";

// http://localhost:3000/#/support

function SupportForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const userFeeling = useSelector((store) => store.feeling);
  // const userUnderstanding = useSelector((store) => store.understanding);
  const [support, setSupport] = useState(1);


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

  /*
1: I feel unsupported and haven't received the guidance I needed.
2: I feel somewhat supported, but I could benefit from more guidance.
3: I feel moderately supported and have received satisfactory guidance.
4: I feel well supported and have received helpful guidance.
5: I feel fully supported and have received exceptional guidance.


  */

  return (
    <>
    <Header />
      <section className="support-scale-container">
        <h2>How well are you being supported?</h2>
        <div className="support-scale-chart">
          <div>
            1
            <br />I feel unsupported and haven't received the guidance I needed.
          </div>
          <div>
            2
            <br />I feel somewhat supported, but I could benefit from more guidance.
          </div>
          <div>
            3
            <br />I feel moderately supported and have received satisfactory guidance.
          </div>
          <div>
            4
            <br />I feel well supported and have received helpful guidance.
          </div>
          <div>
            5
            <br />
            I feel fully supported and have received exceptional guidance.
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
            min="1" 
            max="5"
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
