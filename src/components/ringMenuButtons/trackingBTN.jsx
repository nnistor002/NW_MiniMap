import "../../styles/ringMenuStyles/TrackingBTNStyle.css";
import { Zoom } from "@mui/material";

import React from "react";
import { connect } from "react-redux";

import animal from "../../images/menuIcons/Animal.png";

class TrackingBtnClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sub_CateLogicBTN = (id, t, c) => {
    /*id = ID --- t = TITLE --- c = CATEGORY */

    let newPin = document.createElement("img", {});
    newPin.src = animal;
    newPin.id = id;
    newPin.className = "iconDiv";
    newPin.style.left = this.props.trackXY[0] - 15 + "px";
    newPin.style.top = this.props.trackXY[1] - 15 + "px";
    newPin.title = t;
    newPin.dataset.category = c;

    document.getElementById("overLayDiv").appendChild(newPin);

    this.props.subButtonCloseAction();
  };

  toggleMainBTN = () => {
    this.props.mainButtonActions("showMainTrackingBTN");
  };

  render() {
    return (
      <div id="cateContainerDiv">
        <Zoom in={this.props.showMenu} timeout={{ enter: 700, exit: 150 }}>
          <div id="trackingBTN" onClick={this.toggleMainBTN}>
            <img
              src={animal}
              alt="Tracking"
              title="Tracking"
              width="42"
              height="42"
            ></img>
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionAlligator"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Alligator_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Alligator",
                "Tracking"
              );
            }}
          >
            Alligator
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionBear"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Bear_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Bear",
                "Tracking"
              );
            }}
          >
            Bear
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionBison"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Bison_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Bison",
                "Tracking"
              );
            }}
          >
            Bison
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionBoar"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Boar_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Boar",
                "Tracking"
              );
            }}
          >
            Boar
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionBobcat"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Bobcat_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Bobcat",
                "Tracking"
              );
            }}
          >
            Bobcat
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionCow"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Cow_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Cow",
                "Tracking"
              );
            }}
          >
            Cow
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionElk"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Elk_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Elk",
                "Tracking"
              );
            }}
          >
            Elk
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionGoat"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Goat_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Goat",
                "Tracking"
              );
            }}
          >
            Goat
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionLion"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Lion_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Lion",
                "Tracking"
              );
            }}
          >
            Lion
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionLynx"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Lynx_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Lynx",
                "Tracking"
              );
            }}
          >
            Lynx
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionPig"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Pig_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Pig",
                "Tracking"
              );
            }}
          >
            Pig
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionRabbit"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Rabbit_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Rabbit",
                "Tracking"
              );
            }}
          >
            Rabbit
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionSheep"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Sheep_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Sheep",
                "Tracking"
              );
            }}
          >
            Sheep
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionTurkey"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Turkey_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Turkey",
                "Tracking"
              );
            }}
          >
            Turkey
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionWolf"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Wolf_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Wolf",
                "Tracking"
              );
            }}
          >
            Wolf
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionForestE"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "ForestElemental_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Forest Elemental",
                "Tracking"
              );
            }}
          >
            Forest Elemental
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionMountainE"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "MountainElemental_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Mountain Elemental",
                "Tracking"
              );
            }}
          >
            Mountain Elemental
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="trackingSubDivOptionTundraE"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "TundraElemental_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Tundra Elemental",
                "Tracking"
              );
            }}
          >
            Tundra Elemental
          </div>
        </Zoom>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    trackXY: state.trackXY,
  };
};

export default connect(mapStateToProps)(TrackingBtnClass);
