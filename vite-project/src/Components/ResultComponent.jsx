import React, { Component } from 'react'
import "../Components/ResultComponent.css";

export class ResultComponent extends Component {
  render() {
    return (
      <div className='mainContainerr'> 
      <h1>Result</h1>
      <div className="Container1r">
          <div className="heading">
              <h3>You need more Practice!</h3>
          </div>
          <div className="resultStatement">
              <h1>Your Score is 20%</h1>
          </div>

          <div className="totalQuestionsr">
              <div className="results">
                  <p>Total Number of Questions:</p>
                  <p>15</p>
              </div>
              <div className="results">
              <p>Total Number of Questions:</p>
                  <p>15</p>
              </div>
              <div className="results">
              <p>Total Number of Questions:</p>
                  <p>15</p>
              </div>
              <div className="results">
              <p>Total Number of Questions:</p>
                  <p>15</p>
              </div>
          </div>

      </div>
          <div className='Buttonsr'>
              <button className="Againr">Play Again</button>
              <button className="Backr">Back Home</button>
          </div>
    </div>
    )
  }
}

export default ResultComponent;
