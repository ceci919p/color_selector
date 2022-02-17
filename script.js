"use strict";

const colorInput = document.querySelector("#color_input");

window.addEventListener("load", start);

function start() {
  console.log("start");
  colorInput.addEventListener("input", getColorInput);
}

//we start by clicking on a color and getting the hex values

function getColorInput() {
  console.log("clicked");

  let getColorValue = colorInput.value;
  document.querySelector("#hex_color_value").textContent = getColorValue;
  document.querySelector(".background_color_box").style.backgroundColor =
    getColorValue.value;
  hexToRgb(getColorValue);
}

//then we convert hex to rgb values

function hexToRgb(hex) {
  //get hex values and convert them to rgb
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  console.log("rgb", r, g, b);

  //return it as an object with the right values of rgb
  document.querySelector("#rgb_color_value").textContent = `${r}. ${g}. ${b}`;

  let rgbColor = { r, g, b };

  console.log(rgbColor);

  rgbToHSL(rgbColor);
}

//last we convert rgb to HSL values

function rgbToHSL(values) {
  //   console.log(values);

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

  document.querySelector("#hsl_color_value").textContent =
    h.toFixed(0) + "%. " + s.toFixed(0) + "%. " + l.toFixed(0) + "%";
}
