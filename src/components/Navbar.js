import React from "react";
import "../styles/Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFor: "",
    };
  }

  render() {
    return (
      <div id="nav_bar">
        <div id="import_div">
          <button id="import_BTN">Import</button>
        </div>
        <div id="toggle_div">
          <button id="toggle_BTN">----------- Toggle Menu -----------</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
