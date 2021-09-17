import "../styles/RingMenu.css";
import { Zoom } from "@mui/material";

import React, { useState } from "react";

import exit from "../images/menuIcons/Exit.png";
import mining from "../images/menuIcons/Mining.png";
import harvesting from "../images/menuIcons/Harvesting.png";
import logging from "../images/menuIcons/Logging.png";
import notepin from "../images/menuIcons/NotePin.png";
import fishing from "../images/menuIcons/Fishing.png";
import animal from "../images/menuIcons/Animal.png";
import farming from "../images/menuIcons/Farming.png";
import mobs from "../images/menuIcons/Mobs.png";

function RingMenu(x, y) {
  window.addEventListener("auxclick", (e) => handleMiddleCLickMenu(e));

  const [zoomState, setZoomState] = useState(false);

  function handleMiddleCLickMenu(e) {
    if (e.button === 1) {
      let z = document.getElementById("rightClickMenuContainer");

      z.style.top = e.clientY - 250 + "px";
      z.style.left = e.clientX - 250 + "px";

      setZoomState(true);
    }
  }

  function closeBTN() {
    setZoomState(false);
  }

  return (
    <div id="backGround">
      <Zoom in={zoomState} timeout={{ enter: 300, exit: 1000 }}>
        <div id="rightClickMenuContainer">
          <div id="closeBTN" onClick={closeBTN}>
            <img src={exit} alt="Exit" width="35" height="35"></img>
          </div>
          <Zoom in={zoomState} timeout={{ enter: 600, exit: 800 }}>
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
          <Zoom in={zoomState} timeout={{ enter: 900, exit: 700 }}>
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
          <Zoom in={zoomState} timeout={{ enter: 1200, exit: 600 }}>
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
          <Zoom in={zoomState} timeout={{ enter: 1500, exit: 500 }}>
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
          <Zoom in={zoomState} timeout={{ enter: 1800, exit: 400 }}>
            <div id="fishingBTN">
              <img
                src={fishing}
                alt="Fishing"
                title="Fishing"
                width="42"
                height="42"
              ></img>
            </div>
          </Zoom>
          <Zoom in={zoomState} timeout={{ enter: 2100, exit: 300 }}>
            <div id="animalsBTN">
              <img
                src={animal}
                alt="Tracking"
                title="Tracking"
                width="42"
                height="42"
              ></img>
            </div>
          </Zoom>
          <Zoom in={zoomState} timeout={{ enter: 2400, exit: 200 }}>
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
          <Zoom in={zoomState} timeout={{ enter: 2700, exit: 100 }}>
            <div id="mobBTN">
              <img
                src={mobs}
                alt="Mobs"
                title="Mobs & Elites"
                width="42"
                height="42"
              ></img>
            </div>
          </Zoom>
        </div>
      </Zoom>
    </div>
  );
}

export default RingMenu;
