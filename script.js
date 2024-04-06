// Store the previous background color
let previousColor = window.getComputedStyle(document.body).backgroundColor;

// Get the color buttons and undo button elements from the html
const colorButtons = document.querySelectorAll('.color-button');
const undoButton = document.getElementById('undo-button');

// Add event listeners to the color buttons
colorButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    // Prevent event propagation to the page
    event.stopPropagation();

    // Get the background color of the clicked button
    const color = window.getComputedStyle(button).backgroundColor;

    // Change the background color of the page
    document.body.style.backgroundColor = color;
  });
});

// Add event listener to the page
document.addEventListener('click', function() {
  // Revert the background color to the previous state
  document.body.style.backgroundColor = previousColor;
});

// Add event listener to the undo button
undoButton.addEventListener('click', function(event) {
  // Prevent event propagation to the page
  event.stopPropagation();

  // Revert the background color to the previous state
  document.body.style.backgroundColor = previousColor;
});

// Function to change the previous background color
function changePreviousColor(color) {
  previousColor = color;
}