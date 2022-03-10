import "../../styles/ringMenuStyles/NotePinBTNStyle.css";
import { Zoom } from "@mui/material";

import React from "react";
import { connect } from "react-redux";

import notepin from "../../images/menuIcons/NotePin.png";

class NotePinBtnClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleMainBTN = () => {
    this.props.mainButtonActions("showMainNotePinBTN");
  };

  render() {
    return (
      <div id="cateContainerDiv">
        <Zoom in={this.props.showMenu} timeout={{ enter: 200, exit: 500 }}>
          <div id="notePinBTN" onClick={this.toggleMainBTN}>
            <img
              src={notepin}
              alt="Drop Note"
              title="Drop Note"
              width="42"
              height="42"
            ></img>
          </div>
        </Zoom>
        <Zoom in={this.props.showSubs} timeout={{ enter: 200, exit: 200 }}>
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
              <input id="notePinSubDivSubmitBTN" type="submit" value="Submit" />
            </form>
          </div>
        </Zoom>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    trackXY: state.trackXY,
  };
};

export default connect(mapStateToProps)(NotePinBtnClass);
