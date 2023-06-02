const pixels = document.getElementsByClassName("pixel");
const smallCanvas = document.getElementById("small");
const mediumCanvas = document.getElementById("medium");
const largeCanvas = document.getElementById("large");
const canvas = document.getElementById("canvas");
const title = document.getElementById("title");
const colorPicker = document.getElementById("colorPicker");
const removeLines = document.getElementById("grid");

let drawing = true;
let erasing = false;
let currentColor = "#FF0000";

smallCanvas.addEventListener("click", createCanvas(100));

mediumCanvas.addEventListener("click", createCanvas(400));

largeCanvas.addEventListener("click", createCanvas(900));

colorPicker.addEventListener("change", changeColor);

removeLines.addEventListener("click", toggleGridLines);

canvas.oncontextmenu = function () {
  erasing = !erasing;
  return false;
};

canvas.onmousedown = function (event) {
  if (event.button == 0) {
    drawing = !drawing;
  }
};

onmouseup = function () {
  if (drawing) {
    drawing = !drawing;
  }
  if (erasing) {
    erasing = !erasing;
  }
};

let onLoad = createCanvas(100);
onLoad();

function enableDrawing() {
  drawing = !drawing;
}

function preparePixels() {
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mouseover", colorIn);
    pixels[i].addEventListener("mousedown", colorIn);
  }
}

function changeColor(event) {
  currentColor = event.target.value;
}

enableDrawing();
function createCanvas(size) {
  return function () {
    canvas.innerHTML = "";
    let root = Math.sqrt(size / 100);
    let columns = size / 10 / root;
    for (let i = 0; i < size; i++) {
      //create pixel and append to canvas
      const pixel = document.createElement("div");
      pixel.className = "pixel";
      canvas.appendChild(pixel);
      pixel.style.width = "18px";
      pixel.style.height = "18px";
    }
    canvas.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    preparePixels();
  };
}

function colorIn(event) {
  if (drawing || (event.type == "mousedown" && event.button == 0)) {
    this.style.backgroundColor = currentColor;
  } else if (erasing) {
    this.style.backgroundColor = "transparent";
  }
}

function toggleGridLines() {
  if (pixels[0].style.border == "none") {
    for (let i = 0; i < pixels.length; i++) {
      pixels[i].style.border = "1px dotted grey";
    }
  } else {
    for (let i = 0; i < pixels.length; i++) {
      pixels[i].style.border = "none";
    }
  }
}

function getColor() {
  let color = title.style.color;
  return color;
}
