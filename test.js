"use strict";

//Getting a selected color from the user
function getUserColor() {}

//Showing a selected color
function showUserColor() {}

//Converting hex to RGB
function hexToRgb(hex) {
  //get hex values and convert them to rgb
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  //console.log("rgb", r, g, b); // should be 255, 100, 200

  //return it as an object with the right values of rgb
  return { r, g, b };
}

hexToRgb("#ff64c8");

//Converting RGB to CSS usable string
function cssToRgb(colorString) {
  let redColor = parseInt(
    colorString.substring(
      colorString.indexOf("(") + 1,
      colorString.indexOf(",")
    )
  );
  let greenColor = parseInt(
    colorString.substring(
      colorString.indexOf(" ") + 1,
      colorString.lastIndexOf(",")
    )
  );
  let blueColor = parseInt(
    colorString.substring(
      colorString.lastIndexOf(",") + 2,
      colorString.lastIndexOf(")")
    )
  );

  let rgbColor = { redColor, greenColor, blueColor };
  console.log(rgbColor);
}

cssToRgb("rgb(245, 128, 202)");

//Converting RGB to hex
function rgbToHex(r, g, b) {
  let redColor = r.toString(16).slice(-2);
  let greenColor = g.toString(16).slice(-2);
  let blueColor = b.toString(16).slice(-2);

  let hexColor = { redColor, greenColor, blueColor };

  return `#${redColor}${greenColor}${blueColor}`;
}

rgbToHex(245, 128, 202);

//Converting RGB to HSL
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

//Showing the color as a colored box in CSS
function showCssBox() {}

//Showing the color as hex
function showHexColor() {}

//Showing the color as RGB
function showRgbColor() {}

//Showing the color as HSL
function showHslColor() {}
