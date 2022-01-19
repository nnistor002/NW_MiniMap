import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import RingMenu from "./components/RingMenu";

import welcomeImg from "./images/WelcomeScreen.png";

import { connect } from "react-redux";
import { Button } from "@mui/material";

class App extends Component {
  turnOffWelcomeDiv() {
    document.getElementById("WelcomeDiv").style.visibility = "hidden";
  }

  uploadExisitingFile(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);

    reader.onload = (e) => {
      let data = JSON.parse(e.target.result);
      let n = data.Categories;
      this.props.updateDataSet(n);
    };

    setTimeout(() => {
      //How to find out the Categories
      console.log(Object.keys(this.props.data[0]).toString());

      //How to add to cords new Arrays targetting subCates
      let targetSubCate = this.props.data[0].Logging[0].cords;
      console.log(targetSubCate);
      targetSubCate.push([3333, 3333]);
      targetSubCate.push([4444, 4444]);
      console.log(targetSubCate);
    }, 1000);
  }

  render() {
    return (
      <div id="mainAppDiv">
        <Map />
        <RingMenu />
        <Navbar />
        <div id="WelcomeDiv">
          <img id="imgWelcome" src={welcomeImg} alt="WelcomeImg" />
          <h2 id="divTitleUpload">Upload JSON File</h2>
          <input
            id="file-upload"
            type="file"
            accept=".JSON"
            onChange={(e) => this.uploadExisitingFile(e)}
          />
          <Button id="newBTN" onClick={this.turnOffWelcomeDiv}>
            Start Fresh
          </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
