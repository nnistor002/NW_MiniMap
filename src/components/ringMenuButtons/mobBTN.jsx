import "../../styles/ringMenuStyles/MobBTNStyle.css";
import { Zoom } from "@mui/material";

import React from "react";
import { connect } from "react-redux";

import mobs from "../../images/menuIcons/Mobs.png";

class MobBtnClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
          <div id="mobSubDivOption1">Mob</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="mobSubDivOption2">Elite</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <input
            id="mobSubDivInput"
            placeholder="Input Name..."
            type="text"
            value={this.state.mobSubDivInput}
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
