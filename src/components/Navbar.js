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

  filterHighlight = (idTargetFilter) => {
    this.filterClear();

    var listOfIconDivs = document.getElementsByClassName("iconDiv");

    for (let x = 0; x < listOfIconDivs.length; x++) {
      var id = listOfIconDivs[x].id;
      if (id.includes(idTargetFilter)) {
        document.getElementById(id).style.boxShadow = "red 0px 0px 20px 10px";
      }
    }

    this.showFilters();
  };

  filterClear = () => {
    var listOfIconDivs = document.getElementsByClassName("iconDiv");

    for (let x = 0; x < listOfIconDivs.length; x++) {
      document.getElementById(listOfIconDivs[x].id).style.boxShadow =
        "rgba(214, 176, 79, 0.8) 0px 0px 20px 10px";
    }

    this.showFilters();
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
          timeout={{ enter: 100, exit: 400 }}
        >
          <div id="mainContainer">
            <div id="lessSubCateDivContainer">
              <div id="innerLessSubCateDivContainer">
                <Zoom
                  in={this.state.showFilterBTNs}
                  timeout={{ enter: 400, exit: 400 }}
                >
                  <button className="filterBtnCate" onClick={this.filterClear}>
                    Notes
                  </button>
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
                      <button
                        className="filterBtn"
                        onClick={() => {
                          this.filterHighlight("IronWood");
                        }}
                      >
                        Iron Wood
                      </button>
                      <button
                        className="filterBtn"
                        onClick={() => {
                          this.filterHighlight("WyrdWood");
                        }}
                      >
                        Wyrd Wood
                      </button>
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
                  <button className="filterBtn">Blightcrag</button>
                  <button className="filterBtn">Earthcarg</button>
                  <button className="filterBtn">Gold</button>
                  <button className="filterBtn">Iron</button>
                  <button className="filterBtn">Lifecrag</button>
                  <button className="filterBtn">Lodestone</button>
                  <button className="filterBtn">Orichalcum</button>
                  <button className="filterBtn">Platinum</button>
                </div>
                <div className="innerBox">
                  <button className="filterBtn">Saltpeter</button>
                  <button className="filterBtn">Scorchstone</button>
                  <button className="filterBtn">Seepingstone</button>
                  <button className="filterBtn">Shockspire</button>
                  <button className="filterBtn">Silver</button>
                  <button className="filterBtn">Soulspire</button>
                  <button className="filterBtn">Springstone</button>
                  <button className="filterBtn">Starmetal</button>
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
                  <button className="filterBtn">Blightmoth</button>
                  <button className="filterBtn">Blightroot</button>
                  <button className="filterBtn">Dragonglory</button>
                  <button className="filterBtn">Earthshell Turtle</button>
                  <button className="filterBtn">Earthspine</button>
                  <button className="filterBtn">Floating Spinefish</button>
                  <button className="filterBtn">Hemp</button>
                  <button className="filterBtn">Lifebloom</button>
                </div>
                <div className="innerBox">
                  <button className="filterBtn">Lifemoth</button>
                  <button className="filterBtn">Lightning Beetle</button>
                  <button className="filterBtn">Rivercress</button>
                  <button className="filterBtn">Salamander Snail</button>
                  <button className="filterBtn">Shockblub</button>
                  <button className="filterBtn">Silkweed</button>
                  <button className="filterBtn">Soulspire</button>
                  <button className="filterBtn">Soulwyrm</button>
                  <button className="filterBtn">Wirefiber</button>
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
                  <button className="filterBtn">Barly</button>
                  <button className="filterBtn">Berry</button>
                  <button className="filterBtn">Blueberry</button>
                  <button className="filterBtn">Broccoli</button>
                  <button className="filterBtn">Cabbage</button>
                  <button className="filterBtn">Carrot</button>
                  <button className="filterBtn">Corn</button>
                  <button className="filterBtn">Cranberry</button>
                </div>
                <div className="innerBox">
                  <button className="filterBtn">Herbs</button>
                  <button className="filterBtn">Honey</button>
                  <button className="filterBtn">Melon</button>
                  <button className="filterBtn">Nuts</button>
                  <button className="filterBtn">Potato</button>
                  <button className="filterBtn">Squash</button>
                  <button className="filterBtn">Strawberry</button>
                  <button className="filterBtn">Wheat</button>
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
