export const removeMode = "UPDATEMODE";

export const toggleRemoveMode = (bool) => {
  return {
    type: removeMode,
    payload: bool,
  };
};
