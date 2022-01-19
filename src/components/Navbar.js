import React from "react";
import "../styles/Navbar.css";

import { connect } from "react-redux";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFor: "",
      numb: 1,
      x: 2000,
      y: 2000,
    };
    // this.testSpawnIcon = this.testSpawnIcon.bind(this);
  }

  // testSpawnIcon() {
  //   let overlayContainer = document.getElementById("overLayDiv");
  //   let oldX = this.state.x;
  //   let oldY = this.state.y;
  //   let oldnumb = this.state.numb;

  //   let newDiv = document.createElement("div");
  //   newDiv.id = "testIcon" + oldnumb;
  //   newDiv.className = "iconDiv";
  //   newDiv.style.top = oldX + "px";
  //   newDiv.style.left = oldY + "px";
  //   newDiv.style.backgroundColor = "blue";

  //   this.setState({
  //     x: oldX + 200,
  //     y: oldY + 200,
  //     numb: oldnumb + 1,
  //   });

  //   overlayContainer.appendChild(newDiv);
  // }

  render() {
    return (
      <div id="nav_bar">
        <div id="import_div">
          <button onClick={this.testSpawnIcon} id="import_BTN">
            Import
          </button>
        </div>
        <div id="toggle_div">
          <button id="toggle_BTN">----------- Toggle Menu -----------</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataSet,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateDataSet: (importJSONData) =>
    dispatch({ type: "UPLOAD", payload: importJSONData }),
});

export default connect(mapStateToProps, mapDispatchToProps())(Navbar);
