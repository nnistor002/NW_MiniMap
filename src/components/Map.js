import React from "react";
import "../styles/Map.css";

import fullMap from "../images/New_World_Map_FinalSD.jpg";
import welcomeImg from "../images/WelcomeScreen.png";

import arrow_Up from "../images/icons/ArrowUp.png";
import arrow_Down from "../images/icons/ArrowDown.png";
import arrow_Left from "../images/icons/ArrowLeft.png";
import arrow_Right from "../images/icons/ArrowRight.png";

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
    window.addEventListener("auxclick", (e) => this.handleArchive(e));

    document
      .getElementById("full_Map")
      .addEventListener("mousemove", (e) => this.handleMousePosition(e));

    setTimeout(function () {
      document.getElementById("WelcomeDiv").hidden = true;
    }, 10000);
  }

  componentDidUpdate() {
    this.handleIconScale(
      document.getElementById("full_Map").getBoundingClientRect().width
    );
    this.handleGuidance();
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

  handleArchive(e) {
    // Use offSet x and y to get map exact cords for the overlay...
    let mapOffSetX = e.offsetX;
    let mapOffSetY = e.offsetY;

    console.log(mapOffSetX + " ---- " + mapOffSetY);
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
            translationBounds={this.state.translationBounds}
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
        <div id="WelcomeDiv" hidden={false}>
          <img id="imgWelcome" src={welcomeImg} alt="WelcomeImg" />
        </div>
      </div>
    );
  }
}

export default Map;
