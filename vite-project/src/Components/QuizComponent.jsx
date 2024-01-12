import React, { Component } from "react";
import "../Components/QuizComponent.css";
import questionsData from "../quizQuestion.json"; // Assuming the file is in the same directory

export class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
    };
  }

  handlePrevious = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: Math.max(prevState.currentQuestionIndex - 1, 0),
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: Math.min(
        prevState.currentQuestionIndex + 1,
        questionsData.length - 1
      ),
    }));
  };

  handleQuit = () => {
    if (window.confirm("Are you sure you want to Quit?")) {
      this.setState({
        currentQuestionIndex: 0,
      });
    }
  };

  render() {
    const currentQuestion = questionsData[this.state.currentQuestionIndex];

    return (
      <div className="mainContainer">
        <div className="mainBox">
          <div className="heading">
            <h1>Questions:</h1>
          </div>
          <div className="Numbers">
            <h4>{`${this.state.currentQuestionIndex + 1} of ${
              questionsData.length
            }`}</h4>
          </div>
          <div className="Questions">
            <p>{currentQuestion.question}</p>
          </div>
          <div className="chooseBox">
            <div className="choose">
              <h2>{currentQuestion.optionA}</h2>
            </div>
            <div className="choose">
              <h2>{currentQuestion.optionB}</h2>
            </div>
            <div className="choose">
              <h2>{currentQuestion.optionC}</h2>
            </div>
            <div className="choose">
              <h2>{currentQuestion.optionD}</h2>
            </div>
          </div>
          <div className="buttonq">
            <button className="bluee" onClick={this.handlePrevious}>
              Previous
            </button>
            <button className="greenn" onClick={this.handleNext}>
              Next
            </button>
            <button className="redd" onClick={this.handleQuit}>
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
