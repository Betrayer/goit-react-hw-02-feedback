import React, { Component } from "react";
// import FeedbackItem from "./feedbackItem/FeedbackItem";

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

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percentages = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return percentages;
  };

  render() {
    return (
      <>
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
            Total: <span>{this.countTotalFeedback()}</span>
          </li>
          {this.state.good > 0 && (
            <li>
              Positive feedback:{" "}
              <span>{this.countPositiveFeedbackPercentage()}%</span>
            </li>
          )}
        </ul>
        {/* <FeedbackItem /> */}
      </>
    );
  }
}

export default Feedback;
