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
          <div id="harvestingSubDivOptionHemp">Hemp</div>
        </Zoom>

        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionSilkweed">Silkweed</div>
        </Zoom>

        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionWirefiber">Wirefiber</div>
        </Zoom>

        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionBlightroot">Blightroot</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionDragonglory">Dragonglory</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionEarthspine">Earthspine</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionLifebloom">Lifebloom</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionRivercress">Rivercress</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionShockblub">Shockblub</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionSoulspire">Soulspire</div>
        </Zoom>

        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionBlightmoth">Blightmoth</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionEarthshell">Earthshell Turtle</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionFloatingFish">Floating Spinefish</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionLifemoth">Lifemoth</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionLightning">Lightning Beetle</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionSalamander">Salamander Snail</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="harvestingSubDivOptionSoulwyrm">Soulwyrm</div>
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

export default connect(mapStateToProps)(HarvestingBtnClass);
