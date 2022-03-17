const mode = false;

const removeMode = (state = mode, action) => {
  switch (action.type) {
    case "UPDATEMODE":
      return (state = action.payload);
    default:
      return state;
  }
};

export default removeMode;
