import React, { Component } from 'react';
import './DaySquare.css';


// have it so you can deselect the red
class DaySquare extends Component {
  render() {
    let btn_class = this.props.selected;
    return (
      <div>
        <button className={btn_class} onClick={this.props.onClick}>
          {this.props.number}
        </button>
      </div>
  );
  }
}



export default DaySquare;