import "../../styles/ringMenuStyles/MobBTNStyle.css";
import { Zoom } from "@mui/material";

import React from "react";
import { connect } from "react-redux";

import mobs from "../../images/menuIcons/Mobs.png";

class MobBtnClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputName: "" };
  }

  sub_CateLogicBTN = (id, t, c) => {
    /*id = ID --- t = TITLE --- c = CATEGORY */

    if (this.state.inputName !== "") {
      let newPin = document.createElement("img", {});
      newPin.src = mobs;
      newPin.id = id;
      newPin.className = "iconDiv";
      newPin.style.left = this.props.trackXY[0] - 15 + "px";
      newPin.style.top = this.props.trackXY[1] - 15 + "px";
      newPin.title = t;
      newPin.dataset.category = c;

      document.getElementById("overLayDiv").appendChild(newPin);

      this.setState({
        inputName: "",
      });

      this.props.subButtonCloseAction();
    }
  };

  handleMobDivInput = (e) => {
    this.setState({
      inputName: e.target.value,
    });
  };

  toggleMainBTN = () => {
    this.props.mainButtonActions("showMainMobsBTN");
  };

  render() {
    return (
      <div id="cateContainerDiv">
        <Zoom in={this.props.showMenu} timeout={{ enter: 300, exit: 350 }}>
          <div id="mobBTN" onClick={this.toggleMainBTN}>
            <img
              src={mobs}
              alt="Mobs"
              title="Mobs & Elites"
              width="42"
              height="42"
            ></img>
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="mobSubDivOption1"
            onClick={() => {
              //ID, TITLE, CATEGORY
              var mobName = this.state.inputName;

              this.sub_CateLogicBTN(
                "MobStandard_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Standard Mob - " + mobName,
                "Mobs"
              );
            }}
          >
            Mob
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="mobSubDivOption2"
            onClick={() => {
              var mobName = this.state.inputName;
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "MobElite_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Elite Mob - " + mobName,
                "Mobs"
              );
            }}
          >
            Elite
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <input
            id="mobSubDivInput"
            placeholder="Input Name..."
            type="text"
            value={this.state.inputName}
            onChange={this.handleMobDivInput}
          />
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

export default connect(mapStateToProps)(MobBtnClass);
