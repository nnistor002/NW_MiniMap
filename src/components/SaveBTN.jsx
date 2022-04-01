import "../styles/SaveBTN.css";

import React from "react";
import { connect } from "react-redux";

class SaveBTN extends React.Component {
  saveBlob = () => {
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
  };

  render() {
    return (
      <div id="container">
        <div
          id="saveContainer"
          onClick={() => {
            this.saveBlob();
          }}
        >
          <span className="span">---- </span> SAVE
          <span className="span"> ----</span>
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

export default connect(mapStateToProps)(SaveBTN);
