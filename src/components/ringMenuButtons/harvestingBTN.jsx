import "../../styles/ringMenuStyles/HarvestingBTNStyle.css";
import { Zoom } from "@mui/material";

import React from "react";
import { connect } from "react-redux";

import harvesting from "../../images/menuIcons/Harvesting.png";

class HarvestingBtnClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sub_CateLogicBTN = (id, t, c) => {
    /*id = ID --- t = TITLE --- c = CATEGORY */

    let newPin = document.createElement("img", {});
    newPin.src = harvesting;
    newPin.id = id;
    newPin.className = "iconDiv";
    newPin.style.left = this.props.trackXY[0] - 15 + "px";
    newPin.style.top = this.props.trackXY[1] - 15 + "px";
    newPin.title = t;
    newPin.dataset.category = c;
    newPin.onclick = () => {
      if (this.props.removeMode) {
        document.getElementById("overLayDiv").removeChild(newPin);
      }
    };

    document.getElementById("overLayDiv").appendChild(newPin);

    this.props.subButtonCloseAction();
  };

  toggleMainBTN = () => {
    this.props.mainButtonActions("showMainHarvestingBTN");
  };

  render() {
    return (
      <div id="cateContainerDiv">
        <Zoom in={this.props.showMenu} timeout={{ enter: 500, exit: 250 }}>
          <div id="harvestingBTN" onClick={this.toggleMainBTN}>
            <img
              src={harvesting}
              alt="Harvesting"
              title="Harvesting"
              width="42"
              height="42"
            ></img>
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <h2 id="harvestingSubDivStandard">Standard</h2>
        </Zoom>

        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <h2 id="harvestingSubDivMagical">Magical</h2>
        </Zoom>

        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <h2 id="harvestingSubDivCreatures">Creatures</h2>
        </Zoom>

        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionHemp"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Hemp_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Hemp",
                "Harvesting"
              );
            }}
          >
            Hemp
          </div>
        </Zoom>

        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionSilkweed"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Silkweed_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Silkweed",
                "Harvesting"
              );
            }}
          >
            Silkweed
          </div>
        </Zoom>

        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionWirefiber"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Wirefiber_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Wirefiber",
                "Harvesting"
              );
            }}
          >
            Wirefiber
          </div>
        </Zoom>

        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionBlightroot"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Blightroot_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Blightroot",
                "Harvesting"
              );
            }}
          >
            Blightroot
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionDragonglory"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Dragonglory_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Dragonglory",
                "Harvesting"
              );
            }}
          >
            Dragonglory
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionEarthspine"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Earthspine_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Earthspine",
                "Harvesting"
              );
            }}
          >
            Earthspine
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionLifebloom"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Lifebloom_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Lifebloom",
                "Harvesting"
              );
            }}
          >
            Lifebloom
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionRivercress"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Rivercress_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Rivercress",
                "Harvesting"
              );
            }}
          >
            Rivercress
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionShockblub"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Shockblub_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Shockblub",
                "Harvesting"
              );
            }}
          >
            Shockblub
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionSoulspire"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Soulspire_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Soulspire",
                "Harvesting"
              );
            }}
          >
            Soulspire
          </div>
        </Zoom>

        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionBlightmoth"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Blightmoth_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Blightmoth",
                "Harvesting"
              );
            }}
          >
            Blightmoth
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionEarthshell"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "EarthshellTurtle_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Earthshell Turtle",
                "Harvesting"
              );
            }}
          >
            Earthshell Turtle
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionFloatingFish"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "FloatingSpinefish_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Floating Spinefish",
                "Harvesting"
              );
            }}
          >
            Floating Spinefish
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionLifemoth"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Lifemoth_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Lifemoth",
                "Harvesting"
              );
            }}
          >
            Lifemoth
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionLightning"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "LightningBeetle_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Lightning Beetle",
                "Harvesting"
              );
            }}
          >
            Lightning Beetle
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionSalamander"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "SalamanderSnail_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Salamander Snail",
                "Harvesting"
              );
            }}
          >
            Salamander Snail
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="harvestingSubDivOptionSoulwyrm"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Soulwyrm_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Soulwyrm",
                "Harvesting"
              );
            }}
          >
            Soulwyrm
          </div>
        </Zoom>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    trackXY: state.trackXY,
    removeMode: state.removeMode,
  };
};

export default connect(mapStateToProps)(HarvestingBtnClass);
