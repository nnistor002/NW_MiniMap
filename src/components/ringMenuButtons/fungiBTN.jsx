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
          <div id="fungiSubDivOptionBumbleblossom">Bumbleblossom</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="fungiSubDivOptionCappedTanglewisp">Capped Tanglewisp</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="fungiSubDivOptionCascadedgillflower">
            Cascaded Gillflower
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="fungiSubDivOptionCorruptedbloodspore">
            Corrupted Bloodspore
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="fungiSubDivOptionFloweringtubecap">Flowering Tubecap</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="fungiSubDivOptionFrondedpetalcap">Fronded Petalcap</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="fungiSubDivOptionSlimytwistcap">Slimy Twistcap</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="fungiSubDivOptionSpinecap">Spinecap</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="fungiSubDivOptionSuncreeper">Suncreeper</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="fungiSubDivOptionTanglewisp">Tanglewisp</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="fungiSubDivOptionTendrilspine">Tendrilspine</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="fungiSubDivOptionToadpot">Toadpot</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="fungiSubDivOptionTwistedtubecap">Twisted Tubecap</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="fungiSubDivOptionVoidpitcher">Void Pitcher</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="fungiSubDivOptionWarmplatecap">Warm Platecap</div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div id="fungiSubDivOptionWeepingshellbed">Weeping Shellbed</div>
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
