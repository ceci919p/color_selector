"use strict";

const colorInput = document.querySelector("#color_input");

window.addEventListener("load", start);

function start() {
  console.log("start");
  colorInput.addEventListener("input", getUserColor);
}

//Getting a selected color from the user
function getUserColor() {
  let getColorValue = colorInput.value;

  let hexColorValue = getColorValue;
  let rgbColorValue = hexToRgb(hexColorValue);
  let cssColorValue = rgbToCss(rgbColorValue);
  let hslColorValue = rgbToHSL(rgbColorValue);

  //send the value of the selected color to function showUserColor with relevant parameters
  showUserColor(hexColorValue, rgbColorValue, cssColorValue, hslColorValue);
}

//Showing a selected color
function showUserColor(hex, rgb, css, hslV) {
  showHexColor(hex);
  showRgbColor(rgb);
  showCssColor(css);
  showHslColor(hslV);
  showCssBox();
}

//Converting hex to RGB
function hexToRgb(hexCode) {
  //get hex values and convert them to rgb
  let r = parseInt(hexCode.substring(1, 3), 16);
  let g = parseInt(hexCode.substring(3, 5), 16);
  let b = parseInt(hexCode.substring(5, 7), 16);
  //console.log("rgb", r, g, b); // should be 255, 100, 200

  //return it as an object with the right values of rgb
  let rgbObj = { r, g, b };
  //`${r}. ${g}. ${b}`;

  return rgbObj;
  //return `${r}, ${g}, ${b}`;
}

//Converting RGB to CSS usable string
function rgbToCss(rgbObj) {
  let r = rgbObj.r;
  let g = rgbObj.g;
  let b = rgbObj.b;
  let rgbCSS = { r, g, b };

  return rgbCSS;
}

//Converting RGB to hex
function rgbToHex(rgbObj) {
  // console.log("rgbToHex");
  let r = rgbObj.r;
  let g = rgbObj.g;
  let b = rgbObj.b;
  let hexCode =
    ("0" + r.toString(16)).slice(-2) +
    ("0" + g.toString(16)).slice(-2) +
    ("0" + b.toString(16)).slice(-2);
  // console.log(`#${hexCode}`);
  return `#${hexCode}`;
}

//Converting RGB to HSL

function rgbToHSL(rgbObj) {
  // console.log("rgbToHSL");

  let r = rgbObj.r;
  let g = rgbObj.g;
  let b = rgbObj.b;

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
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

  // let hslObj = { h, s, l };
  let hslObj = { h: Math.floor(h), s: Math.floor(s), l: Math.floor(l) };
  return hslObj;
}

//Showing the color as hex
function showHexColor(hex) {
  document.querySelector("#hex_color_value").textContent = hex;
}

//Showing the color as RGB
function showRgbColor(rgb) {
  //return it as an object with the right values of rgb
  document.querySelector(
    "#rgb_color_value"
  ).textContent = `${rgb.r} ${rgb.g} ${rgb.b}`;
}

//Showing the color as HSL
function showHslColor(hslV) {
  document.querySelector(
    "#hsl_color_value"
  ).textContent = `hsl: ${hslV.h}%, ${hslV.s}%, ${hslV.l}%`;
}

//showing the color as CSS
function showCssColor(css) {
  document.querySelector(
    "#css_color_value"
  ).textContent = `rgb (${css.r}, ${css.g}, ${css.b})`;
}

//Showing the color as a colored box in CSS
function showCssBox() {
  document.querySelector(".background_color_box").style.backgroundColor =
    colorInput.value;
}
