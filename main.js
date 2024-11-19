const box = document.querySelector('picture.img');

function randomMovement() {
  const directions = ['right', 'left', 'up', 'down'];
  const randomDirection = directions[Math.floor(Math.random() * directions.length)];
  const moveDistance = 4;

  let x = 0, y = 0;

  if (randomDirection === 'right') x += moveDistance;
  if (randomDirection === 'left') x -= moveDistance;
  if (randomDirection === 'up') y -= moveDistance;
  if (randomDirection === 'down') y += moveDistance;


  box.style.transform = `translate(${x}px, ${y}px)`;
}

let movementInterval;

box.addEventListener('mouseover', () => {

  if (!movementInterval) {
    movementInterval = setInterval(randomMovement, 50);
  }
});

box.addEventListener('mouseout', () => {

  clearInterval(movementInterval);
  movementInterval = null;
});


// const toggleTheme = () => {
//   const theme = document.documentElement.getAttribute('data-theme');
//   if (theme === 'dark') {
//     document.documentElement.setAttribute('data-theme', 'light');
//   } else {
//     document.documentElement.setAttribute('data-theme', 'dark');
//   }
// };

// document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);