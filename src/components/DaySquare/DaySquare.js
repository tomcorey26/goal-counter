import React, { Component } from "react";
import "./DaySquare.css";

// have it so you can deselect the red
class DaySquare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white"
    };
  }
  render() {
    if (this.props.selected != null) {
      this.state.color = this.props.selected;
    }

    return (
      <div>
        <button className={this.state.color} onClick={this.props.onClick}>
          {this.props.number}
        </button>
      </div>
    );
  }
}

export default DaySquare;
