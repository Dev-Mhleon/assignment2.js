//Operational Function
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed";
  }
  return a / b;
}

// Main Function
function calculator(operation, firstDigit, secondDigit) {
  if (typeof firstDigit !== "number" || typeof secondDigit !== "number") {
    return "Error: Invalid number input";
  }

  switch (operation) {
    case "add":
      return addition(firstDigit, secondDigit);
    case "subtract":
      return subtraction(firstDigit, secondDigit);
    case "multiply":
      return multiplication(firstDigit, secondDigit);
    case "divide":
      return division(firstDigit, secondDigit);
    default:
      return "Error: Invalid operation";
  }
}

// Test
console.log(calculator("add", 10, 5));  
console.log(calculator("subtract", 10, 5));  
console.log(calculator("multiply", 4, 3)); 
console.log(calculator("divide", 20, 4));
console.log(calculator("divide", 10, 0)); 

console.log(calculator("invalid", 5, 3)); 
