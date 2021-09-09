import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Map from "./components/Map";

class App extends Component {
  render() {
    return (
      <div id="main_div">
        <Map />
      </div>
    );
  }
}

export default App;
