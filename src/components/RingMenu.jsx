import "../styles/RingMenu.css";
import { Zoom } from "@mui/material";
import NotePinBTNClass from "./ringMenuButtons/notePinBTN";
import MobsBTNClass from "./ringMenuButtons/mobBTN";
import LoggingBTNClass from "./ringMenuButtons/loggingBTN";
import TrackingBTNClass from "./ringMenuButtons/trackingBTN";
import FarmingBTNClass from "./ringMenuButtons/farmingBTN";
import MiningBTNClass from "./ringMenuButtons/miningBTN";
import HarvestingBTNClass from "./ringMenuButtons/harvestingBTN";
import FungiBTNClass from "./ringMenuButtons/fungiBTN";

import React from "react";
import { connect } from "react-redux";

import exit from "../images/menuIcons/Exit.png";

class RingMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMainCloseBTN: false,
      mainBTNList: {
        showMainNotePinBTN: false,
        showMainMobsBTN: false,
        showMainMiningBTN: false,
        showMainHarvestingBTN: false,
        showMainFungiBTN: false,
        showMainTrackingBTN: false,
        showMainFarmingBTN: false,
        showMainLoggingBTN: false,
      },
      subBTNList: {
        showSubsNotePinBTNs: false,
        showSubsMobsBTNs: false,
        showSubsMiningBTNs: false,
        showSubsHarvestingBTNs: false,
        showSubsFungiBTNs: false,
        showSubsTrackingBTNs: false,
        showSubsFarmingBTNs: false,
        showSubLoggingBTNs: false,
      },
      windowMousePosX: 0,
      windowMousePosY: 0,
      noteUserInput: "",
      mobSubDivInput: "",
    };
  }

  componentDidMount() {
    window.addEventListener("mousemove", (e) => this.handleWindowMousePos(e));

    window.addEventListener("auxclick", (e) => this.handleMiddleClickMenu(e));
  }

  handleWindowMousePos(e) {
    this.setState({
      windowMousePosX: e.clientX,
      windowMousePosY: e.clientY,
    });
  }

  handleMiddleClickMenu(e) {
    var welcomeScreenVisible =
      document.getElementById("WelcomeDiv").style.visibility;
    if (this.props.removeMode !== true) {
      if (e.button === 1 && welcomeScreenVisible === "hidden") {
        let z = document.getElementById("rightClickMenuContainer");

        // let mapOffSetX = e.offsetX;
        // let mapOffSetY = e.offsetY;

        // CREATE BORDER LOGIC IF CLICK IS NEXT TO SIDE OF SCREEN
        z.style.left = this.state.windowMousePosX - 350 + "px";
        z.style.top = this.state.windowMousePosY - 350 + "px";

        //console.log(this.props.trackXY);

        this.setState({
          showMainCloseBTN: true,
          mainBTNList: {
            showMainCloseBTN: true,
            showMainNotePinBTN: true,
            showMainMobsBTN: true,
            showMainMiningBTN: true,
            showMainHarvestingBTN: true,
            showMainFungiBTN: true,
            showMainTrackingBTN: true,
            showMainFarmingBTN: true,
            showMainLoggingBTN: true,
          },
        });

        if (window.innerWidth < 2500) {
          z.style.transform = "scale(.8)";
        }
      }
    }
  }

  closeMenu = () => {
    this.setState({
      showMainCloseBTN: false,
      activeSubBTNs: false,
      mainBTNList: {
        showMainNotePinBTN: false,
        showMainMobsBTN: false,
        showMainMiningBTN: false,
        showMainHarvestingBTN: false,
        showMainFungiBTN: false,
        showMainTrackingBTN: false,
        showMainFarmingBTN: false,
        showMainLoggingBTN: false,
      },
      subBTNList: {
        showSubsNotePinBTNs: false,
        showSubsMobsBTNs: false,
        showSubsMiningBTNs: false,
        showSubsHarvestingBTNs: false,
        showSubsFungiBTNs: false,
        showSubsTrackingBTNs: false,
        showSubsFarmingBTNs: false,
        showSubLoggingBTNs: false,
      },
    });
  };

  clickMe = (s) => {
    console.log(s);
  };

  toggleMainBTNs = (str) => {
    var buttonList = {};
    for (let x = 0; x < Object.keys(this.state.mainBTNList).length; x++) {
      var buttonName = Object.keys(this.state.mainBTNList)[x];
      if (buttonName !== str) {
        buttonList[buttonName] = !Object.values(this.state.mainBTNList)[x];
      } else {
        buttonList[buttonName] = Object.values(this.state.mainBTNList)[x];
      }
    }

    this.setState({
      mainBTNList: buttonList,
    });
    this.toggleSubBTNs(str);
  };

  toggleSubBTNs(str) {
    var subBtnList = {};
    var targetSubBtnName = str.substr(8);
    for (let x = 0; x < Object.keys(this.state.subBTNList).length; x++) {
      var subBtnName = Object.keys(this.state.subBTNList)[x];
      if (subBtnName.includes(targetSubBtnName)) {
        subBtnList[subBtnName] = !Object.values(this.state.subBTNList)[x];
      } else {
        subBtnList[subBtnName] = Object.values(this.state.subBTNList)[x];
      }
    }
    this.setState({
      activeSubBTNs: true,
      subBTNList: subBtnList,
    });
  }

  render() {
    return (
      <Zoom
        in={this.state.showMainCloseBTN}
        timeout={{ enter: 100, exit: 500 }}
      >
        <div id="rightClickMenuContainer">
          <div id="closeBTN" onClick={this.closeMenu}>
            <img src={exit} alt="Exit" width="35" height="35"></img>
          </div>
          <div>
            <NotePinBTNClass
              showMenu={this.state.mainBTNList.showMainNotePinBTN}
              showSubs={this.state.subBTNList.showSubsNotePinBTNs}
              subButtonCloseAction={this.closeMenu}
              mainButtonActions={this.toggleMainBTNs}
            />
          </div>
          <div>
            <MobsBTNClass
              showMenu={this.state.mainBTNList.showMainMobsBTN}
              showSubs={this.state.subBTNList.showSubsMobsBTNs}
              subButtonCloseAction={this.closeMenu}
              mainButtonActions={this.toggleMainBTNs}
            />
          </div>
          <div>
            <MiningBTNClass
              showMenu={this.state.mainBTNList.showMainMiningBTN}
              showSubs={this.state.subBTNList.showSubsMiningBTNs}
              subButtonCloseAction={this.closeMenu}
              mainButtonActions={this.toggleMainBTNs}
            />
          </div>
          <div>
            <HarvestingBTNClass
              showMenu={this.state.mainBTNList.showMainHarvestingBTN}
              showSubs={this.state.subBTNList.showSubsHarvestingBTNs}
              subButtonCloseAction={this.closeMenu}
              mainButtonActions={this.toggleMainBTNs}
            />
          </div>
          <div>
            <FungiBTNClass
              showMenu={this.state.mainBTNList.showMainFungiBTN}
              showSubs={this.state.subBTNList.showSubsFungiBTNs}
              subButtonCloseAction={this.closeMenu}
              mainButtonActions={this.toggleMainBTNs}
            />
          </div>
          <div>
            <TrackingBTNClass
              showMenu={this.state.mainBTNList.showMainTrackingBTN}
              showSubs={this.state.subBTNList.showSubsTrackingBTNs}
              subButtonCloseAction={this.closeMenu}
              mainButtonActions={this.toggleMainBTNs}
            />
          </div>
          <div>
            <FarmingBTNClass
              showMenu={this.state.mainBTNList.showMainFarmingBTN}
              showSubs={this.state.subBTNList.showSubsFarmingBTNs}
              subButtonCloseAction={this.closeMenu}
              mainButtonActions={this.toggleMainBTNs}
            />
          </div>
          <div>
            <LoggingBTNClass
              showMenu={this.state.mainBTNList.showMainLoggingBTN}
              showSubs={this.state.subBTNList.showSubLoggingBTNs}
              subButtonCloseAction={this.closeMenu}
              mainButtonActions={this.toggleMainBTNs}
            />
          </div>
        </div>
      </Zoom>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trackXY: state.trackXY,
    removeMode: state.removeMode,
  };
};

export default connect(mapStateToProps)(RingMenu);
