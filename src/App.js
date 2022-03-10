import React, { Component } from "react";
import "./App.css";
//import Navbar from "./components/Navbar";
import Map from "./components/Map";
import RingMenu from "./components/RingMenuEdit.jsx";

//import welcomeImg from "./images/WelcomeScreen.png";
//import loadingIconImg from "./images/loadingIcon.png";

import { connect } from "react-redux";
//import { Button } from "@mui/material";

class App extends Component {
  turnOffWelcomeDiv() {
    document.getElementById("WelcomeDiv").style.visibility = "hidden";
    document.getElementById("divTitleUpload").style.visibility = "hidden";
    document.getElementById("file-upload").style.visibility = "hidden";
    document.getElementById("newBTN").style.visibility = "hidden";
  }

  // Working on it....
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
      //console.log(Object.keys(this.props.data[0]).toString());

      for (let i = 0; i < this.props.data.length; i++) {
        let categorie = this.props.data[i];
        console.log(categorie);
      }

      // //How to add to cords new Arrays targetting subCates
      // let targetSubCate = this.props.data[0].Logging[0].cords;
      // console.log(targetSubCate);
      // targetSubCate.push([3333, 3333]);
      // targetSubCate.push([4444, 4444]);
      // console.log(targetSubCate);
    }, 1000);

    //this.turnOffWelcomeDiv();
  }

  componentDidMount() {
    // setTimeout(() => {
    //   document.getElementById("divTitleUpload").style.visibility = "visible";
    //   document.getElementById("file-upload").style.visibility = "visible";
    //   document.getElementById("newBTN").style.visibility = "visible";
    //   document.getElementById("loadingIcon").style.visibility = "hidden";
    // }, 10000);
  }

  render() {
    return (
      <div id="mainAppDiv">
        {/* <div id="WelcomeDiv">
          <img id="imgWelcome" src={welcomeImg} alt="WelcomeImg" />
          <h2 id="divTitleUpload">Upload JSON File</h2>
          <input
            id="file-upload"
            type="file"
            accept=".JSON"
            onChange={(e) => this.uploadExisitingFile(e)}
          />
          <div id="loadingIcon"></div>

          <Button id="newBTN" onClick={this.turnOffWelcomeDiv}>
            Start Fresh
          </Button>
        </div> */}
        <Map />
        <RingMenu />
        {/* <Navbar /> */}
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
