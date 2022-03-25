import "../../styles/ringMenuStyles/NotePinBTNStyle.css";
import { Zoom } from "@mui/material";

import React from "react";
import { connect } from "react-redux";

import notepin from "../../images/menuIcons/NotePin.png";

class NotePinBtnClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { noteUserInput: "" };
  }

  sub_CateLogicBTN = (id, t, c) => {
    /*id = ID --- t = TITLE --- c = CATEGORY */

    if (this.state.noteUserInput !== "") {
      let newPin = document.createElement("img", {});
      newPin.src = notepin;
      newPin.id = id;
      newPin.className = "iconDiv";
      newPin.style.left = this.props.trackXY[0] - 15 + "px";
      newPin.style.top = this.props.trackXY[1] - 15 + "px";
      newPin.title = t;
      newPin.dataset.category = c;
      newPin.onclick = () => {
        if (this.props.removeMode) {
          document.getElementById("overLayDiv").removeChild(newPin);
          this.props.removePinFromDataSet(c, t, [
            this.props.trackXY[0] - 15,
            this.props.trackXY[1] - 15,
          ]);
        }
      };

      this.props.addPinToDataSet(c, t, [
        this.props.trackXY[0] - 15,
        this.props.trackXY[1] - 15,
      ]);

      document.getElementById("overLayDiv").appendChild(newPin);

      this.setState({
        noteUserInput: "",
      });

      this.props.subButtonCloseAction();
    }
  };

  handleNoteUserInput = (e) => {
    this.setState({
      noteUserInput: e.target.value,
    });
  };

  toggleMainBTN = () => {
    this.props.mainButtonActions("showMainNotePinBTN");

    this.setState({
      noteUserInput: "",
    });
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                //ID, TITLE, CATEGORY
                var input = this.state.noteUserInput;

                this.sub_CateLogicBTN(
                  "Note_" + this.props.trackXY[0] + "-" + this.props.trackXY[1],
                  "Note : " + input,
                  "Notes"
                );
              }}
            >
              <label>
                Details
                <input
                  id="notePinSubDivInputBox"
                  type="text"
                  value={this.state.noteUserInput}
                  onChange={this.handleNoteUserInput}
                />
              </label>
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
    removeMode: state.removeMode,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addPinToDataSet: (cate, subCate, l) =>
    dispatch({
      type: "APPENDDATAINPUTTYPE",
      payload: [cate, subCate, l],
    }),
  removePinFromDataSet: (cate, subCate, l) =>
    dispatch({
      type: "REMOVEDATA",
      payload: [cate, subCate, l],
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotePinBtnClass);
