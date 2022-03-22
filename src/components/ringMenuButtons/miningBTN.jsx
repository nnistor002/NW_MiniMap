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

  sub_CateLogicBTN = (id, t, c) => {
    /*id = ID --- t = TITLE --- c = CATEGORY */

    let newPin = document.createElement("img", {});
    newPin.src = mining;
    newPin.id = id;
    newPin.className = "iconDiv";
    newPin.style.left = this.props.trackXY[0] - 15 + "px";
    newPin.style.top = this.props.trackXY[1] - 15 + "px";
    newPin.title = t;
    newPin.dataset.category = c;
    newPin.onclick = () => {
      if (this.props.removeMode) {
        document.getElementById("overLayDiv").removeChild(newPin);
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
          <div
            id="miningSubDivOptionSalt"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Saltpeter_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Saltpeter",
                "Mining"
              );
            }}
          >
            Saltpeter
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="miningSubDivOptionIron"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Iron_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Iron",
                "Mining"
              );
            }}
          >
            Iron
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 100, exit: 200 }}>
          <div
            id="miningSubDivOptionSilver"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Silver_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Silver",
                "Mining"
              );
            }}
          >
            Silver
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 300, exit: 200 }}>
          <div
            id="miningSubDivOptionGold"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Gold_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Gold",
                "Mining"
              );
            }}
          >
            Gold
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="miningSubDivOptionStarmetal"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Starmetal_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Starmetal",
                "Mining"
              );
            }}
          >
            Starmetal
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 100, exit: 200 }}>
          <div
            id="miningSubDivOptionLodestone"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Lodestone_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Lodestone",
                "Mining"
              );
            }}
          >
            Lodestone
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 300, exit: 200 }}>
          <div
            id="miningSubDivOptionPlatinum"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Platinum_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Platinum",
                "Mining"
              );
            }}
          >
            Platinum
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="miningSubDivOptionOrichalcum"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Orichalcum_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Orichalcum",
                "Mining"
              );
            }}
          >
            Orichalcum
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 100, exit: 200 }}>
          <div
            id="miningSubDivOptionSeepingStone"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Seepingstone_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "SeepingStone",
                "Mining"
              );
            }}
          >
            SeepingStone
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 100, exit: 200 }}>
          <div
            id="miningSubDivOptionBlightcrag"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Blightcrag_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Blightcrag",
                "Mining"
              );
            }}
          >
            Blightcrag
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 100, exit: 200 }}>
          <div
            id="miningSubDivOptionLifecrag"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Lifecrag_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Lifecrag",
                "Mining"
              );
            }}
          >
            Lifecrag
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="miningSubDivOptionEarthcrag"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Earthcrag_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Earthcrag",
                "Mining"
              );
            }}
          >
            Earthcrag
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="miningSubDivOptionSoulspire"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Soulspire_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Soulspire",
                "Mining"
              );
            }}
          >
            Soulspire
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 300, exit: 200 }}>
          <div
            id="miningSubDivOptionShockspire"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Shockspire_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Shockspire",
                "Mining"
              );
            }}
          >
            Shockspire
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 300, exit: 200 }}>
          <div
            id="miningSubDivOptionScorchstone"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Scorchstone_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Scorchstone",
                "Mining"
              );
            }}
          >
            Scorchstone
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 400, exit: 200 }}>
          <div
            id="miningSubDivOptionSpringstone"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Springstone_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Springstone",
                "Mining"
              );
            }}
          >
            Springstone
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  addPinToDataSet: (cate, subCate, l) =>
    dispatch({
      type: "APPENDDATA",
      payload: [cate, subCate, l],
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MiningBtnClass);
