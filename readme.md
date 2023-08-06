# Super Form with all input types!

In this educational enrollement form I'm trying to include all types of inputs, elements and attributes there are for forms.

Have a look at its [PROGRESS](https://vanesascode.github.io/super-form-css-bootstrap-javascript/)

## Bootstrap forms:

I've been learning how to build a form with Bootstrap following its [documentation](https://getbootstrap.com/docs/5.3/forms/overview/) about it.

## HTML forms:

🔷 I've been following the guide of [w3schools.com](https://www.w3schools.com/html/html_forms.asp) for all the form input fields I used.

🔷 I used a `title` attribute in each input field to provide a personalized tooltip or hint for each input field.

🔷 I used regular expressions(RegExp) to set rules when filling in the input fields. Check [w3schools.com](https://www.w3schools.com/jsref/jsref_obj_regexp.asp) for learning how it works. They are set in the `patter`attribute of the input fields.

🔷 I set a custom validation message for the input fields with the `setCustomValidity()` method in the `oninvalid` attribute which is an event handler in HTML that is triggered when a form element fails validation.

🔷 To remove the error message once the user starts correcting their input or making changes to the input field I used `setCustomValidity('')` on the `oninput` attribute, which is an event handler in HTML that is triggered when the value of an input field is changed.

I created a Javascript function called `validateInput()`, to be called on the `oninput` attribute, so once the input provided by the user meets certain criteria or requirements, the form lets you go to the next input (which is defined in the second parameter). This is the function:

```
function validateInput(input, nextInputId) {
  if (input.validity.valid) {
    document.getElementById(nextInputId).focus();
  }
}
```

## Javascript:

You can check different steps for the javascript form functioning in the different files:

🔸 In `otherFeatures.js` you'll find the `validateInput()` function I mentioned before.

Also, you'll find a function called `showValue()`to make the value of the range input appear below the slider:

```
function showValue(value) {
  const valueDisplay = document.getElementById("valueDisplay");
  valueDisplay.textContent = value;
}
```

🔸 In `radios.js` you'll find the way to make a textarea appear if the "other" radio is checked, so the user can make comments about their selection. Also, you'll see how to make the textarea disappear if one of the other radios is checked.

You'll also see how to make a red message appear if none of the radios are checked and how to remove it once one of the radios is checked.

🔸 In `checkboxes.js` you'll find the same as in the 'radios.js' but applied to the checkboxes.
