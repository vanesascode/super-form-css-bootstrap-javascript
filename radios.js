///////////////////////////////////////////////////////////////////////

//To make the textarea appear if the "other" radio is checked:

function appearOtherRadioTextarea() {
  const otherRadio = document.getElementById("other-radio-input");
  const otherInput = document.getElementById("other-radio-textarea");

  if (otherRadio.checked) {
    otherInput.style.display = "block";
    otherInput.required = true;
  } else {
    otherInput.style.display = "none";
    otherInput.required = false;
    otherInput.value = "";
  }
}

//To make the textarea disappear if one of the other radios is checked:

function removeOtherRadioTextarea() {
  const socialmediaRadio = document.getElementById("socialmedia");
  const googleRadio = document.getElementById("google");
  const friendsRadio = document.getElementById("friends");
  const otherInput = document.getElementById("other-radio-textarea");

  if (socialmediaRadio.checked || googleRadio.checked || friendsRadio.checked) {
    otherInput.style.display = "none";
    otherInput.required = false;
    otherInput.value = "";
  } else {
    otherInput.style.display = "block";
    otherInput.required = true;
  }
}


///////////////////////////////////////////////////////////////////////

// to make the red message appear if no radios are checked:

document
  .getElementById("student-form")
  .addEventListener("submit", (event) => {
    const radioOptions = document.getElementsByName("learnaboutus");
    const isChecked = Array.from(radioOptions).some(
      (option) => option.checked
    );

    if (!isChecked) {
      event.preventDefault(); // Prevent form submission
      // alert("Please select a payment option before submitting the form.");
      const selectRadioDiv = document.getElementById("alert-radios");
      selectRadioDiv.textContent =
        "Please select a study prefered method before submitting the form.";
      selectRadioDiv.style.color = "red";
      //This part is for the screen to scroll up to the range input so the user can see the red message:
      const inputElement = document.getElementById("level");
      inputElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });



//To make the red message disappear:

document
  .getElementById("student-form")
  .addEventListener("change", (event) => {
    const radioOptions = document.getElementsByName("learnaboutus");
    const isChecked = Array.from(radioOptions).some(
      (option) => option.checked
    );

    if (isChecked) {
      const messageDiv = document.getElementById("alert-radios");
      messageDiv.textContent = "";

    }
  });


  //////////////////////////////////////////////////////////////////