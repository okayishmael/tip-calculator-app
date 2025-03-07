const bill = document.getElementById("bill");
const numberOfPeople = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const customTipInput = document.getElementById("custom-tip");
const errorMessage = document.getElementById("error-message");

function calculateTip(tipPercentage) {
  let billValue = parseFloat(bill.value);
  let numOfPerson = parseFloat(numberOfPeople.value);

  // Validate bill value and number of people

  if (isNaN(billValue) || billValue <= 0) {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    return;
  }

  if (isNaN(numOfPerson) || numOfPerson <= 0) {
    numberOfPeople.classList.add("error"); // Highlight the input
    errorMessage.style.display = "inline"; // Show error message
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    return;
  } else {
    numberOfPeople.classList.remove("error"); // Remove highlight
    errorMessage.style.display = "none"; // Hide error message
  }

  let personTip = (billValue * tipPercentage) / numOfPerson;
  let personTotal = billValue / numOfPerson + personTip;
  tipAmount.textContent = `$${personTip.toFixed(2)}`;
  totalAmount.textContent = `$${personTotal.toFixed(2)}`;
}

// Event listeners for tip buttons

document
  .getElementById("tip-5")
  .addEventListener("click", () => calculateTip(0.05));

document
  .getElementById("tip-10")
  .addEventListener("click", () => calculateTip(0.1));

document
  .getElementById("tip-15")
  .addEventListener("click", () => calculateTip(0.15));

document
  .getElementById("tip-25")
  .addEventListener("click", () => calculateTip(0.25));

document
  .getElementById("tip-50")
  .addEventListener("click", () => calculateTip(0.5));

customTipInput.addEventListener("input", function () {
  const customTipValue = parseFloat(this.value);

  if (isNaN(customTipValue) || customTipValue < 0 || customTipValue > 100) {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    return; // Exit if invalid input
  }

  calculateTip(customTipValue / 100); // Convert to percentage
});

// Reset button functionality

document.getElementById("reset-btn").addEventListener("click", () => {
  bill.value = "";
  numberOfPeople.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  customTipInput.value = ""; // Reset custom tip input
  numberOfPeople.classList.remove("error"); // Remove highlight
  errorMessage.style.display = "none"; // Hide error message
});
