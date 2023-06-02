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
    let root = Math.sqrt(size/100);
    let columns = (size/10) / root;
    for (let i = 0; i < size; i++) {
      //create pixel and append to canvas
      const pixel = document.createElement("div");
      pixel.className = "pixel";
      canvas.appendChild(pixel);
      pixel.style.width = "18px";
      pixel.style.height = "18px";
    }
    canvas.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    enableDrawing();
  };
}

function colorIn() {
  console.log("hover");
  this.style.backgroundColor = "red";
}

smallCanvas.addEventListener("click", createCanvas(100));

mediumCanvas.addEventListener("click", createCanvas(400));

largeCanvas.addEventListener("click", createCanvas(900));
