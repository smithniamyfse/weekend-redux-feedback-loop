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
import "./UnderstandingForm.css";

// http://localhost:3000/#/understanding

function UnderstandingForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userFeeling = useSelector((store) => store.feeling);
  const [understanding, setUnderstanding] = useState(0);

  const clearUnderstanding = () => {
    setUnderstanding(0);
  };

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

    clearUnderstanding();
    goToSupport();
  };

  /*
1: I cannot understand any of the content. 
2: I understand only a small portion of the content. 
3: I understand a moderate amount of the content. 
4: I understand most of the content and can explain it to others. 
5: The content is clear to me, and I can teach it to others. 
  */

  return (
    <>
      <section className="understanding-scale-container">
        <h2>How well are you understanding the content?</h2>
        <div className="understanding-scale-chart">
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
      <section className="understanding-form-container">
        <form
          onSubmit={collectUserUnderstanding}
          className="understanding-rating-form"
        >
          <label htmlFor="rate-understanding">
            On a scale of 1-5, rate how well you understand the content:
          </label>
          <br />
          <input
            required
            type="number"
            id="rate-understanding"
            name="rate-understanding"
            value={understanding}
            onChange={(event) => setUnderstanding(Number(event.target.value))}
          />
          <footer className="understanding-form-footer-next">
            <button className="submit-understanding-button" type="submit">
              Next
            </button>
          </footer>
        </form>
      </section>
    </>
  );
}; // end UnderstandingForm component

export default UnderstandingForm;

/*
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
import "./UnderstandingForm.css";

// http://localhost:3000/#/understanding

function UnderstandingForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  // useSelector hook to grab feedback data from Redux store
  const userFeedback = useSelector(store => store.userFeedback)

  const [understanding, setUnderstanding] = useState(0);

  const clearUnderstanding = () => {
    setUnderstanding(0);
  };

  const goToSupport = () => {
    history.push("/support");
  };

  const collectUserUnderstanding = (event) => {
    event.preventDefault();
    console.log("Collecting user understanding rating: ", understanding);

    dispatch({
      type: "COLLECT_USER_FEEDBACK",
      payload: {
      feeling: userFeedback.feeling, 
      understanding
      }
      });

    // clearUnderstanding();

    goToSupport();
  }; // end collectUserUnderstanding function

  
1: I cannot understand any of the content. 
2: I understand only a small portion of the content. 
3: I understand a moderate amount of the content. 
4: I understand most of the content and can explain it to others. 
5: The content is clear to me, and I can teach it to others. 
  

return (
  <>
    <section className="understanding-scale-container">
      <h2>How well are you understanding the content?</h2>
      <div className="understanding-scale-chart">
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
    <section className="understanding-form-container">
      <form
        onSubmit={collectUserUnderstanding}
        className="understanding-rating-form"
      >
        <label htmlFor="rate-understanding">
          On a scale of 1-5, rate how well you understand the content:
        </label>
        <br />
        <input
          required
          type="number"
          id="rate-understanding"
          name="rate-understanding"
          value={understanding}
          onChange={(event) => setUnderstanding(Number(event.target.value))}
        />
        <footer className="understanding-form-footer-next">
          <button className="submit-understanding-button" type="submit">
            Next
          </button>
        </footer>
      </form>
    </section>
  </>
);
} // end UnderstandingForm component

export default UnderstandingForm;
*/
