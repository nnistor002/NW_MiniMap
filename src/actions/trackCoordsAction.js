export const UpdateCoords = "UPDATECOORD";

export const updateCoords = (XY) => {
  return {
    type: UpdateCoords,
    payload: XY,
  };
};
