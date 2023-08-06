///////////////////////////////////////////////////////////////////////

//To make the textarea appear if the "other" radio is checked:


function appearOtherCheckboxTextarea() {
  const otherCheckbox = document.getElementById("other-checkbox-input");
  const othercheckboxInput = document.getElementById("other-checkbox-textarea");

  if (otherCheckbox.checked) {
    othercheckboxInput.style.display = "block";
    othercheckboxInput.required = true;
  } else {
    othercheckboxInput.style.display = "none";
    othercheckboxInput.required = false;
    othercheckboxInput.value = "";
  }
}


///////////////////////////////////////////////////////////////////////

// to make the red message appear if no radios are checked:

document
  .getElementById("student-form")
  .addEventListener("submit", (event) => {
    const checkboxOptions = document.getElementsByName("languages");
    const isChecked = Array.from(checkboxOptions).some(
      (option) => option.checked
    );

    if (!isChecked) {
      event.preventDefault(); // Prevent form submission
      // alert("Please select a payment option before submitting the form.");
      const selectCheckboxDiv = document.getElementById("alert-checkboxes");
      selectCheckboxDiv.textContent =
        "Please select at least one option before submitting the form.";
      selectCheckboxDiv.style.color = "red";

      //This part is for the screen to scroll up to the range input so the user can see the red message:
      const inputElement = document.getElementById("level");
      inputElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });



//To make the red message disappear:

document
  .getElementById("student-form")
  .addEventListener("change", (event) => {
    const checkboxOptions = document.getElementsByName("languages");
    const isChecked = Array.from(checkboxOptions).some(
      (option) => option.checked
    );

    if (isChecked) {
      const selectCheckboxDiv = document.getElementById("alert-checkboxes");
      selectCheckboxDiv.textContent = "";

    }
  });


  //////////////////////////////////////////////////////////////////