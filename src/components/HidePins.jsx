import "../styles/HidePins.css";
import React from "react";

import vpinIMG from "../images/icons/VPins.png";
import hpinIMG from "../images/icons/HPins.png";

class HidePinBTN extends React.Component {
  constructor(props) {
    super(props);
    this.state = { HidePins: false };
  }

  render() {
    return (
      <div
        id="hidePinContainerDiv"
        onClick={() => {
          if (this.state.HidePins) {
            document.getElementById("VH_PIN").src = vpinIMG;
            document.getElementById("VH_PIN").style.boxShadow =
              "rgb(72, 116, 84) 0px 0px 20px 5px";
            this.setState({
              HidePins: false,
            });
            document.getElementById("overLayDiv").style.visibility = "visible";
          } else {
            document.getElementById("VH_PIN").src = hpinIMG;
            document.getElementById("VH_PIN").style.boxShadow =
              "rgb(146, 67, 67) 0px 0px 20px 5px";
            this.setState({
              HidePins: true,
            });
            document.getElementById("overLayDiv").style.visibility = "hidden";
          }
        }}
      >
        <img id="VH_PIN" src={vpinIMG} alt="VPin" />
      </div>
    );
  }
}

export default HidePinBTN;
