const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

const { exec } = require('child_process');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Operation functions
function add(a, b) {
  return new Promise((resolve, reject) => {
    exec(`./my_c_program ${a} ${b}`, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        reject(`Stderr: ${stderr}`);
        return;
      }

      const result = parseInt(stdout.trim(), 10);
      resolve(result);
    });
  });
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Route for handling calculations
app.post("/calculate", async(req, res) => { // NOTE: now the call must be 'async'
    const { num1, num2, operator } = req.body;

    if (isNaN(num1) || isNaN(num2)) {
        return res.json({ error: "Invalid input" });
    }

    let result;
    switch (operator) {
        case "+":
            result = await add(num1, num2); // NOTE: the use of keyword 'await'
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            return res.json({ error: "Invalid operation" });
    }
    res.json({ result });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

