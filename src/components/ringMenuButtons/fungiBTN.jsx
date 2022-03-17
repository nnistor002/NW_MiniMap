import "../../styles/ringMenuStyles/FungiBTNStyle.css";
import { Zoom } from "@mui/material";

import React from "react";
import { connect } from "react-redux";

import fungi from "../../images/menuIcons/Fungi.png";

class FungiBtnClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sub_CateLogicBTN = (id, t, c) => {
    /*id = ID --- t = TITLE --- c = CATEGORY */

    let newPin = document.createElement("img", {});
    newPin.src = fungi;
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
    this.props.mainButtonActions("showMainFungiBTN");
  };

  render() {
    return (
      <div id="cateContainerDiv">
        <Zoom in={this.props.showMenu} timeout={{ enter: 600, exit: 50 }}>
          <div id="fungiBTN" onClick={this.toggleMainBTN}>
            <img
              src={fungi}
              alt="Fungi"
              title="Fungi"
              width="42"
              height="42"
            ></img>
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionBumbleblossom"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Bumbleblossom_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Bumbleblossom",
                "Fungi"
              );
            }}
          >
            Bumbleblossom
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionCappedTanglewisp"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "CappedTanglewisp_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Capped Tanglewisp",
                "Fungi"
              );
            }}
          >
            Capped Tanglewisp
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionCascadedgillflower"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "CascadedGillflower_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Cascaded Gillflower",
                "Fungi"
              );
            }}
          >
            Cascaded Gillflower
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionCorruptedbloodspore"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "CorruptedBloodspore_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Corrupted Bloodspore",
                "Fungi"
              );
            }}
          >
            Corrupted Bloodspore
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionFloweringtubecap"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "FloweringTubecap_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Flowering Tubecap",
                "Fungi"
              );
            }}
          >
            Flowering Tubecap
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionFrondedpetalcap"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "FrondedPetalcap_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Fronded Petalcap",
                "Fungi"
              );
            }}
          >
            Fronded Petalcap
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionSlimytwistcap"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "SlimyTwistcap_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Slimy Twistcap",
                "Fungi"
              );
            }}
          >
            Slimy Twistcap
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionSpinecap"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Spinecap_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Spinecap",
                "Fungi"
              );
            }}
          >
            Spinecap
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionSuncreeper"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Suncreeper_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Suncreeper",
                "Fungi"
              );
            }}
          >
            Suncreeper
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionTanglewisp"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "UncappedTanglewisp_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Tanglewisp",
                "Fungi"
              );
            }}
          >
            Tanglewisp
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionTendrilspine"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Tendrilspine_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Tendrilspine",
                "Fungi"
              );
            }}
          >
            Tendrilspine
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionToadpot"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Toadpot_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Toadpot",
                "Fungi"
              );
            }}
          >
            Toadpot
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionTwistedtubecap"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "TwistedTubecap_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Twisted Tubecap",
                "Fungi"
              );
            }}
          >
            Twisted Tubecap
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionVoidpitcher"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "VoidPitcher_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Void Pitcher",
                "Fungi"
              );
            }}
          >
            Void Pitcher
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionWarmplatecap"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "WarmPlatecap_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Warm Platecap",
                "Fungi"
              );
            }}
          >
            Warm Platecap
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="fungiSubDivOptionWeepingshellbed"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "WeepingShellbed_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Weeping Shellbed",
                "Fungi"
              );
            }}
          >
            Weeping Shellbed
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

export default connect(mapStateToProps)(FungiBtnClass);
