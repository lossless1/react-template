export const readGradient = value => {
  switch (value) {
    case 0.33:
      return 1;
    case 0.66:
      return 2;
    case 1:
      return 3;

    case false:
    case 0:
    default:
      return false;
  }
};

export const writeGradient = value => {
  switch (value) {
    case 1:
      return 0.33;
    case 2:
      return 0.66;
    case 3:
      return 1;
    case false:
    case 0:
    default:
      return 0;
  }
};
