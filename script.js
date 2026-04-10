const container = document.querySelector(".container")

// Function to generate 16x16 square div
function generateGrid(height = 16, width = 16) {
  container.innerHTML= '';

  for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("square");
      gridSquare.style.height = `${512 / height}px`;
      gridSquare.style.width = `${512 / width}px`;

      onMouseHover(gridSquare);
      container.appendChild(gridSquare);      
    }
  }
}


// Function to detect hover effect
function onMouseHover(gridSquare, e) {
  gridSquare.addEventListener("mouseenter", e => {
    gridSquare.classList.add("hovered");
    const currentOpacity = window.getComputedStyle(gridSquare).getPropertyValue("opacity");
    gridSquare.style.opacity = `${+currentOpacity + 0.1}`
  });
}

// Function to get current user input on how big the grid are
function updateGridSize() {
  const height = document.querySelector("#height");
  const heightOutput = document.querySelector("#heightValue");
  const width = document.querySelector("#width");
  const widthOutput = document.querySelector("#widthValue");

  let currentHeight = 16, 
    currentWidth = 16;

  height.addEventListener("input", e => {
    currentHeight = e.target.value;
    heightOutput.textContent = e.target.value;
    generateGrid(currentHeight, currentWidth)
  });

  width.addEventListener("input", e => {
    currentWidth = e.target.value;
    widthOutput.textContent = e.target.value;
    generateGrid(currentHeight, currentWidth)
  });
}

updateGridSize()
generateGrid()