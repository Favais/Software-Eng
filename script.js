const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let resultDisplayed = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "C") {
            currentInput = "";
            display.textContent = "0";
            resultDisplayed = false;
        } else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput;
                resultDisplayed = true;
            } catch {
                display.textContent = "Error";
                currentInput = "";
                resultDisplayed = false;
            }
        } else {
            if (resultDisplayed && !isNaN(value)) {
                // Start new input if a digit is pressed after result
                currentInput = value;
            } else {
                currentInput += value;
            }
            display.textContent = currentInput;
            resultDisplayed = false;
        }
    });
});
