import React, { Component } from "react";
import "./App.css";
import Year from "./components/Year/Year";
import Calendar from "react-calendar";

class App extends Component {
  render() {
    this.state = {
      date: new Date()
    };

    this.onChange = date => this.setState({ date });
    return (
      <div class="container-fluid">
        <div class="jumbotron text-center">
          <h1>Daily Goal Tracker</h1>
        </div>
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}

export default App;
