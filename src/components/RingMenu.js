import "../styles/RingMenu.css";
import { Zoom } from "@mui/material";

import React from "react";
import { connect } from "react-redux";

import exit from "../images/menuIcons/Exit.png";
import mining from "../images/menuIcons/Mining.png";
import harvesting from "../images/menuIcons/Harvesting.png";
import logging from "../images/menuIcons/Logging.png";
import notepin from "../images/menuIcons/NotePin.png";
import fungi from "../images/menuIcons/Fungi.png";
import animal from "../images/menuIcons/Animal.png";
import farming from "../images/menuIcons/Farming.png";
import mobs from "../images/menuIcons/Mobs.png";

class RingMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomStateMain: false,
      zoomStateMainCategory: {
        zoomNotePinBTN: false,
        zoomMobBTN: false,
        zoomMiningBTN: false,
        zoomHarvestingBTN: false,
        zoomLoggingBTN: false,
        zoomTrackingBTN: false,
        zoomFarmingBTN: false,
        zoomFungiBTN: false,
      },
      zoomStateNoteSubCat: false,
      zoomStateMobSubCat: false,
      zoomStateMiningSubCat: false,
      zoomStateHarvestingSubCat: false,
      zoomStateLoggingSubCat: false,
      zoomStateTrackingSubCat: false,
      zoomStateFarmingSubCat: false,
      zoomStateFungiSubCat: false,
      windowMousePosX: 0,
      windowMousePosY: 0,
      noteUserInput: "",
      mobSubDivInput: "",
    };

    this.handleNoteUserInput = this.handleNoteUserInput.bind(this);
    this.handleMobDivInput = this.handleMobDivInput.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mousemove", (e) => this.handleWindowMousePos(e));

    window.addEventListener("auxclick", (e) => this.handleMiddleClickMenu(e));
    document
      .getElementById("closeBTN")
      .addEventListener("click", () => this.closeBTN());

    document
      .getElementById("notePinBTN")
      .addEventListener("click", () => this.notePinBTN());

    document
      .getElementById("mobBTN")
      .addEventListener("click", () => this.mobPinBTN());

    document
      .getElementById("miningBTN")
      .addEventListener("click", () => this.miningBTN());

    document
      .getElementById("harvestingBTN")
      .addEventListener("click", () => this.harvestingBTN());

    document
      .getElementById("loggingBTN")
      .addEventListener("click", () => this.loggingBTN());

    document
      .getElementById("trackingBTN")
      .addEventListener("click", () => this.trackingBTN());

    document
      .getElementById("farmingBTN")
      .addEventListener("click", () => this.farmingBTN());

    document
      .getElementById("fungiBTN")
      .addEventListener("click", () => this.fungiBTN());
  }

  handleWindowMousePos(e) {
    this.setState({
      windowMousePosX: e.clientX,
      windowMousePosY: e.clientY,
    });
  }

  handleMiddleClickMenu(e) {
    if (e.button === 1) {
      let z = document.getElementById("rightClickMenuContainer");

      // let mapOffSetX = e.offsetX;
      // let mapOffSetY = e.offsetY;

      // CREATE BORDER LOGIC IF CLICK IS NEXT TO SIDE OF SCREEN
      z.style.left = this.state.windowMousePosX - 360 + "px";
      z.style.top = this.state.windowMousePosY - 350 + "px";

      this.setState({
        zoomStateMain: true,
      });
      this.toggleMainCategory(true);
    }
  }

  closeBTN() {
    this.setState({
      zoomStateNoteSubCat: false,
      zoomStateMobSubCat: false,
      zoomStateMiningSubCat: false,
      zoomStateHarvestingSubCat: false,
      zoomStateLoggingSubCat: false,
      zoomStateTrackingSubCat: false,
      zoomStateFarmingSubCat: false,
      zoomStateFungiSubCat: false,
      zoomStateMain: false,
    });
    this.toggleMainCategory(false);
  }

  toggleMainCategory(bol) {
    if (bol === true) {
      this.setState({
        zoomStateMainCategory: {
          zoomNotePinBTN: true,
          zoomMobBTN: true,
          zoomMiningBTN: true,
          zoomHarvestingBTN: true,
          zoomLoggingBTN: true,
          zoomTrackingBTN: true,
          zoomFarmingBTN: true,
          zoomFungiBTN: true,
        },
      });
    }

    if (bol === false) {
      this.setState({
        zoomStateMainCategory: {
          zoomNotePinBTN: false,
          zoomMobBTN: false,
          zoomMiningBTN: false,
          zoomHarvestingBTN: false,
          zoomLoggingBTN: false,
          zoomTrackingBTN: false,
          zoomFarmingBTN: false,
          zoomFungiBTN: false,
        },
      });
    }
  }

  notePinBTN() {
    if (this.state.zoomStateNoteSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateNoteSubCat: true,
        zoomStateMainCategory: {
          zoomNotePinBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateNoteSubCat: false,
      });
    }
  }

  mobPinBTN() {
    if (this.state.zoomStateMobSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateMobSubCat: true,
        zoomStateMainCategory: {
          zoomMobBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateMobSubCat: false,
      });
    }
  }

  miningBTN() {
    if (this.state.zoomStateMiningSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateMiningSubCat: true,
        zoomStateMainCategory: {
          zoomMiningBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateMiningSubCat: false,
      });
    }
  }

  harvestingBTN() {
    if (this.state.zoomStateHarvestingSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateHarvestingSubCat: true,
        zoomStateMainCategory: {
          zoomHarvestingBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateHarvestingSubCat: false,
      });
    }
  }

  loggingBTN() {
    if (this.state.zoomStateLoggingSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateLoggingSubCat: true,
        zoomStateMainCategory: {
          zoomLoggingBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateLoggingSubCat: false,
      });
    }
  }

  trackingBTN() {
    if (this.state.zoomStateTrackingSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateTrackingSubCat: true,
        zoomStateMainCategory: {
          zoomTrackingBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateTrackingSubCat: false,
      });
    }
  }

  farmingBTN() {
    if (this.state.zoomStateFarmingSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateFarmingSubCat: true,
        zoomStateMainCategory: {
          zoomFarmingBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateFarmingSubCat: false,
      });
    }
  }

  fungiBTN() {
    if (this.state.zoomStateFungiSubCat === false) {
      this.toggleMainCategory(false);
      this.setState({
        zoomStateFungiSubCat: true,
        zoomStateMainCategory: {
          zoomFungiBTN: true,
        },
      });
    } else {
      this.toggleMainCategory(true);
      this.setState({
        zoomStateFungiSubCat: false,
      });
    }
  }

  handleNoteUserInput(event) {
    this.setState({
      noteUserInput: event.target.value,
    });
  }

  handleNoteUserInputSubmit(event) {
    alert(this.state.noteUserInput);
  }

  handleMobDivInput(event) {
    this.setState({
      mobSubDivInput: event.target.value,
    });
  }

  render() {
    return (
      <Zoom in={this.state.zoomStateMain} timeout={{ enter: 100, exit: 500 }}>
        <div id="rightClickMenuContainer">
          <div id="closeBTN">
            <img src={exit} alt="Exit" width="35" height="35"></img>
          </div>
          <Zoom
            in={this.state.zoomStateMainCategory.zoomNotePinBTN}
            timeout={{ enter: 200, exit: 500 }}
          >
            <div id="notePinBTN">
              <img
                src={notepin}
                alt="Drop Note"
                title="Drop Note"
                width="42"
                height="42"
              ></img>
            </div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateNoteSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="notePinSubDiv">
              <form>
                <label>
                  Details
                  <input
                    id="notePinSubDivInputBox"
                    type="text"
                    value={this.state.noteUserInput}
                    onChange={this.handleNoteUserInput}
                  />
                </label>
                <input
                  id="notePinSubDivSubmitBTN"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMainCategory.zoomMobBTN}
            timeout={{ enter: 300, exit: 350 }}
          >
            <div id="mobBTN">
              <img
                src={mobs}
                alt="Mobs"
                title="Mobs & Elites"
                width="42"
                height="42"
              ></img>
              <div></div>
            </div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMobSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="mobSubDivOption1">Mob</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMobSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="mobSubDivOption2">Elite</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMobSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <input
              id="mobSubDivInput"
              placeholder="Input Name..."
              type="text"
              value={this.state.mobSubDivInput}
              onChange={this.handleMobDivInput}
            />
          </Zoom>

          <Zoom
            in={this.state.zoomStateMainCategory.zoomMiningBTN}
            timeout={{ enter: 400, exit: 300 }}
          >
            <div id="miningBTN">
              <img
                src={mining}
                alt="Mining"
                title="Mining"
                width="42"
                height="42"
              ></img>
            </div>
          </Zoom>

          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <h2 id="miningSubDivOreTitle">Standard Ores</h2>
          </Zoom>

          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <h2 id="miningSubDivElementalTitle">Elemental Ore</h2>
          </Zoom>

          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 300, exit: 200 }}
          >
            <div id="miningSubDivOptionSalt">Saltpeter</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="miningSubDivOptionIron">Iron</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 100, exit: 200 }}
          >
            <div id="miningSubDivOptionSilver">Silver</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 300, exit: 200 }}
          >
            <div id="miningSubDivOptionGold">Gold</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="miningSubDivOptionStarmetal">Starmetal</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 100, exit: 200 }}
          >
            <div id="miningSubDivOptionLodestone">Lodestone</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 300, exit: 200 }}
          >
            <div id="miningSubDivOptionPlatinum">Platinum</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="miningSubDivOptionOrichalcum">Orichalcum</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 100, exit: 200 }}
          >
            <div id="miningSubDivOptionSeepingStone">SeepingStone</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 100, exit: 200 }}
          >
            <div id="miningSubDivOptionBlightcrag">Blightcrag</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 100, exit: 200 }}
          >
            <div id="miningSubDivOptionLifecrag">Lifecrag</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="miningSubDivOptionEarthcrag">Earthcrag</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="miningSubDivOptionSoulspire">Soulspire</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 300, exit: 200 }}
          >
            <div id="miningSubDivOptionShockspire">Shockspire</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 300, exit: 200 }}
          >
            <div id="miningSubDivOptionScorchstone">Scorchstone</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateMiningSubCat}
            timeout={{ enter: 400, exit: 200 }}
          >
            <div id="miningSubDivOptionSpringstone">Springstone</div>
          </Zoom>

          <Zoom
            in={this.state.zoomStateMainCategory.zoomHarvestingBTN}
            timeout={{ enter: 500, exit: 250 }}
          >
            <div id="harvestingBTN">
              <img
                src={harvesting}
                alt="Harvesting"
                title="Harvesting"
                width="42"
                height="42"
              ></img>
            </div>
          </Zoom>

          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <h2 id="harvestingSubDivStandard">Standard</h2>
          </Zoom>

          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <h2 id="harvestingSubDivMagical">Magical</h2>
          </Zoom>

          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <h2 id="harvestingSubDivCreatures">Creatures</h2>
          </Zoom>

          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionHemp">Hemp</div>
          </Zoom>

          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionSilkweed">Silkweed</div>
          </Zoom>

          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionWirefiber">Wirefiber</div>
          </Zoom>

          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionBlightroot">Blightroot</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionDragonglory">Dragonglory</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionEarthspine">Earthspine</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionLifebloom">Lifebloom</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionRivercress">Rivercress</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionShockblub">Shockblub</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionSoulspire">Soulspire</div>
          </Zoom>

          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionBlightmoth">Blightmoth</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionEarthshell">Earthshell Turtle</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionFloatingFish">
              Floating Spinefish
            </div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionLifemoth">Lifemoth</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionLightning">Lightning Beetle</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionSalamander">Salamander Snail</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateHarvestingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="harvestingSubDivOptionSoulwyrm">Soulwyrm</div>
          </Zoom>

          <Zoom
            in={this.state.zoomStateMainCategory.zoomFungiBTN}
            timeout={{ enter: 600, exit: 50 }}
          >
            <div id="fungiBTN">
              <img
                src={fungi}
                alt="Fungi"
                title="Fungi"
                width="42"
                height="42"
              ></img>
            </div>
          </Zoom>

          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionBumbleblossom">Bumbleblossom</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionCappedTanglewisp">Capped Tanglewisp</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionCascadedgillflower">
              Cascaded Gillflower
            </div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionCorruptedbloodspore">
              Corrupted Bloodspore
            </div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionFloweringtubecap">Flowering Tubecap</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionFrondedpetalcap">Fronded Petalcap</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionSlimytwistcap">Slimy Twistcap</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionSpinecap">Spinecap</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionSuncreeper">Suncreeper</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionTanglewisp">Tanglewisp</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionTendrilspine">Tendrilspine</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionToadpot">Toadpot</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionTwistedtubecap">Twisted Tubecap</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionVoidpitcher">Void Pitcher</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionWarmplatecap">Warm Platecap</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFungiSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="fungiSubDivOptionWeepingshellbed">Weeping Shellbed</div>
          </Zoom>

          <Zoom
            in={this.state.zoomStateMainCategory.zoomTrackingBTN}
            timeout={{ enter: 700, exit: 150 }}
          >
            <div id="trackingBTN">
              <img
                src={animal}
                alt="Tracking"
                title="Tracking"
                width="42"
                height="42"
              ></img>
            </div>
          </Zoom>

          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionAlligator">Alligator</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionBear">Bear</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionBison">Bison</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionBoar">Boar</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionBobcat">Bobcat</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionCow">Cow</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionElk">Elk</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionGoat">Goat</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionLion">Lion</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionLynx">Lynx</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionPig">Pig</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionRabbit">Rabbit</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionSheep">Sheep</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionTurkey">Turkey</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionWolf">Wolf</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionForestE">Forest Elemental</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionMountainE">Mountain Elemental</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateTrackingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="trackingSubDivOptionTundraE">Tundra Elemental</div>
          </Zoom>

          <Zoom
            in={this.state.zoomStateMainCategory.zoomFarmingBTN}
            timeout={{ enter: 800, exit: 100 }}
          >
            <div id="farmingBTN">
              <img
                src={farming}
                alt="Farming"
                title="Farming"
                width="42"
                height="42"
              ></img>
            </div>
          </Zoom>

          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <h2 id="farmingSubDivVegetables">Vegetables</h2>
          </Zoom>

          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <h2 id="farmingSubDivFruits">Fruits</h2>
          </Zoom>

          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionBarley">Barley</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionBerry">Berry</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionBlueberry">Blueberry</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionBroccoli">Broccoli</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionCabbage">Cabbage</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionCarrot">Carrot</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionCorn">Corn</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionCranberries">Cranberries</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionHerbs">Herbs</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionHoney">Honey</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionMelon">Melon</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionNuts">Nuts</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionPotato">Potato</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionSquash">Squash</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionStrawberry">Strawberry</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateFarmingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="farmingSubDivOptionWheat">Wheat</div>
          </Zoom>

          <Zoom
            in={this.state.zoomStateMainCategory.zoomLoggingBTN}
            timeout={{ enter: 900, exit: 200 }}
          >
            <div id="loggingBTN">
              <img
                src={logging}
                alt="Logging"
                title="Logging"
                width="42"
                height="42"
              ></img>
            </div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateLoggingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="loggingSubCatDivWyrdwood">Wyrdwood</div>
          </Zoom>
          <Zoom
            in={this.state.zoomStateLoggingSubCat}
            timeout={{ enter: 200, exit: 200 }}
          >
            <div id="loggingSubCatDivIronwood">Ironwood</div>
          </Zoom>
        </div>
      </Zoom>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trackXY: state.trackXY,
  };
};

export default connect(mapStateToProps)(RingMenu);
