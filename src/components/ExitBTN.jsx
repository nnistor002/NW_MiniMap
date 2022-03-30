import "../styles/ExitBTN.css";
import React from "react";

import ExitIcon from "../images/menuIcons/Exit.png";

class ExitBTN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="exitDivBox" title="Exit Mini-Map">
        <img id="exitIMG" src={ExitIcon} alt="Exit" />
      </div>
    );
  }
}

export default ExitBTN;
