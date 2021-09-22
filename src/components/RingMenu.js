import "../styles/RingMenu.css";
import { Zoom } from "@mui/material";

import React from "react";

import exit from "../images/menuIcons/Exit.png";
import mining from "../images/menuIcons/Mining.png";
import harvesting from "../images/menuIcons/Harvesting.png";
import logging from "../images/menuIcons/Logging.png";
import notepin from "../images/menuIcons/NotePin.png";
import fishing from "../images/menuIcons/Fishing.png";
import animal from "../images/menuIcons/Animal.png";
import farming from "../images/menuIcons/Farming.png";
import mobs from "../images/menuIcons/Mobs.png";

class RingMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div id="ringMenuGround">
        <Zoom in={this.state.zoomStateMain} timeout={{ enter: 100, exit: 500 }}>
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
    );
  }
}

export default RingMenu;
