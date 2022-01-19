const data = {};
const dataContainer = (state = data, action) => {
  switch (action.type) {
    case "GET":
      return state;
    case "UPLOAD":
      return (state = action.payload);
    default:
      return state;
  }
};

export default dataContainer;
