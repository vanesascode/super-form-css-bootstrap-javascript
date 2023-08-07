
// Store the elements outside of the functions

const otherCheckbox = document.getElementById("other-checkbox-input");
const otherCheckboxTextarea = document.getElementById("other-checkbox-textarea");


//To make the textarea appear if the "other" checkbox is checked:
function appearOtherCheckboxTextarea() {
  if (otherCheckbox.checked) {
    otherCheckboxTextarea.style.display = "block";
    otherCheckboxTextarea.required = true;
  } else {
    otherCheckboxTextarea.style.display = "none";
    otherCheckboxTextarea.required = false;
    otherCheckboxTextarea.value = "";
  }
}

// To make the red message appear if no checkboxes are checked:
const checkboxOptions = document.getElementsByName("languages");
const selectCheckboxDiv = document.getElementById("alert-checkboxes");

document.getElementById("student-form").addEventListener("submit", (event) => {
  const isChecked = Array.prototype.some.call(checkboxOptions, (option) => option.checked);

  if (!isChecked) {
    event.preventDefault();
    selectCheckboxDiv.innerText = "Please select at least one option before submitting the form.";
    selectCheckboxDiv.style.color = "red";
    const inputElement = document.getElementById("level");
    inputElement.scrollIntoView({ behavior: "auto", block: "end" });
  }
});

//To make the red message disappear:
document.getElementById("student-form").addEventListener("change", (event) => {
  const isChecked = Array.prototype.some.call(checkboxOptions, (option) => option.checked);

  if (isChecked) {
    selectCheckboxDiv.innerText = "";
  }
});