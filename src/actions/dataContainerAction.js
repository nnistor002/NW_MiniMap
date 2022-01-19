export const getData = "GET";
export const uploadData = "UPLOAD";

export const getJSONData = () => {
  return {
    type: getData,
  };
};

export const uploadJSONData = (d) => {
  return {
    type: uploadData,
    payload: d,
  };
};
