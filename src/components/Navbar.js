import React from "react";
import "../styles/Navbar.css";
import Zoom from "@mui/material/Zoom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFor: "",
      numb: 1,
      x: 2000,
      y: 2000,
      showFilterBTNs: false,
    };
    // this.testSpawnIcon = this.testSpawnIcon.bind(this);
  }

  // testSpawnIcon() {
  //   let overlayContainer = document.getElementById("overLayDiv");
  //   let oldX = this.state.x;
  //   let oldY = this.state.y;
  //   let oldnumb = this.state.numb;

  //   let newDiv = document.createElement("div");
  //   newDiv.id = "testIcon" + oldnumb;
  //   newDiv.className = "iconDiv";
  //   newDiv.style.top = oldX + "px";
  //   newDiv.style.left = oldY + "px";
  //   newDiv.style.backgroundColor = "blue";

  //   this.setState({
  //     x: oldX + 200,
  //     y: oldY + 200,
  //     numb: oldnumb + 1,
  //   });

  //   overlayContainer.appendChild(newDiv);
  // }

  showFilters = () => {
    let state = this.state.showFilterBTNs;
    this.setState({
      showFilterBTNs: !state,
    });
  };

  render() {
    return (
      <div id="navBarContainer">
        <div id="nav_bar">
          <div id="toggle_div">
            <button id="toggle_BTN" onClick={this.showFilters}>
              ----------- Toggle Menu -----------
            </button>
          </div>
        </div>

        <Zoom
          in={this.state.showFilterBTNs}
          timeout={{ enter: 100, exit: 700 }}
        >
          <div id="mainContainer">
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 300, exit: 300 }}
            >
              <div>
                <button className="filterBtnCate">Notes</button>
              </div>
            </Zoom>
            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 300, exit: 300 }}
            >
              <button className="filterBtnCate">Mobs</button>
            </Zoom>
            <Zoom in={this.state.showFilterBTNs}>
              <div className="box">
                <button className="filterBtn">Standard Mob</button>
                <button className="filterBtn">Elite Mob</button>
              </div>
            </Zoom>
            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 300, exit: 300 }}
            >
              <button className="filterBtnCate">Mining</button>
            </Zoom>
            <Zoom in={this.state.showFilterBTNs}>
              <div className="box">
                <button className="filterBtn">1</button>
                <button className="filterBtn">2</button>
                <button className="filterBtn">3</button>
                <button className="filterBtn">4</button>
                <button className="filterBtn">5</button>
                <button className="filterBtn">6</button>
                <button className="filterBtn">7</button>
                <button className="filterBtn">8</button>
                <button className="filterBtn">9</button>
                <button className="filterBtn">10</button>
                <button className="filterBtn">11</button>
                <button className="filterBtn">12</button>
                <button className="filterBtn">13</button>
                <button className="filterBtn">14</button>
                <button className="filterBtn">15</button>
                <button className="filterBtn">16</button>
              </div>
            </Zoom>
            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 300, exit: 300 }}
            >
              <button className="filterBtnCate">Harvesting</button>
            </Zoom>
            <Zoom in={this.state.showFilterBTNs}>
              <div className="box">
                <button className="filterBtn">1</button>
                <button className="filterBtn">2</button>
                <button className="filterBtn">3</button>
                <button className="filterBtn">4</button>
                <button className="filterBtn">5</button>
                <button className="filterBtn">6</button>
                <button className="filterBtn">7</button>
                <button className="filterBtn">8</button>
                <button className="filterBtn">9</button>
                <button className="filterBtn">10</button>
                <button className="filterBtn">11</button>
                <button className="filterBtn">12</button>
                <button className="filterBtn">13</button>
                <button className="filterBtn">14</button>
                <button className="filterBtn">15</button>
                <button className="filterBtn">16</button>
                <button className="filterBtn">17</button>
              </div>
            </Zoom>
            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 300, exit: 300 }}
            >
              <button className="filterBtnCate">Fungi</button>
            </Zoom>
            <Zoom in={this.state.showFilterBTNs}>
              <div className="box">
                <button className="filterBtn">1</button>
                <button className="filterBtn">2</button>
                <button className="filterBtn">3</button>
                <button className="filterBtn">4</button>
                <button className="filterBtn">5</button>
                <button className="filterBtn">6</button>
                <button className="filterBtn">7</button>
                <button className="filterBtn">8</button>
                <button className="filterBtn">9</button>
                <button className="filterBtn">10</button>
                <button className="filterBtn">11</button>
                <button className="filterBtn">12</button>
                <button className="filterBtn">13</button>
                <button className="filterBtn">14</button>
                <button className="filterBtn">15</button>
                <button className="filterBtn">16</button>
              </div>
            </Zoom>
            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 300, exit: 300 }}
            >
              <button className="filterBtnCate">Tracking</button>
            </Zoom>
            <Zoom in={this.state.showFilterBTNs}>
              <div className="box">
                <button className="filterBtn">Alligator</button>
                <button className="filterBtn">Bear</button>
                <button className="filterBtn">Bison</button>
                <button className="filterBtn">Boar</button>
                <button className="filterBtn">Bobcat</button>
                <button className="filterBtn">Cow</button>
                <button className="filterBtn">Elk</button>
                <button className="filterBtn">Goat</button>
                <button className="filterBtn">Lion</button>
                <button className="filterBtn">Lynx</button>
                <button className="filterBtn">Pig</button>
                <button className="filterBtn">Rabbit</button>
                <button className="filterBtn">Sheep</button>
                <button className="filterBtn">Turkey</button>
                <button className="filterBtn">Wolf</button>
                <button className="filterBtn">Forest Elemental</button>
                <button className="filterBtn">Mountain Elemental</button>
                <button className="filterBtn">Tundra Elemental</button>
              </div>
            </Zoom>
            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 300, exit: 300 }}
            >
              <button className="filterBtnCate">Farming</button>
            </Zoom>
            <Zoom in={this.state.showFilterBTNs}>
              <div className="box">
                <button className="filterBtn">1</button>
                <button className="filterBtn">2</button>
                <button className="filterBtn">3</button>
                <button className="filterBtn">4</button>
                <button className="filterBtn">5</button>
                <button className="filterBtn">6</button>
                <button className="filterBtn">7</button>
                <button className="filterBtn">8</button>
                <button className="filterBtn">9</button>
                <button className="filterBtn">10</button>
                <button className="filterBtn">11</button>
                <button className="filterBtn">12</button>
                <button className="filterBtn">13</button>
                <button className="filterBtn">14</button>
                <button className="filterBtn">15</button>
                <button className="filterBtn">16</button>
              </div>
            </Zoom>
            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 300, exit: 300 }}
            >
              <button className="filterBtnCate">Logging</button>
            </Zoom>
            <Zoom in={this.state.showFilterBTNs}>
              <div className="box">
                <button className="filterBtn">1</button>
                <button className="filterBtn">2</button>
              </div>
            </Zoom>
          </div>
        </Zoom>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataSet,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateDataSet: (importJSONData) =>
    dispatch({ type: "UPLOAD", payload: importJSONData }),
});

export default connect(mapStateToProps, mapDispatchToProps())(Navbar);
