const getTierInfo = (tierData: any, multiple: number) => {
  if (multiple < 1) {
    return tierData[0];
  } else if (multiple < 1.5) {
    return tierData[1];
  } else if (multiple < 2) {
    return tierData[2];
  } else if (multiple < 2.5) {
    return tierData[3];
  } else if (multiple < 3) {
    return tierData[4];
  } else {
    return tierData[5];
  }
};

export default getTierInfo;
