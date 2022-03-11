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
              ----------- Toggle Filter Menu -----------
            </button>
          </div>
        </div>

        <Zoom
          in={this.state.showFilterBTNs}
          timeout={{ enter: 100, exit: 500 }}
        >
          <div id="mainContainer">
            <div id="lessSubCateDivContainer">
              <div id="innerLessSubCateDivContainer">
                <Zoom
                  in={this.state.showFilterBTNs}
                  timeout={{ enter: 400, exit: 500 }}
                >
                  <button className="filterBtnCate">Notes</button>
                </Zoom>

                <Zoom
                  in={this.state.showFilterBTNs}
                  timeout={{ enter: 450, exit: 350 }}
                >
                  <div className="box">
                    <div id="innerBoxSpacer">
                      <input
                        id="noteTextInput"
                        type="text"
                        placeholder="Input a keyword to look for..."
                      />
                    </div>
                  </div>
                </Zoom>
              </div>
              <div className="spacerV"></div>
              <div id="innerLessSubCateDivContainer">
                <Zoom
                  in={this.state.showFilterBTNs}
                  timeout={{ enter: 450, exit: 350 }}
                >
                  <button className="filterBtnCate">Mobs</button>
                </Zoom>

                <Zoom
                  in={this.state.showFilterBTNs}
                  timeout={{ enter: 450, exit: 350 }}
                >
                  <div className="box">
                    <div className="innerBox">
                      <button className="filterBtn">Standard Mob</button>
                      <button className="filterBtn">Elite Mob</button>
                    </div>
                  </div>
                </Zoom>
              </div>
              <div className="spacerV"></div>
              <div id="innerLessSubCateDivContainer">
                <Zoom
                  in={this.state.showFilterBTNs}
                  timeout={{ enter: 450, exit: 350 }}
                >
                  <button className="filterBtnCate">Logging</button>
                </Zoom>
                <Zoom
                  in={this.state.showFilterBTNs}
                  timeout={{ enter: 450, exit: 350 }}
                >
                  <div className="box">
                    <div className="innerBox">
                      <button className="filterBtn">Iron Wood</button>
                      <button className="filterBtn">Wyrd Wood</button>
                    </div>
                  </div>
                </Zoom>
              </div>
            </div>

            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 500, exit: 300 }}
            >
              <button className="filterBtnCate">Mining</button>
            </Zoom>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 500, exit: 300 }}
            >
              <div className="box">
                <div className="innerBox">
                  <button className="filterBtn">1</button>
                  <button className="filterBtn">2</button>
                  <button className="filterBtn">3</button>
                  <button className="filterBtn">4</button>
                  <button className="filterBtn">5</button>
                  <button className="filterBtn">6</button>
                  <button className="filterBtn">7</button>
                  <button className="filterBtn">8</button>
                </div>
                <div className="innerBox">
                  <button className="filterBtn">9</button>
                  <button className="filterBtn">10</button>
                  <button className="filterBtn">11</button>
                  <button className="filterBtn">12</button>
                  <button className="filterBtn">13</button>
                  <button className="filterBtn">14</button>
                  <button className="filterBtn">15</button>
                  <button className="filterBtn">16</button>
                </div>
              </div>
            </Zoom>
            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 550, exit: 250 }}
            >
              <button className="filterBtnCate">Harvesting</button>
            </Zoom>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 550, exit: 250 }}
            >
              <div className="box">
                <div className="innerBox">
                  <button className="filterBtn">1</button>
                  <button className="filterBtn">2</button>
                  <button className="filterBtn">3</button>
                  <button className="filterBtn">4</button>
                  <button className="filterBtn">5</button>
                  <button className="filterBtn">6</button>
                  <button className="filterBtn">7</button>
                  <button className="filterBtn">8</button>
                </div>
                <div className="innerBox">
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
              </div>
            </Zoom>
            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 600, exit: 200 }}
            >
              <button className="filterBtnCate">Fungi</button>
            </Zoom>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 600, exit: 200 }}
            >
              <div className="box">
                <div className="innerBox">
                  <button className="filterBtn">Bumbleblossom</button>
                  <button className="filterBtn">Capped Tanglewisp</button>
                  <button className="filterBtn">Cascaded Gillflower</button>
                  <button className="filterBtn">Corrupted Bloodspore</button>
                  <button className="filterBtn">Flowering Tubecap</button>
                  <button className="filterBtn">Fronded Petalcap</button>
                </div>
                <div className="innerBox">
                  <button className="filterBtn">Slimy Twistcap</button>
                  <button className="filterBtn">Spinecap</button>
                  <button className="filterBtn">Suncreeper</button>
                  <button className="filterBtn">Tanglewisp</button>
                  <button className="filterBtn">Tendrilspine</button>
                  <button className="filterBtn">Toadpot</button>
                </div>
                <div className="innerBox">
                  <button className="filterBtn">Twisted Tubecap</button>
                  <button className="filterBtn">Void Pitcher</button>
                  <button className="filterBtn">Warm Platecap</button>
                  <button className="filterBtn">Weeping Shellbed</button>
                </div>
              </div>
            </Zoom>
            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 650, exit: 150 }}
            >
              <button className="filterBtnCate">Tracking</button>
            </Zoom>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 650, exit: 150 }}
            >
              <div className="box">
                <div className="innerBox">
                  <button className="filterBtn">Alligator</button>
                  <button className="filterBtn">Bear</button>
                  <button className="filterBtn">Bison</button>
                  <button className="filterBtn">Boar</button>
                  <button className="filterBtn">Bobcat</button>
                  <button className="filterBtn">Cow</button>
                  <button className="filterBtn">Elk</button>
                  <button className="filterBtn">Goat</button>
                </div>
                <div className="innerBox">
                  <button className="filterBtn">Lion</button>
                  <button className="filterBtn">Lynx</button>
                  <button className="filterBtn">Pig</button>
                  <button className="filterBtn">Rabbit</button>
                  <button className="filterBtn">Sheep</button>
                  <button className="filterBtn">Turkey</button>
                  <button className="filterBtn">Wolf</button>
                </div>
                <div className="innerBox">
                  <button className="filterBtn">Forest Elemental</button>
                  <button className="filterBtn">Mountain Elemental</button>
                  <button className="filterBtn">Tundra Elemental</button>
                </div>
              </div>
            </Zoom>
            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 700, exit: 100 }}
            >
              <button className="filterBtnCate">Farming</button>
            </Zoom>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 700, exit: 100 }}
            >
              <div className="box">
                <div className="innerBox">
                  <button className="filterBtn">1</button>
                  <button className="filterBtn">2</button>
                  <button className="filterBtn">3</button>
                  <button className="filterBtn">4</button>
                  <button className="filterBtn">5</button>
                  <button className="filterBtn">6</button>
                  <button className="filterBtn">7</button>
                  <button className="filterBtn">8</button>
                </div>
                <div className="innerBox">
                  <button className="filterBtn">9</button>
                  <button className="filterBtn">10</button>
                  <button className="filterBtn">11</button>
                  <button className="filterBtn">12</button>
                  <button className="filterBtn">13</button>
                  <button className="filterBtn">14</button>
                  <button className="filterBtn">15</button>
                  <button className="filterBtn">16</button>
                </div>
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
