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

document.getElementById("submit-btn").addEventListener("click", validateForm);
document.getElementById("message").addEventListener("input", updateCharCounter);

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const errors = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate Name
  if (name.length < 3) {
    errors.push("Name must be at least 3 characters.");
  } else if (name.length > 20) {
    errors.push("Name must not exceed 20 characters.");
  }

  // Validate Email
  if (!emailRegex.test(email)) {
    errors.push("Invalid email address.");
  }

  // Validate Subject
  if (subject.length === 0) {
    errors.push("Subject cannot be empty.");
  } else if (subject.length > 30) {
    errors.push("Subject must not exceed 30 characters.");
  }

  // Validate Message
  if (message.length < 100) {
    errors.push("Message must be at least 100 characters.");
  } else if (message.length > 200) {
    errors.push("Message must not exceed 200 characters.");
  }

  // Display Errors
  const errorMessages = document.getElementById("error-messages");
  if (errors.length > 0) {
    errorMessages.style.color = "red";
    errorMessages.innerHTML = errors.join("<br>");
  } else {
    errorMessages.style.color = "green";
    errorMessages.innerHTML = "Form submitted successfully!";
    // Proceed with form submission (e.g., AJAX call)
  }
}

function updateCharCounter() {
  const message = document.getElementById("message").value;
  const remainingChars = 200 - message.length;
  const charCounter = document.getElementById("char-counter");
  charCounter.textContent = `Characters left: ${remainingChars}`;
  if (remainingChars < 0) {
    charCounter.style.color = "red";
  } else {
    charCounter.style.color = "black";
  }
}

// const toggleTheme = () => {
//   const theme = document.documentElement.getAttribute('data-theme');
//   if (theme === 'dark') {
//     document.documentElement.setAttribute('data-theme', 'light');
//   } else {
//     document.documentElement.setAttribute('data-theme', 'dark');
//   }
// };

// document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);