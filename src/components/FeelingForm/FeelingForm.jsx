import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./FeelingForm.css";

// http://localhost:3000/#/feeling

function FeelingForm() {


  return (
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

  );
}

export default FeelingForm;
