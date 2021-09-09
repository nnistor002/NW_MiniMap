import React from "react";
import "../styles/Map.css";

import fullMap from "../images/New_World_Map_FinalSD.jpg";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionMouseX: "",
      positionMouseY: "",
      zoomX: 1000,
      zoomY: 1000,
    };
  }

  componentDidMount() {}

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

  handleScrollZooming() {
    console.log("Scrolling...");
  }

  render() {
    return (
      <div id="map_div">
        <div id="view_window">
          <img
            id="full_Map"
            src={fullMap}
            alt="??"
            onMouseMove={(e) => this.handleMousePosition(e)}
          />
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
