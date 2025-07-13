"use strict";
import "./styles.css";

const capitalize = (string) => {
  let output = string.toLowerCase();
  output = output[0].toUpperCase() + output.slice(1);
  return output;
};

const reverse = (string) => {
  let output = "";
  for (let i = string.length - 1; i >= 0; i--) {
    output = output + string[i];
  }
  return output;
};

const calculator = {
  sum: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

const cipher = (str, shiftFactor) => {
  let cipherText = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let charCode = str.charCodeAt(i);

    if (char >= "A" && char <= "Z") {
      cipherText += String.fromCharCode(
        ((charCode - 65 + shiftFactor) % 26) + 65
      );
    } else if (char >= "a" && char <= "z") {
      cipherText += String.fromCharCode(
        ((charCode - 97 + shiftFactor) % 26) + 97
      );
    } else {
      cipherText += char;
    }
  }
  return cipherText;
};

const analyze = (array) => {
  let info = {};
  info["average"] =
    array.reduce((acc, val) => {
      return (acc += val);
    }) / array.length;
  info["length"] = array.length;
  info["max"] = Math.max(...array);
  info["min"] = Math.min(...array);
  return info;
};

export { capitalize, reverse, calculator, cipher, analyze };
