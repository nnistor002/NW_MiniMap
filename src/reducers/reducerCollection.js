import trackCoords from "./trackCoords";
import dataContainer from "./dataContainer";
import removeMode from "./removeMode";

import { combineReducers } from "redux";

const reducerCollection = combineReducers({
  trackXY: trackCoords,
  dataSet: dataContainer,
  removeMode: removeMode,
});

export default reducerCollection;
