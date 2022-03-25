export const getData = "GETDATA";
export const uploadData = "UPLOADDATA";
export const appendData = "APPENDDATA";
export const removeData = "REMOVEDATA";

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

export const appendNewPinData = (cate, subCate, l) => {
  return {
    type: appendData,
    category: cate,
    subCategory: subCate,
    location: l,
  };
};

export const removePinData = (cate, subCate, l) => {
  return {
    type: removeData,
    category: cate,
    subCategory: subCate,
    location: l,
  };
};
