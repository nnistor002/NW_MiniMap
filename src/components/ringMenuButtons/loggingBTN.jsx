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

  sub_CateLogicBTN = (id, t, c) => {
    /*id = ID --- t = TITLE --- c = CATEGORY */

    let newPin = document.createElement("img", {});
    newPin.src = logging;
    newPin.id = id;
    newPin.className = "iconDiv";
    newPin.style.left = this.props.trackXY[0] - 15 + "px";
    newPin.style.top = this.props.trackXY[1] - 15 + "px";
    newPin.title = t;
    newPin.dataset.category = c;
    newPin.onclick = () => {
      if (this.props.removeMode) {
        document.getElementById("overLayDiv").removeChild(newPin);
        this.props.removePinFromDataSet(c, t, [
          this.props.trackXY[0] - 15,
          this.props.trackXY[1] - 15,
        ]);
      }
    };

    this.props.addPinToDataSet(c, t, [
      this.props.trackXY[0] - 15,
      this.props.trackXY[1] - 15,
    ]);

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
              this.sub_CateLogicBTN(
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
              this.sub_CateLogicBTN(
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
    removeMode: state.removeMode,
    dataSet: state.dataSet,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addPinToDataSet: (cate, subCate, l) =>
    dispatch({
      type: "APPENDDATA",
      payload: [cate, subCate, l],
    }),
  removePinFromDataSet: (cate, subCate, l) =>
    dispatch({
      type: "REMOVEDATA",
      payload: [cate, subCate, l],
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggingBtnClass);
