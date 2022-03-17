import "../styles/removePins.css";

import React from "react";
import { connect } from "react-redux";

class RemovePins extends React.Component {
  constructor(props) {
    super(props);
    this.state = { findDetailsState: "hidden" };
  }

  render() {
    return (
      <div id="container">
        <div
          id="removepinContainer"
          onClick={() => {
            var removeModeState = this.props.removeMode;

            if (removeModeState) {
              document.getElementById("view_window").style.borderColor =
                "rgb(212, 158, 20)";
              document.getElementById("navBarContainer").style.visibility =
                "visible";

              document.getElementById("filterForDetails").style.visibility =
                this.state.findDetailsState;

              document.getElementById("removeModeNotice").style.visibility =
                "hidden";
              this.props.toggleRemoveMode(!removeModeState);
            } else {
              document.getElementById("view_window").style.borderColor =
                "rgb(212, 20, 20)";
              this.setState({
                findDetailsState:
                  document.getElementById("filterForDetails").style.visibility,
              });
              document.getElementById("navBarContainer").style.visibility =
                "hidden";
              document.getElementById("filterForDetails").style.visibility =
                "hidden";
              document.getElementById("removeModeNotice").style.visibility =
                "visible";
              this.props.toggleRemoveMode(!removeModeState);
            }
          }}
        >
          <span className="span">---- </span> REMOVE PINS{" "}
          <span className="span"> ----</span>
        </div>
        <div id="removeModeNotice">
          --- You are in REMOVAL MODE --- Click any "PIN" to remove it. When
          finished click the "REMOVE PINs" button again.
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    removeMode: state.removeMode,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleRemoveMode: (bool) => dispatch({ type: "UPDATEMODE", payload: bool }),
});

export default connect(mapStateToProps, mapDispatchToProps)(RemovePins);
