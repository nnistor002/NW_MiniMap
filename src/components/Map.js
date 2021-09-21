import React from "react";
import "../styles/Map.css";
import "../styles/RingMenu.css";
import { Zoom } from "@mui/material";

import fullMap from "../images/New_World_Map_FinalSD.jpg";
import welcomeImg from "../images/WelcomeScreen.png";

import arrow_Up from "../images/icons/ArrowUp.png";
import arrow_Down from "../images/icons/ArrowDown.png";
import arrow_Left from "../images/icons/ArrowLeft.png";
import arrow_Right from "../images/icons/ArrowRight.png";

import exit from "../images/menuIcons/Exit.png";
import mining from "../images/menuIcons/Mining.png";
import harvesting from "../images/menuIcons/Harvesting.png";
import logging from "../images/menuIcons/Logging.png";
import notepin from "../images/menuIcons/NotePin.png";
import fishing from "../images/menuIcons/Fishing.png";
import animal from "../images/menuIcons/Animal.png";
import farming from "../images/menuIcons/Farming.png";
import mobs from "../images/menuIcons/Mobs.png";

import { MapInteractionCSS } from "react-map-interaction";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionMouseX: "",
      positionMouseY: "",
      imgSize: 5000,
      value: {
        scale: 1,
        translation: {
          x: 0,
          y: 0,
        },
      },
      zoomStateMain: false,
      zoomStateMainCategory: {
        zoomNotePinBTN: false,
        zoomMobBTN: false,
        zoomMiningBTN: false,
        zoomHarvestingBTN: false,
        zoomLoggingBTN: false,
        zoomTrackingBTN: false,
        zoomFarmingBTN: false,
        zoomFishingBTN: false,
      },
      zoomStateNoteSubCat: false,
      zoomStateMobSubCat: false,
      zoomStateMiningSubCat: false,
      zoomStateHarvestingSubCat: false,
      zoomStateLoggingSubCat: false,
      zoomStateTrackingSubCat: false,
      zoomStateFarmingSubCat: false,
      zoomStateFishingSubCat: false,
      windowMousePosX: 0,
      windowMousePosY: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("mousemove", (e) => this.handleWindowMousePos(e));

    document
      .getElementById("closeBTN")
      .addEventListener("click", () => this.closeBTN());

    document
      .getElementById("notePinBTN")
      .addEventListener("click", () => this.notePinBTN());

    document
      .getElementById("mobBTN")
      .addEventListener("click", () => this.mobPinBTN());

    document
      .getElementById("miningBTN")
      .addEventListener("click", () => this.miningBTN());

    document
      .getElementById("harvestingBTN")
      .addEventListener("click", () => this.harvestingBTN());

    document
      .getElementById("loggingBTN")
      .addEventListener("click", () => this.loggingBTN());

    document
      .getElementById("trackingBTN")
      .addEventListener("click", () => this.trackingBTN());

    document
      .getElementById("farmingBTN")
      .addEventListener("click", () => this.farmingBTN());

    document
      .getElementById("fishingBTN")
      .addEventListener("click", () => this.fishingBTN());

    document
      .getElementById("full_Map")
      .addEventListener("auxclick", (e) => this.handleMiddleClickMenu(e));

    document
      .getElementById("full_Map")
      .addEventListener("mousemove", (e) => this.handleMousePosition(e));

    setTimeout(function () {
      document.getElementById("WelcomeDiv").hidden = true;
    }, 2000);
  }

  componentDidUpdate() {
    this.handleIconScale(
      document.getElementById("full_Map").getBoundingClientRect().width
    );
    this.handleGuidance();
  }

  handleMousePosition(e) {
    let element = document.getElementById("full_Map");

    let rect = element.getBoundingClientRect();

    let x = Math.round(e.clientX - rect.left);
    let y = Math.round(e.clientY - rect.top);

    if (x < 0) {
      x = 0;
    }

    if (y < 0) {
      y = 0;
    }

    this.setState({
      positionMouseX: x,
      positionMouseY: y,
    });
  }

  handleIconScale(newMapWH) {
    let iconArray = document.getElementsByClassName("iconDiv");

    if (newMapWH > 750 && newMapWH < 1250) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(4)";
      }
    }
    if (newMapWH > 1250 && newMapWH < 1750) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(3)";
      }
    }
    if (newMapWH > 1750 && newMapWH < 2500) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(2.5)";
      }
    }
    if (newMapWH > 2500 && newMapWH < 3700) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(2)";
      }
    }
    if (newMapWH > 3700 && newMapWH < 4500) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(1.5)";
      }
    }
    if (newMapWH > 4500 && newMapWH < 6100) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(1)";
      }
    }
  }

  // handleArchive(e) {
  //   // Use offSet x and y to get map exact cords for the overlay...
  //   let mapOffSetX = e.offsetX;
  //   let mapOffSetY = e.offsetY;

  //   console.log(mapOffSetX + " ---- " + mapOffSetY);
  //   console.log(e.button);
  // }

  handleGuidance() {
    let bounds = document.getElementById("full_Map").getBoundingClientRect();

    if (bounds.top > 900) {
      document.getElementById("arrowDown").hidden = false;
    } else {
      document.getElementById("arrowDown").hidden = true;
    }

    if (bounds.bottom < 1) {
      document.getElementById("arrowUp").hidden = false;
    } else {
      document.getElementById("arrowUp").hidden = true;
    }

    if (bounds.left > 1200) {
      document.getElementById("arrowRight").hidden = false;
    } else {
      document.getElementById("arrowRight").hidden = true;
    }

    if (bounds.right < 1) {
      document.getElementById("arrowLeft").hidden = false;
    } else {
      document.getElementById("arrowLeft").hidden = true;
    }
  }

  handleWindowMousePos(e) {
    this.setState({
      windowMousePosX: e.clientX,
      windowMousePosY: e.clientY,
    });
  }

  handleMiddleClickMenu(e) {
    if (e.button === 1) {
      let z = document.getElementById("rightClickMenuContainer");

      // let mapOffSetX = e.offsetX;
      // let mapOffSetY = e.offsetY;

      // CREATE BORDER LOGIC IF CLICK IS NEXT TO SIDE OF SCREEN
      z.style.left = this.state.windowMousePosX - 360 + "px";
      z.style.top = this.state.windowMousePosY - 350 + "px";

      this.setState({
        zoomStateMain: true,
      });
      this.toggleMainCategory(true);
    }
  }

  closeBTN() {
    this.setState({
      zoomStateNoteSubCat: false,
      zoomStateMobSubCat: false,
      zoomStateMiningSubCat: false,
      zoomStateHarvestingSubCat: false,
      zoomStateLoggingSubCat: false,
      zoomStateTrackingSubCat: false,
      zoomStateFarmingSubCat: false,
      zoomStateFishingSubCat: false,
      zoomStateMain: false,
    });
    this.toggleMainCategory(false);
  }

  toggleMainCategory(bol) {
    if (bol === true) {
      this.setState({
        zoomStateMainCategory: {
          zoomNotePinBTN: true,
          zoomMobBTN: true,
          zoomMiningBTN: true,
          zoomHarvestingBTN: true,
          zoomLoggingBTN: true,
          zoomTrackingBTN: true,
          zoomFarmingBTN: true,
          zoomFishingBTN: true,
        },
      });
    }

    if (bol === false) {
      this.setState({
        zoomStateMainCategory: {
          zoomNotePinBTN: false,
          zoomMobBTN: false,
          zoomMiningBTN: false,
          zoomHarvestingBTN: false,
          zoomLoggingBTN: false,
          zoomTrackingBTN: false,
          zoomFarmingBTN: false,
          zoomFishingBTN: false,
        },
      });
    }
  }

  notePinBTN() {
    if (this.state.zoomStateNoteSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateNoteSubCat: true,
        zoomStateMainCategory: {
          zoomNotePinBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateNoteSubCat: false,
      });
    }
  }

  mobPinBTN() {
    if (this.state.zoomStateMobSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateMobSubCat: true,
        zoomStateMainCategory: {
          zoomMobBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateMobSubCat: false,
      });
    }
  }

  miningBTN() {
    if (this.state.zoomStateMiningSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateMiningSubCat: true,
        zoomStateMainCategory: {
          zoomMiningBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateMiningSubCat: false,
      });
    }
  }

  harvestingBTN() {
    if (this.state.zoomStateHarvestingSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateHarvestingSubCat: true,
        zoomStateMainCategory: {
          zoomHarvestingBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateHarvestingSubCat: false,
      });
    }
  }

  loggingBTN() {
    if (this.state.zoomStateLoggingSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateLoggingSubCat: true,
        zoomStateMainCategory: {
          zoomLoggingBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateLoggingSubCat: false,
      });
    }
  }

  trackingBTN() {
    if (this.state.zoomStateTrackingSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateTrackingSubCat: true,
        zoomStateMainCategory: {
          zoomTrackingBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateTrackingSubCat: false,
      });
    }
  }

  farmingBTN() {
    if (this.state.zoomStateFarmingSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateFarmingSubCat: true,
        zoomStateMainCategory: {
          zoomFarmingBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateFarmingSubCat: false,
      });
    }
  }

  fishingBTN() {
    if (this.state.zoomStateFishingSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateFishingSubCat: true,
        zoomStateMainCategory: {
          zoomFishingBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateFishingSubCat: false,
      });
    }
  }

  render() {
    return (
      <div id="map_div">
        <div id="view_window">
          <MapInteractionCSS
            id="nav"
            value={this.state.value}
            onChange={(value) => this.setState({ value })}
            minScale={0.2}
            maxScale={1}
            translationBounds={this.state.translationBounds}
          >
            <div
              id="overLayDiv"
              width={this.state.imgSize}
              height={this.state.imgSize}
            >
              <div className="iconDiv" id="testIcon"></div>
              <div className="iconDiv" id="testIconOne"></div>
              <div className="iconDiv" id="testIconTwo"></div>
              <div className="iconDiv" id="testIconThree"></div>
              <div className="iconDiv" id="testIconFour"></div>
            </div>
            <img
              id="full_Map"
              src={fullMap}
              alt="Aeternum"
              width={this.state.imgSize}
              height={this.state.imgSize}
            />
          </MapInteractionCSS>
          <div id="cord_div">
            <h2>
              {this.state.positionMouseX} - {this.state.positionMouseY}
            </h2>
          </div>
          <div id="ringMenuGround">
            <Zoom
              in={this.state.zoomStateMain}
              timeout={{ enter: 100, exit: 500 }}
            >
              <div id="rightClickMenuContainer">
                <div id="closeBTN">
                  <img src={exit} alt="Exit" width="35" height="35"></img>
                </div>
                <Zoom
                  in={this.state.zoomStateMainCategory.zoomNotePinBTN}
                  timeout={{ enter: 200, exit: 500 }}
                >
                  <div id="notePinBTN">
                    <img
                      src={notepin}
                      alt="Drop Note"
                      title="Drop Note"
                      width="42"
                      height="42"
                    ></img>
                  </div>
                </Zoom>
                <Zoom
                  in={this.state.zoomStateNoteSubCat}
                  timeout={{ enter: 200, exit: 500 }}
                >
                  <div id="notePinSubDiv"></div>
                </Zoom>
                <Zoom
                  in={this.state.zoomStateMainCategory.zoomMobBTN}
                  timeout={{ enter: 300, exit: 350 }}
                >
                  <div id="mobBTN">
                    <img
                      src={mobs}
                      alt="Mobs"
                      title="Mobs & Elites"
                      width="42"
                      height="42"
                    ></img>
                  </div>
                </Zoom>
                <Zoom
                  in={this.state.zoomStateMainCategory.zoomMiningBTN}
                  timeout={{ enter: 400, exit: 300 }}
                >
                  <div id="miningBTN">
                    <img
                      src={mining}
                      alt="Mining"
                      title="Mining"
                      width="42"
                      height="42"
                    ></img>
                  </div>
                </Zoom>
                <Zoom
                  in={this.state.zoomStateMainCategory.zoomHarvestingBTN}
                  timeout={{ enter: 500, exit: 250 }}
                >
                  <div id="harvestingBTN">
                    <img
                      src={harvesting}
                      alt="Harvesting"
                      title="Harvesting"
                      width="42"
                      height="42"
                    ></img>
                  </div>
                </Zoom>
                <Zoom
                  in={this.state.zoomStateMainCategory.zoomLoggingBTN}
                  timeout={{ enter: 600, exit: 200 }}
                >
                  <div id="loggingBTN">
                    <img
                      src={logging}
                      alt="Logging"
                      title="Logging"
                      width="42"
                      height="42"
                    ></img>
                  </div>
                </Zoom>
                <Zoom
                  in={this.state.zoomStateMainCategory.zoomTrackingBTN}
                  timeout={{ enter: 700, exit: 150 }}
                >
                  <div id="trackingBTN">
                    <img
                      src={animal}
                      alt="Tracking"
                      title="Tracking"
                      width="42"
                      height="42"
                    ></img>
                  </div>
                </Zoom>
                <Zoom
                  in={this.state.zoomStateMainCategory.zoomFarmingBTN}
                  timeout={{ enter: 800, exit: 100 }}
                >
                  <div id="farmingBTN">
                    <img
                      src={farming}
                      alt="Farming"
                      title="Farming"
                      width="42"
                      height="42"
                    ></img>
                  </div>
                </Zoom>
                <Zoom
                  in={this.state.zoomStateMainCategory.zoomFishingBTN}
                  timeout={{ enter: 900, exit: 50 }}
                >
                  <div id="fishingBTN">
                    <img
                      src={fishing}
                      alt="Fishing"
                      title="Fishing"
                      width="42"
                      height="42"
                    ></img>
                  </div>
                </Zoom>
              </div>
            </Zoom>
          </div>
          <div id="arrowUp" hidden={true}>
            <img src={arrow_Up} alt="arrUp" />
          </div>
          <div id="arrowDown" hidden={true}>
            <img src={arrow_Down} alt="arrDown" />
          </div>
          <div id="arrowLeft" hidden={true}>
            <img src={arrow_Left} alt="arrLeft" />
          </div>
          <div id="arrowRight" hidden={true}>
            <img src={arrow_Right} alt="arrRight" />
          </div>
        </div>
        <div id="WelcomeDiv" hidden={false}>
          <img id="imgWelcome" src={welcomeImg} alt="WelcomeImg" />
        </div>
      </div>
    );
  }
}

export default Map;
