# Super Form with all input types!

In this educational enrollement form I'm trying to include all types of inputs, elements and attributes there are for forms.

Have a look at its [PROGRESS](https://vanesascode.github.io/super-form-css-bootstrap-javascript/)

## Bootstrap forms:

I've been learning how to build a form with Bootstrap following its [documentation](https://getbootstrap.com/docs/5.3/forms/overview/) about it.

## HTML forms:

🔷 I've been following the guide of [w3schools.com](https://www.w3schools.com/html/html_forms.asp) for all the form input fields I used.

🔷 I used a `title` attribute in each input field to provide a personalized tooltip or hint for each input field.

❗❗❗ This code is still here as an example, but not working anymore since I REMOVED ALL THE `REQUIRED` ATTRIBUTES FROM ALL THE INPUTS and the Javascript rules over ():

🔷 I used regular expressions(RegExp) to set rules when filling in the input fields. Check [w3schools.com](https://www.w3schools.com/jsref/jsref_obj_regexp.asp) for learning how it works. They are set in the `pattern`attribute of the input fields. (NOT VALID ANYMORE, THE JAVASCRIPT RULES OVER THIS - see `redMessages.js`)

🔷 I set a custom validation message for the input fields with the `setCustomValidity()` method in the `oninvalid` attribute which is an event handler in HTML that is triggered when a form element fails validation. (NOT VALID ANYMORE, THE JAVASCRIPT RULES OVER THIS - see `redMessages.js`)

🔷 To remove the error message once the user starts correcting their input or making changes to the input field I used `setCustomValidity('')` on the `oninput` attribute, which is an event handler in HTML that is triggered when the value of an input field is changed. (NOT VALID ANYMORE, THE JAVASCRIPT RULES OVER THIS - see `redMessages.js`)

I created a Javascript function called `validateInput()`, to be called on the `oninput` attribute, so once the input provided by the user meets certain criteria or requirements, the form lets you go to the next input (which is defined in the second parameter). (NOT VALID ANYMORE, THE JAVASCRIPT RULES OVER THIS - see `redMessages.js`) This is the function:

```
function validateInput(input, nextInputId) {
  if (input.validity.valid) {
    document.getElementById(nextInputId).focus();
  }
}
```

## Javascript:

You can check different steps for the javascript form functioning in the different files:

### 🔸 In `radios.js` you'll find:

The way to make a textarea appear if the "other" radio is checked, so the user can make comments about their selection. Also, you'll see how to make the textarea disappear if one of the other radios is checked.

You'll also see how to make a red message appear if none of the radios are checked and how to remove it once one of the radios is checked.

---

### 🔸 In `checkboxes.js` you'll find:

The same as in the 'radios.js' but applied to the checkboxes.

---

### 🔸 In `redMessages.js` you'll find:

The code to add a red border and alert message to the text inputs of the form that are empty or that don't follow their defined RegEx pattern, with two functions:

#### ☘️ validateInput(inputName, alertName)

A function I created to make sure that no input is empty when the user presses the submit button:

- The function gets all the elements with the name specified in "inputName" and the element with the ID specified in "alertName":

```
 const inputElements = Array.from(document.getElementsByName(inputName));
  const alertDiv = document.getElementById(alertName);
```

- It then checks if any of the input elements are empty and sets a boolean variable "isEmpty" accordingly:

```
  const isEmpty = inputElements.some((element) => element.value.trim() === "");
```

- The function then loops through each input element and sets its border color to red if "isEmpty" is true, and grey if it's false:

```
  inputElements.forEach((element) => {
    element.style.border = isEmpty ? "solid 1px red" : "solid 1px grey";

...}
```

- It also scrolls the element into view and sets its action to prevent the default event if "isEmpty" is true:

```
    element.scrollIntoView({ behavior: "smooth", block: "end" });
    element.action = isEmpty ? event.preventDefault() : "";
```

- Finally, the function sets the display style of the alert message to "block" if "isEmpty" is true, and "none" if it's false:

```
alertDiv.style.display = isEmpty ? "block" : "none";
```

The code then adds an event listener to the "submit" event of the element with the id of the form, which is "student-form". When the form is submitted, it calls the "validateInput" function multiple times with different arguments (one for each input)

```
document.getElementById("student-form").addEventListener("submit", (event) => {
  validateInput("name", "alert-name");
  validateInput("surname", "alert-surname");
    etc..
});
```

#### ☘️ removeInputErrors(input, alert, regex)

Another function to validate when the user makes changes to the input:

- The function first trims the value of the input element and assigns it to the "value" variable:

```
  const value = input.value.trim();
```

- Then, it tests if the "value" matches the regular expression using the "test" method. The result of this test is assigned to the "isValid" variable:

```
  const isValid = regex.test(value);
```

- Next, the function sets the border style of the input element based on the "isValid" value. If "isValid" is true, the border will be set to "solid 1px grey". Otherwise, it will be set to "solid 1px red":

```
input.style.border = isValid ? "solid 1px grey" : "solid 1px red";
```

- Finally, the function sets the visibility style of the alert element based on the "isValid" value. If "isValid" is true, the alert will be hidden by setting the visibility to "hidden". Otherwise, it will be set to "visible" to display the error message:

```
alert.style.visibility = isValid ? "hidden" : "visible";
```

However, in order to work, we need once again an `event listener`. We first get the arguments of the function for each input, e.g.:

```
const nameInput = document.getElementById("name");
const nameAlert = document.getElementById("alert-name");
const nameRegex = /^[A-Za-z]+$/;
```

The removeInputErrors function is called, passing arguments of each input. This function is responsible for removing any input errors related to the input field:

```
nameInput.addEventListener("input", function (e) {
  removeInputErrors(nameInput, nameAlert, nameRegex);
});
```

👉 In order to confirm the password, I set another similar function which instead of a Regex validation, has the first password as the third argument in order to validate:

```
function removeInputErrorsConfirmationPassword(input, alert, matchInput) {
  const value = input.value.trim();
  const isValid = value === matchInput.value.trim();

  input.style.border = isValid ? "solid 1px grey" : "solid 1px red";
  alert.style.visibility = isValid ? "hidden" : "visible";
}
```

---

### 🔸 In `selectInputs.js` you'll find:

The code to add a red border and alert message to the choose inputs of the form that are empty:

First I take all inputs in a variable to be able to work with them.

Then, I add an event listener to the submit button, so that if any of the inputs doesn't have a value, the border becomes red and the alert message appears:

```
  if (datalistOptions.value === "") {
    datalistOptions.style.border = "solid 1px red";
    datalistMessageDiv.style.display = "block";
    event.preventDefault();
  }
```

Then, I add an event listener to each choose input, so, in case I fill them with a value, the border and alert disappear:

```
datalistOptions.addEventListener("change", () => handleFormElementChange(datalistOptions, datalistMessageDiv));
```

The function in charge of that is this:

```
function handleFormElementChange(element, messageDiv) {
  if (element.value !== "") {
    element.style.border = "";
    messageDiv.style.display = "none";
  }
}
```

### 🔸 In `blueMessages.js` you'll find:

The code to add a fun blue message to the non-compulsary inputs of the form:

First I take all inputs in a variable to be able to work with them.

Then I add two event listenerers to each, a focus and a blur one:

```
inputMockElement.addEventListener('focus', handleMockInputFocus);
inputMockElement.addEventListener('blur', handleMockInputBlur);
```

And set the functions for each:

```

function handleMockInputFocus() {
  messageMockElement.style.display = 'block';
}

function handleMockInputBlur() {
  messageMockElement.style.display = 'none';
}
```

---

### 🔸 In `otherFeatures.js` you'll find:

❗❗❗ The `validateInput()` function I mentioned before. (NOT VALID ANYMORE, THE JAVASCRIPT `redMessages.js` RULES OVER THIS)

✅ Also, you'll find a function called `showValue()`to make the value of the range input appear below the slider:

```
function showValue(value) {
  const valueDisplay = document.getElementById("valueDisplay");
  valueDisplay.textContent = value;
}
```
