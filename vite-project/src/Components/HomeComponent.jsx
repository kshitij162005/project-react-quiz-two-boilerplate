import React, { Component } from "react";
import "../Components/HomeComponent.css";
// import {App} from '../App';

export class HomeComponent extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="Text">
          <h1>Quiz App</h1>
        </div>
        <div className="button">
          <button className="BackButton">Play</button>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
