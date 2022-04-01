import "../styles/ExitBTN.css";
import React from "react";

import { connect } from "react-redux";

import ExitIcon from "../images/menuIcons/Exit.png";

class ExitBTN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="container">
        <div id="popUp">
          <img
            id="exitPopUp"
            src={ExitIcon}
            alt="Exit"
            onClick={() => {
              document.getElementById("popUp").style.visibility = "hidden";
            }}
          />
          <h1>Would you like to save your DataSet?</h1>
          <h5>( If "NO" all data points will be wiped. )</h5>
          <button
            id="y"
            onClick={() => {
              const blob = new Blob([JSON.stringify(this.props.dataSet)], {
                type: "application/json",
              });

              const href = URL.createObjectURL(blob);
              const a = Object.assign(document.createElement("a"), {
                href,
                style: "display:none",
                download: "NWMiniMapJSON",
              });
              document.body.appendChild(a);
              a.click();
              URL.revokeObjectURL(href);
              a.remove();
            }}
          >
            YES
          </button>
          <button id="n" onClick={() => {}}>
            NO
          </button>
        </div>
        <div id="exitDivBox" title="Exit Mini-Map">
          <img
            id="exitIMG"
            src={ExitIcon}
            alt="Exit"
            onClick={() => {
              document.getElementById("popUp").style.visibility = "visible";
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataSet: state.dataSet,
  };
};

export default connect(mapStateToProps)(ExitBTN);
