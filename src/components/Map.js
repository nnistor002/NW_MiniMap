import React from "react";
import "../styles/Map.css";

import fullMap from "../images/New_World_Map_FinalSD_EDIT.jpg";

import arrow_Up from "../images/icons/ArrowUp.png";
import arrow_Down from "../images/icons/ArrowDown.png";
import arrow_Left from "../images/icons/ArrowLeft.png";
import arrow_Right from "../images/icons/ArrowRight.png";

import { MapInteractionCSS } from "react-map-interaction";

import { connect } from "react-redux";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionMouseX: "",
      positionMouseY: "",
      imgSize: 5000,
      value: {
        scale: 1,
        translation: {
          x: 0,
          y: 0,
        },
      },
      mapXCoord: 0,
      mapYCoord: 0,
      removeMode: true,
    };
  }

  componentDidMount() {
    document
      .getElementById("full_Map")
      .addEventListener("mousemove", (e) => this.handleMousePosition(e));

    document
      .getElementById("full_Map")
      .addEventListener("auxclick", (e) => this.handleMiddleClickMenu(e));
  }

  componentDidUpdate() {
    this.handleIconScale(
      document.getElementById("full_Map").getBoundingClientRect().width
    );
    this.handleGuidance();
  }

  handleMiddleClickMenu(e) {
    if (e.button === 1) {
      let clickCoords = [this.state.mapXCoord, this.state.mapYCoord];

      this.props.updateCoords(clickCoords);
    }
  }

  handleMousePosition(e) {
    let x = Math.round(e.offsetX);
    let y = Math.round(e.offsetY);

    if (x < 0) {
      x = 0;
    }

    if (y < 0) {
      y = 0;
    }

    this.setState({
      positionMouseX: x,
      positionMouseY: y,
      mapXCoord: e.offsetX,
      mapYCoord: e.offsetY,
    });
  }

  handleIconScale(newMapWH) {
    let iconArray = document.getElementsByClassName("iconDiv");

    if (newMapWH > 750 && newMapWH < 1250) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(4.2)";
      }
    }
    if (newMapWH > 1250 && newMapWH < 1750) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(3.2)";
      }
    }
    if (newMapWH > 1750 && newMapWH < 2500) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(2.7)";
      }
    }
    if (newMapWH > 2500 && newMapWH < 3700) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(2.2)";
      }
    }
    if (newMapWH > 3700 && newMapWH < 4500) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(1.7)";
      }
    }
    if (newMapWH > 4500 && newMapWH < 6100) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(1.2)";
      }
    }
  }

  handleGuidance() {
    let bounds = document.getElementById("full_Map").getBoundingClientRect();

    if (bounds.top > 900) {
      document.getElementById("arrowDown").hidden = false;
    } else {
      document.getElementById("arrowDown").hidden = true;
    }

    if (bounds.bottom < 1) {
      document.getElementById("arrowUp").hidden = false;
    } else {
      document.getElementById("arrowUp").hidden = true;
    }

    if (bounds.left > 1200) {
      document.getElementById("arrowRight").hidden = false;
    } else {
      document.getElementById("arrowRight").hidden = true;
    }

    if (bounds.right < 1) {
      document.getElementById("arrowLeft").hidden = false;
    } else {
      document.getElementById("arrowLeft").hidden = true;
    }
  }

  render() {
    return (
      <div id="map_div">
        <div id="view_window">
          <MapInteractionCSS
            id="nav"
            value={this.state.value}
            onChange={(value) => this.setState({ value })}
            minScale={0.2}
            maxScale={1}
          >
            {/* This is where the div icons will be placed */}
            <div
              id="overLayDiv"
              width={this.state.imgSize}
              height={this.state.imgSize}
            ></div>
            <img
              id="full_Map"
              src={fullMap}
              alt="Aeternum"
              width={this.state.imgSize}
              height={this.state.imgSize}
            />
          </MapInteractionCSS>
          <div id="cord_div">
            <h2>
              {this.state.positionMouseX} - {this.state.positionMouseY}
            </h2>
          </div>
          <div id="arrowUp" hidden={true}>
            <img src={arrow_Up} alt="arrUp" />
          </div>
          <div id="arrowDown" hidden={true}>
            <img src={arrow_Down} alt="arrDown" />
          </div>
          <div id="arrowLeft" hidden={true}>
            <img src={arrow_Left} alt="arrLeft" />
          </div>
          <div id="arrowRight" hidden={true}>
            <img src={arrow_Right} alt="arrRight" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataSet,
    removeMode: state.removeMode,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateCoords: (clickCoords) =>
    dispatch({ type: "UPDATECOORD", payload: clickCoords }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
