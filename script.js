
const grid = document.querySelector('.grid');

let gridSize = 50;

function createGrid() {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < gridSize; j++) {
      const box = document.createElement('div');
      box.classList.add('box');

      box.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = 'black';
      });

      row.appendChild(box);
    }

    grid.appendChild(row);
  }
}

function edit() {
  userInput = prompt("Size of grid?");
  if (!Number(userInput) || userInput < 1 || userInput > 100) {
    alert("Invalid value! Using default grid size of 50.");
    recreateGrid(50);
  } else {
    recreateGrid(userInput);
  }
}

function recreateGrid(newSize) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    gridSize = newSize;

    createGrid();
}

createGrid();
