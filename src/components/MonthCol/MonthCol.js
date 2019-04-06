import React, { Component } from "react";
import "./MonthCol.css";
import DaySquare from "../DaySquare/DaySquare";

class MonthCol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: Array(this.props.days).fill(null),
      isFull: false
    };
  }
  checkIfFull(month) {
    for (let i = 0; i < month.length; i++) {
      if (month[i] !== "red") {
        return false;
      }
    }

    return true;
  }
  handleClick(i) {
    const current = this.state.days.slice(0, this.state.days.length + 1);
    if (current[i] === "red") {
      current[i] = "white";
    } else {
      current[i] = "red";
    }
    this.setState({
      days: current
    });
    if (this.checkIfFull(current)) {
      this.setState({
        isFull: true
      });
      alert("You completed a whole month!!!");
    }
  }
  renderRow(numDays) {
    let row = [];
    for (let i = 0; i < numDays; i++) {
      row.push(
        <DaySquare
          key={i}
          number={i + 1}
          onClick={() => this.handleClick(i)}
          selected={this.state.days[i]}
        />
      );
    }
    return row;
  }
  render() {
    return (
      <div className="month">
        {this.props.name}
        {this.renderRow(this.props.days)}
      </div>
    );
  }
}

export default MonthCol;
