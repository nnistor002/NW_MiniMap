export const UpdateCoords = "UPDATE";

export const updateCoords = (XY) => {
  return {
    type: UpdateCoords,
    payload: XY,
  };
};
