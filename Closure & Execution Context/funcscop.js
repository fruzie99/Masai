
let age = 20; // Global variable


// Reading Global Variable
function displayAge() {
  console.log("Current age is:", age);
}

//Modifying Global Variable
function changeAge() {
  age = 25; // Updating global variable
  console.log("Age updated inside function to:", age);
}

// Calling Functions
displayAge();   // Output → Current age is: 20
changeAge();    // Output → Age updated inside function to: 25
displayAge();   // Output → Current age is: 25
