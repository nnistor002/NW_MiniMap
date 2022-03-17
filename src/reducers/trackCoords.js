const coords = [0, 0];

const trackCoords = (state = coords, action) => {
  switch (action.type) {
    case "UPDATECOORD":
      return (state = action.payload);
    default:
      return state;
  }
};

export default trackCoords;
