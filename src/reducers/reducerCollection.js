import trackCoords from "./trackCoords";
import dataContainer from "./dataContainer";

import { combineReducers } from "redux";

const reducerCollection = combineReducers({
  trackXY: trackCoords,
  dataSet: dataContainer,
});

export default reducerCollection;
