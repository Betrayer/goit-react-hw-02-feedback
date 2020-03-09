import React, { Component } from "react";
import FeedbackItem from "./feedbackItem/FeedbackItem";

class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  goodCalc = () => {
    this.setState({
      good: this.state.good + 1
    });
  };

  neutralCalc = () => {
    this.setState({
      neutral: this.state.neutral + 1
    });
  };

  badCalc = () => {
    this.setState({
      bad: this.state.bad + 1
    });
  };

  render() {
    return (
      <>
        <div>
          <h2>Please leave feedback</h2>

          <div>
            <button onClick={this.goodCalc}>Good</button>
            <button onClick={this.neutralCalc}>Neutral</button>
            <button onClick={this.badCalc}>Bad</button>
          </div>
          <h2>Statistics</h2>
          <ul>
            <li>
              Good: <span>{this.state.good}</span>
            </li>
            <li>
              Neutral: <span>{this.state.neutral}</span>
            </li>
            <li>
              Bad: <span>{this.state.bad}</span>
            </li>
            <li>
              Total: <span></span>
            </li>
            <li>
              Positive feedback: <span></span>%
            </li>
          </ul>
          {/* <FeedbackItem /> */}
        </div>
      </>
    );
  }
}

export default Feedback;
