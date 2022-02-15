"use strict";

const colorInput = document.querySelector("#color_input");

window.addEventListener("load", start);

function start() {
  console.log("start");
  colorInput.addEventListener("input", getColorInput);
}

function getColorInput() {
  let getColorValue = colorInput.value;
  document.querySelector("#hex_color_value").textContent = getColorValue;
  document.querySelector(".background_color_box").style.backgroundColor =
    getColorValue;
  convertToRgb;
}
