
const grid = document.querySelector('.grid');

function createGrid(size=50) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < size; j++) {
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
  let gridSize = prompt("Size of grid?");
  if (!Number(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Invalid value! Using default grid size of 50.");
  } else {
    resetGrid();
    createGrid(gridSize);
  }
}

function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

createGrid();
