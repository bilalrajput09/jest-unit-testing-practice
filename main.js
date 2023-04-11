exports.stringLength = (string) => {
  const stringArr = [...string];
  if (stringArr.length >= 1 && stringArr.length < 10) {
    return stringArr.length;
  } else {
    throw new Error("The length is not meeting requirements");
  }
};
exports.stringReverse = (string) => {
  const reversedString = string.split("").reverse().join("");
  return reversedString;
};

exports.calculator = {
  add: (x, y) => {
    return x + y;
  },
  subtract: (x, y) => {
    return x - y;
  },
  divide: (x, y) => {
    return x / y;
  },
  multiply: (x, y) => {
    return x * y;
  },
};

exports.capitalizeFirstLetter = (string) => {
  const firstLetterCapitalize = string.slice(0, 1).toUpperCase();
  const capitalizedString =
    firstLetterCapitalize + string.slice(1).toLowerCase();

  return capitalizedString;
};
