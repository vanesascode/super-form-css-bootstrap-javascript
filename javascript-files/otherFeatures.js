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

// to show a message when the readonly input is active: 

const inputElement = document.getElementById('mockinput');
const messageElement = document.getElementById('alert-mockinput');

inputElement.addEventListener('focus', function () {
  messageElement.style.display = 'block';
});

inputElement.addEventListener('blur', function () {
  messageElement.style.display = 'none';
});