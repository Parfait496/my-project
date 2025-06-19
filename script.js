// DOM manipulation example

// Get elements from the DOM
const heading = document.getElementById("main-heading");
const description = document.getElementById("description");
const button = document.getElementById("changeBtn");

// Add click event to the button
button.addEventListener("click", () => {
  heading.textContent = "You clicked the button!";
  description.textContent = "The DOM is powerful. You just changed this content using JavaScript!";
  heading.style.color = "green";
});
