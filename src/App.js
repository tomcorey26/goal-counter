import React, { Component } from "react";
import "./App.css";
import Year from "./components/Year/Year";

class App extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="jumbotron text-center">
          <h1>My First Bootstrap Page</h1>
          <p>Resize this responsive page to see the effect!</p>
        </div>
        <Year />
      </div>
    );
  }
}

export default App;
