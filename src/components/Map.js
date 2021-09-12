import React from "react";
import "../styles/Map.css";

import fullMap from "../images/New_World_Map_FinalSD.jpg";

import { MapInteractionCSS } from "react-map-interaction";

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
    };
  }

  componentDidMount() {
    document
      .getElementById("full_Map")
      .addEventListener("mousemove", (e) => this.handleMousePosition(e));
  }

  componentDidUpdate() {
    this.handleIconScale(
      document.getElementById("full_Map").getBoundingClientRect().width
    );
  }

  handleMousePosition(e) {
    let element = document.getElementById("full_Map");

    let rect = element.getBoundingClientRect();

    let x = Math.round(e.clientX - rect.left);
    let y = Math.round(e.clientY - rect.top);

    if (x < 0) {
      x = 0;
    }

    if (y < 0) {
      y = 0;
    }

    this.setState({
      positionMouseX: x,
      positionMouseY: y,
    });
  }

  handleIconScale(newMapWH) {
    let iconArray = document.getElementsByClassName("iconDiv");

    if (newMapWH > 750 && newMapWH < 1250) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(4)";
      }
    }
    if (newMapWH > 1250 && newMapWH < 1750) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(3)";
      }
    }
    if (newMapWH > 1750 && newMapWH < 2500) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(2.5)";
      }
    }
    if (newMapWH > 2500 && newMapWH < 3700) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(2)";
      }
    }
    if (newMapWH > 3700 && newMapWH < 4500) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(1.5)";
      }
    }
    if (newMapWH > 4500 && newMapWH < 6100) {
      for (let x = 0; x < iconArray.length; x++) {
        iconArray[x].style.transform = "scale(1)";
      }
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
            <div
              id="overLayDiv"
              width={this.state.imgSize}
              height={this.state.imgSize}
            >
              <div className="iconDiv" id="testIcon"></div>
              <div className="iconDiv" id="testIconOne"></div>
              <div className="iconDiv" id="testIconTwo"></div>
              <div className="iconDiv" id="testIconThree"></div>
              <div className="iconDiv" id="testIconFour"></div>
            </div>
            <img
              id="full_Map"
              src={fullMap}
              alt="??"
              width={this.state.imgSize}
              height={this.state.imgSize}
            />
          </MapInteractionCSS>
          <div id="cord_div">
            <h2>
              {this.state.positionMouseX} - {this.state.positionMouseY}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
