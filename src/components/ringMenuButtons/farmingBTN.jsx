import "../../styles/ringMenuStyles/FarmingBTNStyle.css";
import { Zoom } from "@mui/material";

import React from "react";
import { connect } from "react-redux";

import farming from "../../images/menuIcons/Farming.png";

class FarmingBtnClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleMainBTN = () => {
    this.props.mainButtonActions("showMainFarmingBTN");
  };

  render() {
    return (
      <div id="cateContainerDiv">
        <Zoom in={this.props.showMenu} timeout={{ enter: 800, exit: 100 }}>
          <div id="farmingBTN" onClick={this.toggleMainBTN}>
            <img
              src={farming}
              alt="Farming"
              title="Farming"
              width="42"
              height="42"
            ></img>
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <h2 id="farmingSubDivVegetables">Vegetables</h2>
        </Zoom>

        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <h2 id="farmingSubDivFruits">Fruits</h2>
        </Zoom>

        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionBarley">Barley</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionBerry">Berry</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionBlueberry">Blueberry</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionBroccoli">Broccoli</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionCabbage">Cabbage</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionCarrot">Carrot</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionCorn">Corn</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionCranberries">Cranberries</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionHerbs">Herbs</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionHoney">Honey</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionMelon">Melon</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionNuts">Nuts</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionPotato">Potato</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionSquash">Squash</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionStrawberry">Strawberry</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="farmingSubDivOptionWheat">Wheat</div>
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

export default connect(mapStateToProps)(FarmingBtnClass);
