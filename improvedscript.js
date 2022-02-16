"use strict";
const colorInput = document.querySelector("#color_input");
let getColorValue = colorInput.value;
let rgb;
window.addEventListener("load", getColorInput);

function getColorInput() {
  console.log("start");
  colorInput.addEventListener("input", delegator);
}
function delegator() {
  convertHexToRgb();
  convertRgbToHSL();
  showHex();
  showRGB();
  showHSL();
  showColorasBackground();
}

function convertHexToRgb() {
  //get hex values and convert them to rgb
  let r = parseInt(getColorValue.substring(1, 3), 16);
  let g = parseInt(getColorValue.substring(3, 5), 16);
  let b = parseInt(getColorValue.substring(5, 7), 16);
  console.log("rgb", r, g, b);
  rgb = `${r}. ${g}. ${b}`;
  console.log(rgb);
  //return { r, g, b };

  showRGB();
  convertRgbToHSL(r, g, b);
}

function convertRgbToHSL(values) {
  // console.log(values);

  let R = values.r;
  let G = values.g;
  let B = values.b;

  R /= 255;
  G /= 255;
  B /= 255;

  let h, s, l;

  const min = Math.min(R, G, B);
  const max = Math.max(R, G, B);

  if (max === min) {
    h = 0;
  } else if (max === R) {
    h = 60 * (0 + (G - B) / (max - min));
  } else if (max === G) {
    h = 60 * (2 + (B - R) / (max - min));
  } else if (max === B) {
    h = 60 * (4 + (R - G) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  //let hsl = { h: Math.floor(h), s: Math.floor(s), l: Math.floor(l) };
  let hslVal = h.toFixed(0) + "%. " + s.toFixed(0) + "%. " + l.toFixed(0) + "%";

  showHSL(hslVal);
}

function showHex() {
  document.querySelector("#hex_color_value").textContent = getColorValue;
  console.log(colorInput.value);
}

function showRGB() {
  document.querySelector("#rgb_color_value").textContent = rgb;
}

function showHSL(hslVal) {
  document.querySelector("#hsl_color_value").textContent = hslVal;
}
function showColorasBackground() {
  document.querySelector(".background_color_box").style.backgroundColor =
    getColorValue;
}
//getColorInput();
