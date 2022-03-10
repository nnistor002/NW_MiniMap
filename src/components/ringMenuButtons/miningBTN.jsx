import "../../styles/ringMenuStyles/MiningBTNStyle.css";
import { Zoom } from "@mui/material";

import React from "react";
import { connect } from "react-redux";

import mining from "../../images/menuIcons/Mining.png";

class MiningBtnClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleMainBTN = () => {
    this.props.mainButtonActions("showMainMiningBTN");
  };

  render() {
    return (
      <div id="cateContainerDiv">
        <Zoom in={this.props.showMenu} timeout={{ enter: 400, exit: 300 }}>
          <div id="miningBTN" onClick={this.toggleMainBTN}>
            <img
              src={mining}
              alt="Mining"
              title="Mining"
              width="42"
              height="42"
            ></img>
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <h2 id="miningSubDivOreTitle">Standard Ores</h2>
        </Zoom>

        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <h2 id="miningSubDivElementalTitle">Elemental Ore</h2>
        </Zoom>

        <Zoom in={this.props.showSubs} timeout={{ enter: 300, exit: 200 }}>
          <div id="miningSubDivOptionSalt">Saltpeter</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="miningSubDivOptionIron"
            onClick={() => {
              console.log("IRON!!!!!");
            }}
          >
            Iron
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 100, exit: 200 }}>
          <div id="miningSubDivOptionSilver">Silver</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 300, exit: 200 }}>
          <div id="miningSubDivOptionGold">Gold</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="miningSubDivOptionStarmetal">Starmetal</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 100, exit: 200 }}>
          <div id="miningSubDivOptionLodestone">Lodestone</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 300, exit: 200 }}>
          <div id="miningSubDivOptionPlatinum">Platinum</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="miningSubDivOptionOrichalcum">Orichalcum</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 100, exit: 200 }}>
          <div id="miningSubDivOptionSeepingStone">SeepingStone</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 100, exit: 200 }}>
          <div id="miningSubDivOptionBlightcrag">Blightcrag</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 100, exit: 200 }}>
          <div id="miningSubDivOptionLifecrag">Lifecrag</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="miningSubDivOptionEarthcrag">Earthcrag</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="miningSubDivOptionSoulspire">Soulspire</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 300, exit: 200 }}>
          <div id="miningSubDivOptionShockspire">Shockspire</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 300, exit: 200 }}>
          <div id="miningSubDivOptionScorchstone">Scorchstone</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 400, exit: 200 }}>
          <div id="miningSubDivOptionSpringstone">Springstone</div>
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

export default connect(mapStateToProps)(MiningBtnClass);
