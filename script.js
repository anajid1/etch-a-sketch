console.log("Hello World");

const grid = document.querySelector('.grid');

for (let i = 0; i < 100; i++) {
  const row = document.createElement('div');
  row.classList.add('row');

  for (let j = 0; j < 100; j++) {
    const box = document.createElement('div');
    box.classList.add('box');

    box.addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = 'black';
    });

    row.appendChild(box);
  }

  grid.appendChild(row);
}
