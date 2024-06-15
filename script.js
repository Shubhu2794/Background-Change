const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
  "#FF0000",
  "#FFFFFF",
  "#00FFFF",
  "#C0C0C0",
  "#0000FF",
  "#808080",
  "#00008B",
  "#000000",
  "#ADD8E6",
  "#FFA500",
  "#800080",
  "#A52A2A",
  "#FFFF00",
  "#800000",
  "#00FF00",
  "#008000",
  "#FF00FF",
  "#808000",
  "#FFC0CB",
  "#7FFFD4"
];

function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;