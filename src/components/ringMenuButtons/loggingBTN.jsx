import "../../styles/ringMenuStyles/LoggingBTNStyle.css";
import { Zoom } from "@mui/material";

import React from "react";
import { connect } from "react-redux";

import logging from "../../images/menuIcons/Logging.png";

class LoggingBtnClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickAction: this.props.clickAction };
  }

  sub_IronWoodBTN = (id, t, c) => {
    /*id = ID --- t = TITLE --- c = CATEGORY */

    let newPin = document.createElement("img", {});
    newPin.src = logging;
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
    this.props.mainButtonActions("showMainLoggingBTN");
  };

  render() {
    return (
      <div id="cateContainerDiv">
        <Zoom in={this.props.showMenu} timeout={{ enter: 900, exit: 200 }}>
          <div id="loggingBTN" onClick={this.toggleMainBTN}>
            <img
              src={logging}
              alt="Logging"
              title="Logging"
              width="42"
              height="42"
            ></img>
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="loggingSubCatDivWyrdwood"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_IronWoodBTN(
                "WyrdWood_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Wyrd Wood",
                "Logging"
              );
            }}
          >
            Wyrdwood
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="loggingSubCatDivIronwood"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_IronWoodBTN(
                "IronWood_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Iron Wood",
                "Logging"
              );
            }}
          >
            Ironwood
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

export default connect(mapStateToProps)(LoggingBtnClass);
