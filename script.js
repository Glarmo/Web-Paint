const pixels = document.getElementsByClassName("pixel");
const smallCanvas = document.getElementById("small");
const mediumCanvas = document.getElementById("medium");
const largeCanvas = document.getElementById("large");
const canvas = document.getElementById("canvas");

function enableDrawing() {
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mouseover", colorIn);
  }
}
enableDrawing();
function createCanvas(size) {
  return function () {
    console.log(canvas.innerHTML);
    canvas.innerHTML = ""
    for (let i = 0; i < size; i++) {
      //create pixel and append to canvas
      const pixel = document.createElement("div");
      pixel.className = "pixel";
      canvas.appendChild(pixel);
      pixel.style.width = "87px";
      pixel.style.height = "18px";
    }
    enableDrawing();
  };
}

function colorIn() {
  console.log("hover");
  this.style.backgroundColor = "red";
}

smallCanvas.addEventListener("click", createCanvas(100));

mediumCanvas.addEventListener("click", createCanvas(200));

largeCanvas.addEventListener("click", createCanvas(300));
