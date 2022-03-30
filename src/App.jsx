import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import RingMenu from "./components/RingMenu.jsx";
import RemovePinBTN from "./components/RemovePins.jsx";
import SaveBTN from "./components/SaveBTN.jsx";
import HidePinBTN from "./components/HidePins.jsx";
import ExitBTN from "./components/ExitBTN.jsx";

import NoteIcon from "./images/menuIcons/NotePin.png";
import MobIcon from "./images/menuIcons/Mobs.png";
import MiningIcon from "./images/menuIcons/Mining.png";
import HarvestingIcon from "./images/menuIcons/Harvesting.png";
import FungiIcon from "./images/menuIcons/Fungi.png";
import TrackingIcon from "./images/menuIcons/Animal.png";
import FarmingIcon from "./images/menuIcons/Farming.png";
import LoggingIcon from "./images/menuIcons/Logging.png";

import welcomeImg from "./images/WelcomeScreen.png";
// import loadingIconImg from "./images/loadingIcon.png";

import { connect } from "react-redux";
import { Alert, AlertTitle, Button } from "@mui/material";

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

      if (n.JSONDATAFOR === "NWMINIMAP" && Object.keys(n).length === 9) {
        this.props.updateDataSet(data);

        Object.keys(this.props.data.Categories).forEach((key) => {
          if (key === "Notes" || key === "Mobs") {
            Object.keys(this.props.data.Categories[key]).forEach((subKey) => {
              if (key === "Notes") {
                this.createPins(
                  NoteIcon,
                  "Note_" +
                    this.props.data.Categories[key][subKey][1][0] +
                    " - " +
                    this.props.data.Categories[key][subKey][1][1],
                  this.props.data.Categories[key][subKey][0],
                  key,
                  this.props.data.Categories[key][subKey][1]
                );
              }
              if (key === "Mobs") {
                if (
                  this.props.data.Categories[key][subKey][0].includes(
                    "Standard Mob"
                  )
                ) {
                  this.createPins(
                    MobIcon,
                    "MobStandard_" +
                      this.props.data.Categories[key][subKey][1][0] +
                      " - " +
                      this.props.data.Categories[key][subKey][1][1],
                    this.props.data.Categories[key][subKey][0],
                    key,
                    this.props.data.Categories[key][subKey][1]
                  );
                } else {
                  this.createPins(
                    MobIcon,
                    "MobElite_" +
                      this.props.data.Categories[key][subKey][1][0] +
                      " - " +
                      this.props.data.Categories[key][subKey][1][1],
                    this.props.data.Categories[key][subKey][0],
                    key,
                    this.props.data.Categories[key][subKey][1]
                  );
                }
              }
            });
          } else {
            Object.keys(this.props.data.Categories[key]).forEach((subKey) => {
              if (key === "Mining") {
                this.props.data.Categories[key][subKey].forEach((coord) => {
                  this.createPins(
                    MiningIcon,
                    subKey + "_" + coord[0] + " - " + coord[1],
                    subKey,
                    key,
                    coord
                  );
                });
              }
              if (key === "Harvesting") {
                this.props.data.Categories[key][subKey].forEach((coord) => {
                  this.createPins(
                    HarvestingIcon,
                    subKey + "_" + coord[0] + " - " + coord[1],
                    subKey,
                    key,
                    coord
                  );
                });
              }
              if (key === "Fungi") {
                this.props.data.Categories[key][subKey].forEach((coord) => {
                  this.createPins(
                    FungiIcon,
                    subKey + "_" + coord[0] + " - " + coord[1],
                    subKey,
                    key,
                    coord
                  );
                });
              }
              if (key === "Tracking") {
                this.props.data.Categories[key][subKey].forEach((coord) => {
                  this.createPins(
                    TrackingIcon,
                    subKey + "_" + coord[0] + " - " + coord[1],
                    subKey,
                    key,
                    coord
                  );
                });
              }
              if (key === "Farming") {
                this.props.data.Categories[key][subKey].forEach((coord) => {
                  this.createPins(
                    FarmingIcon,
                    subKey + "_" + coord[0] + " - " + coord[1],
                    subKey,
                    key,
                    coord
                  );
                });
              }
              if (key === "Logging") {
                this.props.data.Categories[key][subKey].forEach((coord) => {
                  this.createPins(
                    LoggingIcon,
                    subKey + "_" + coord[0] + " - " + coord[1],
                    subKey,
                    key,
                    coord
                  );
                });
              }
            });
          }
        });

        this.turnOffWelcomeDiv();
      } else {
        document.getElementById("alertBox").style.visibility = "visible";
      }
    };

    setTimeout(() => {
      //How to find out the Categories
      //console.log(Object.keys(this.props.data[0]).toString());
      // for (let i = 0; i < this.props.data.length; i++) {
      //   let categorie = this.props.data[i];
      //   console.log(categorie);
      // }
      // //How to add to cords new Arrays targetting subCates
      // let targetSubCate = this.props.data[0].Logging[0].cords;
      // console.log(targetSubCate);
      // targetSubCate.push([3333, 3333]);
      // targetSubCate.push([4444, 4444]);
      // console.log(targetSubCate);
    }, 1000);

    //this.turnOffWelcomeDiv();
  }

  createPins = (icon, id, t, c, l) => {
    let newPin = document.createElement("img", {});
    newPin.src = icon;
    newPin.id = id;
    newPin.className = "iconDiv";
    newPin.style.left = l[0] + "px";
    newPin.style.top = l[1] + "px";
    newPin.title = t;
    newPin.dataset.category = c;
    newPin.onclick = () => {
      if (this.props.removeMode) {
        document.getElementById("overLayDiv").removeChild(newPin);
        this.props.removePinFromDataSet(c, t, [l[0], l[1]]);
      }
    };
    document.getElementById("overLayDiv").appendChild(newPin);
  };

  componentDidMount() {
    setTimeout(() => {
      document.getElementById("divTitleUpload").style.visibility = "visible";
      document.getElementById("file-upload").style.visibility = "visible";
      document.getElementById("newBTN").style.visibility = "visible";
      document.getElementById("loadingIcon").style.visibility = "hidden";
    }, 10000);
  }

  render() {
    return (
      <div id="mainAppDiv">
        <div id="WelcomeDiv">
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
          <div id="alertBox">
            <div id="alertBoxContent">
              <Alert
                variant="filled"
                severity="error"
                onClose={() => {
                  document.getElementById("alertBox").style.visibility =
                    "hidden";
                }}
              >
                <AlertTitle>Error</AlertTitle>
                New World Mini-Map does not recognize this JSON DataSet. ---
                Please try another JSON file.
              </Alert>
            </div>
          </div>
        </div>
        <Map />
        <RingMenu />
        <Navbar />
        <RemovePinBTN />
        <SaveBTN />
        <HidePinBTN />
        <ExitBTN />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataSet,
    removeMode: state.removeMode,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateDataSet: (importJSONData) =>
    dispatch({ type: "UPLOADDATA", payload: importJSONData }),
  removePinFromDataSet: (cate, subCate, l) =>
    dispatch({
      type: "REMOVEDATA",
      payload: [cate, subCate, l],
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
