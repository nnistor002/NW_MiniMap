import "../styles/SaveBTN.css";

import React from "react";
import { connect } from "react-redux";

class SaveBTN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="container">
        <div
          id="saveContainer"
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
          <span className="span">---- </span> SAVE{" "}
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
