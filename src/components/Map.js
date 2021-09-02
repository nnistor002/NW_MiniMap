import React from "react";
import "../styles/Map.css";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionMouseX: "",
      positionMouseY: "",
    };
  }

  handleMousePosition(e) {
    let canvasElement = document.getElementById("map_container");

    let rect = canvasElement.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    this.setState({
      positionMouseX: x,
      positionMouseY: y,
    });
  }

  render() {
    return (
      <div id="map_div">
        <p>
          {this.state.positionMouseX} - {this.state.positionMouseY}
        </p>
        <canvas
          id="map_container"
          onMouseMove={(e) => this.handleMousePosition(e)}
        ></canvas>
      </div>
    );
  }
}

export default Map;
