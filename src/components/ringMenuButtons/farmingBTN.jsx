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

  sub_CateLogicBTN = (id, t, c) => {
    /*id = ID --- t = TITLE --- c = CATEGORY */

    let newPin = document.createElement("img", {});
    newPin.src = farming;
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
          <div
            id="farmingSubDivOptionBarley"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Barley_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Barley",
                "Farming"
              );
            }}
          >
            Barley
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="farmingSubDivOptionBerry"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Berry_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Berry",
                "Farming"
              );
            }}
          >
            Berry
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="farmingSubDivOptionBlueberry"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Blueberry_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Blueberry",
                "Farming"
              );
            }}
          >
            Blueberry
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="farmingSubDivOptionBroccoli"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Broccoli_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Broccoli",
                "Farming"
              );
            }}
          >
            Broccoli
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="farmingSubDivOptionCabbage"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Cabbage_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Cabbage",
                "Farming"
              );
            }}
          >
            Cabbage
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="farmingSubDivOptionCarrot"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Carrot_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Carrot",
                "Farming"
              );
            }}
          >
            Carrot
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="farmingSubDivOptionCorn"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Corn_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Corn",
                "Farming"
              );
            }}
          >
            Corn
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="farmingSubDivOptionCranberries"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Cranberries_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Cranberries",
                "Farming"
              );
            }}
          >
            Cranberries
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="farmingSubDivOptionHerbs"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Herbs_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Herbs",
                "Farming"
              );
            }}
          >
            Herbs
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="farmingSubDivOptionHoney"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Honey_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Honey",
                "Farming"
              );
            }}
          >
            Honey
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="farmingSubDivOptionMelon"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Melon_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Melon",
                "Farming"
              );
            }}
          >
            Melon
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="farmingSubDivOptionNuts"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Nuts_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Nuts",
                "Farming"
              );
            }}
          >
            Nuts
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="farmingSubDivOptionPotato"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Potato_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Potato",
                "Farming"
              );
            }}
          >
            Potato
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="farmingSubDivOptionSquash"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Squash_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Squash",
                "Farming"
              );
            }}
          >
            Squash
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="farmingSubDivOptionStrawberry"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Strawberry_" +
                  this.props.trackXY[0] +
                  "-" +
                  this.props.trackXY[1],
                "Strawberry",
                "Farming"
              );
            }}
          >
            Strawberry
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
          <div
            id="farmingSubDivOptionWheat"
            onClick={() => {
              //ID, TITLE, CATEGORY
              this.sub_CateLogicBTN(
                "Wheat_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                "Wheat",
                "Farming"
              );
            }}
          >
            Wheat
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

export default connect(mapStateToProps, mapDispatchToProps)(FarmingBtnClass);
