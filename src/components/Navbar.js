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
      filterForId: "",
      noteInput: "",
    };
  }

  handleNoteUserInput = (e) => {
    this.setState({
      noteInput: e.target.value,
    });
  };

  showFilters = () => {
    let state = this.state.showFilterBTNs;
    this.setState({
      showFilterBTNs: !state,
    });
  };

  filterHighlightSubCate = (idTargetFilter) => {
    this.filterClear();

    var listOfIconDivs = document.getElementsByClassName("iconDiv");

    for (let x = 0; x < listOfIconDivs.length; x++) {
      var id = listOfIconDivs[x].id;
      if (id.includes(idTargetFilter)) {
        document.getElementById(id).style.boxShadow = "red 0px 0px 20px 10px";
      }
      this.setState({
        filterForId: idTargetFilter,
      });
    }

    document.getElementById("filterForDetails").style.visibility = "visible";

    this.showFilters();
  };

  filterHighlightGeneralCate = (cate) => {
    this.filterClear();

    var listOfIconDivs1 = document.getElementsByClassName("iconDiv");

    for (let x = 0; x < listOfIconDivs1.length; x++) {
      var id1 = listOfIconDivs1[x].id;
      if (listOfIconDivs1[x].getAttribute("data-category") === cate) {
        document.getElementById(id1).style.boxShadow = "red 0px 0px 20px 10px";
      }
    }

    this.setState({
      filterForId: cate,
    });

    document.getElementById("filterForDetails").style.visibility = "visible";

    this.showFilters();
  };

  filterHighlightGeneralCateForNoteInput = (cate) => {
    if (cate === "Notes" && this.state.noteInput !== "") {
      this.filterClear();

      var listOfIconDivs0 = document.getElementsByClassName("iconDiv");

      for (let x = 0; x < listOfIconDivs0.length; x++) {
        var id0 = listOfIconDivs0[x].id;
        var noteTitle = listOfIconDivs0[x].title.toLowerCase();
        if (
          listOfIconDivs0[x].getAttribute("data-category") === cate &&
          noteTitle.includes(this.state.noteInput.toLowerCase())
        ) {
          document.getElementById(id0).style.boxShadow =
            "red 0px 0px 20px 10px";
        }
      }

      var inputholder = this.state.noteInput;

      this.setState({
        filterForId: " Note keyword:  ' " + inputholder + " ' ",
        noteInput: "",
      });

      document.getElementById("filterForDetails").style.visibility = "visible";

      this.showFilters();
    }
  };

  filterClear = () => {
    var listOfIconDivs = document.getElementsByClassName("iconDiv");

    for (let x = 0; x < listOfIconDivs.length; x++) {
      document.getElementById(listOfIconDivs[x].id).style.boxShadow =
        "rgba(214, 176, 79, 0.8) 0px 0px 20px 10px";
    }

    this.setState({
      filterForId: "",
    });

    document.getElementById("filterForDetails").style.visibility = "hidden";
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
        <div id="filteringForDiv">
          <div id="filterForDetails">
            {" Find - "}
            <span id="targetFilterIdSlot">{this.state.filterForId}</span>
            {" -  "}
            <button id="clearFilterBtn" onClick={this.filterClear}>
              Clear Filter
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
                  <button
                    className="filterBtnCate"
                    onClick={() => {
                      this.filterHighlightGeneralCate("Notes");
                    }}
                  >
                    Notes
                  </button>
                </Zoom>

                <Zoom
                  in={this.state.showFilterBTNs}
                  timeout={{ enter: 450, exit: 350 }}
                >
                  <div className="box">
                    <div id="innerBoxSpacer">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          this.filterHighlightGeneralCateForNoteInput("Notes");
                        }}
                      >
                        <input
                          id="noteTextInput"
                          type="text"
                          placeholder="Input a keyword to look for..."
                          value={this.state.noteInput}
                          onChange={this.handleNoteUserInput}
                        />
                      </form>
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
                  <button
                    className="filterBtnCate"
                    onClick={() => {
                      this.filterHighlightGeneralCate("Mobs");
                    }}
                  >
                    Mobs
                  </button>
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
                          this.filterHighlightSubCate("MobStandard");
                        }}
                      >
                        Standard Mob
                      </button>
                      <button
                        className="filterBtn"
                        onClick={() => {
                          this.filterHighlightSubCate("MobElite");
                        }}
                      >
                        Elite Mob
                      </button>
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
                  <button
                    className="filterBtnCate"
                    onClick={() => {
                      this.filterHighlightGeneralCate("Logging");
                    }}
                  >
                    Logging
                  </button>
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
                          this.filterHighlightSubCate("IronWood");
                        }}
                      >
                        Iron Wood
                      </button>
                      <button
                        className="filterBtn"
                        onClick={() => {
                          this.filterHighlightSubCate("WyrdWood");
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
              <button
                className="filterBtnCate"
                onClick={() => {
                  this.filterHighlightGeneralCate("Mining");
                }}
              >
                Mining
              </button>
            </Zoom>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 500, exit: 300 }}
            >
              <div className="box">
                <div className="innerBox">
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Blightcrag");
                    }}
                  >
                    Blightcrag
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Earthcrag");
                    }}
                  >
                    Earthcrag
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Gold");
                    }}
                  >
                    Gold
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Iron");
                    }}
                  >
                    Iron
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Lifecrag");
                    }}
                  >
                    Lifecrag
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Lodestone");
                    }}
                  >
                    Lodestone
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Orichalcum");
                    }}
                  >
                    Orichalcum
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Platinum");
                    }}
                  >
                    Platinum
                  </button>
                </div>
                <div className="innerBox">
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Saltpeter");
                    }}
                  >
                    Saltpeter
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Scorchstone");
                    }}
                  >
                    Scorchstone
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Seepingstone");
                    }}
                  >
                    Seepingstone
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Shockspire");
                    }}
                  >
                    Shockspire
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Silver");
                    }}
                  >
                    Silver
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Soulspire");
                    }}
                  >
                    Soulspire
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Springstone");
                    }}
                  >
                    Springstone
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Starmetal");
                    }}
                  >
                    Starmetal
                  </button>
                </div>
              </div>
            </Zoom>
            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 550, exit: 250 }}
            >
              <button
                className="filterBtnCate"
                onClick={() => {
                  this.filterHighlightGeneralCate("Harvesting");
                }}
              >
                Harvesting
              </button>
            </Zoom>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 550, exit: 250 }}
            >
              <div className="box">
                <div className="innerBox">
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Blightmoth");
                    }}
                  >
                    Blightmoth
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Blightroot");
                    }}
                  >
                    Blightroot
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Dragonglory");
                    }}
                  >
                    Dragonglory
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("EarthshellTurtle");
                    }}
                  >
                    Earthshell Turtle
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Earthspine");
                    }}
                  >
                    Earthspine
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("FloatingSpinefish");
                    }}
                  >
                    Floating Spinefish
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Hemp");
                    }}
                  >
                    Hemp
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Lifebloom");
                    }}
                  >
                    Lifebloom
                  </button>
                </div>
                <div className="innerBox">
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Lifemoth");
                    }}
                  >
                    Lifemoth
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("LightningBeetle");
                    }}
                  >
                    Lightning Beetle
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Rivercress");
                    }}
                  >
                    Rivercress
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("SalamanderSnail");
                    }}
                  >
                    Salamander Snail
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Shockblub");
                    }}
                  >
                    Shockblub
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Silkweed");
                    }}
                  >
                    Silkweed
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Soulspire");
                    }}
                  >
                    Soulspire
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Soulwyrm");
                    }}
                  >
                    Soulwyrm
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Wirefiber");
                    }}
                  >
                    Wirefiber
                  </button>
                </div>
              </div>
            </Zoom>
            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 600, exit: 200 }}
            >
              <button
                className="filterBtnCate"
                onClick={() => {
                  this.filterHighlightGeneralCate("Fungi");
                }}
              >
                Fungi
              </button>
            </Zoom>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 600, exit: 200 }}
            >
              <div className="box">
                <div className="innerBox">
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Bumbleblossom");
                    }}
                  >
                    Bumbleblossom
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("CappedTanglewisp");
                    }}
                  >
                    Capped Tanglewisp
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("CascadedGillflower");
                    }}
                  >
                    Cascaded Gillflower
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("CorruptedBloodspore");
                    }}
                  >
                    Corrupted Bloodspore
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("FloweringTubecap");
                    }}
                  >
                    Flowering Tubecap
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("FrondedPetalcap");
                    }}
                  >
                    Fronded Petalcap
                  </button>
                </div>
                <div className="innerBox">
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("SlimyTwistcap");
                    }}
                  >
                    Slimy Twistcap
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Spinecap");
                    }}
                  >
                    Spinecap
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Suncreeper");
                    }}
                  >
                    Suncreeper
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("UncappedTanglewisp");
                    }}
                  >
                    Tanglewisp
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Tendrilspine");
                    }}
                  >
                    Tendrilspine
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Toadpot");
                    }}
                  >
                    Toadpot
                  </button>
                </div>
                <div className="innerBox">
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("TwistedTubecap");
                    }}
                  >
                    Twisted Tubecap
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("VoidPitcher");
                    }}
                  >
                    Void Pitcher
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("WarmPlatecap");
                    }}
                  >
                    Warm Platecap
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("WeepingShellbed");
                    }}
                  >
                    Weeping Shellbed
                  </button>
                </div>
              </div>
            </Zoom>
            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 650, exit: 150 }}
            >
              <button
                className="filterBtnCate"
                onClick={() => {
                  this.filterHighlightGeneralCate("Tracking");
                }}
              >
                Tracking
              </button>
            </Zoom>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 650, exit: 150 }}
            >
              <div className="box">
                <div className="innerBox">
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Alligator");
                    }}
                  >
                    Alligator
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Bear");
                    }}
                  >
                    Bear
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Bison");
                    }}
                  >
                    Bison
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Boar");
                    }}
                  >
                    Boar
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Bobcat");
                    }}
                  >
                    Bobcat
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Cow");
                    }}
                  >
                    Cow
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Elk");
                    }}
                  >
                    Elk
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Goat");
                    }}
                  >
                    Goat
                  </button>
                </div>
                <div className="innerBox">
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Lion");
                    }}
                  >
                    Lion
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Lynx");
                    }}
                  >
                    Lynx
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Pig");
                    }}
                  >
                    Pig
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Rabbit");
                    }}
                  >
                    Rabbit
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Sheep");
                    }}
                  >
                    Sheep
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Turkey");
                    }}
                  >
                    Turkey
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Wolf");
                    }}
                  >
                    Wolf
                  </button>
                </div>
                <div className="innerBox">
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("ForestElemental");
                    }}
                  >
                    Forest Elemental
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("MountainElemental");
                    }}
                  >
                    Mountain Elemental
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("TundraElemental");
                    }}
                  >
                    Tundra Elemental
                  </button>
                </div>
              </div>
            </Zoom>
            <div className="spacer"></div>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 700, exit: 100 }}
            >
              <button
                className="filterBtnCate"
                onClick={() => {
                  this.filterHighlightGeneralCate("Farming");
                }}
              >
                Farming
              </button>
            </Zoom>
            <Zoom
              in={this.state.showFilterBTNs}
              timeout={{ enter: 700, exit: 100 }}
            >
              <div className="box">
                <div className="innerBox">
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Barley");
                    }}
                  >
                    Barley
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Berry");
                    }}
                  >
                    Berry
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Blueberry");
                    }}
                  >
                    Blueberry
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Broccoli");
                    }}
                  >
                    Broccoli
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Cabbage");
                    }}
                  >
                    Cabbage
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Carrot");
                    }}
                  >
                    Carrot
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Corn");
                    }}
                  >
                    Corn
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Cranberries");
                    }}
                  >
                    Cranberries
                  </button>
                </div>
                <div className="innerBox">
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Herbs");
                    }}
                  >
                    Herbs
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Honey");
                    }}
                  >
                    Honey
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Melon");
                    }}
                  >
                    Melon
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Nuts");
                    }}
                  >
                    Nuts
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Potato");
                    }}
                  >
                    Potato
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Squash");
                    }}
                  >
                    Squash
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Strawberry");
                    }}
                  >
                    Strawberry
                  </button>
                  <button
                    className="filterBtn"
                    onClick={() => {
                      this.filterHighlightSubCate("Wheat");
                    }}
                  >
                    Wheat
                  </button>
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
