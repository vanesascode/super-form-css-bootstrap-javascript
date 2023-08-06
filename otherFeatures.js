//When an input is filled in as required, so you can go to the next input:

function validateInput(input, nextInputId) {
  if (input.validity.valid) {
    document.getElementById(nextInputId).focus();
  }
}

// to show the value of the range input:
function showValue(value) {
  const valueDisplay = document.getElementById("valueDisplay");
  valueDisplay.textContent = value;
}