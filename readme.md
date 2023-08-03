# Super Form with all input types!

In this educational enrollement form I'm trying to include all types of inputs, elements and attributes there are for forms.

Have a look at its [PROGRESS](https://vanesascode.github.io/super-form-css-bootstrap-javascript/)

## HTML forms:

I've been following the guide of [w3schools.com](https://www.w3schools.com/html/html_forms.asp), which I really recommend.

## Bootstrap forms:

I've been learning how to build a form with Bootstrap following its [documentation](https://getbootstrap.com/docs/5.3/forms/overview/) about it.

## Javascript:

### 🔹 When we want the user to write comments if they choose a specific radio or checkbox we can take the elements from the DOM and program them:

```
   function toggleOtherInput() {
        const otherCheckbox = document.getElementById("other");
        const otherInput = document.getElementById("tellus");

        if (otherCheckbox.checked) {
          otherInput.style.display = "block";
          otherInput.required = true;
        } else {
          otherInput.style.display = "none";
          otherInput.required = false;
        }
      }
```

So, in this case, we got the radio that is called other( with the ID ) and the input we want to appear only when this radio is checked (otherwise it is invisible). Then, we make an if condition in which the text input appears and is required once the other radio is checked.

### 🔹 If we want to see a particular message when the input is not correctly filled, we have this option:

We set a pattern to follow, and use the oninvalid attribute in the input tag to tell you what rule it follows.

```
pattern="[a-zA-Z]+"
oninvalid="this.setCustomValidity('Please enter only letters.')"
oninput="this.setCustomValidity('')"
oninput="validateInput(this, 'surname')"
```

```
function validateInput(input, nextInputId) {
        if (input.validity.valid) {
          document.getElementById(nextInputId).focus();
        }
      }
```

### 🔹 Since checkbox inputs go individual and you cannot put 'required' in each of them, you can use Javascript to force the user to select at least one checkbox option:

```
const form = document.querySelectorById("student-form");

form.addEventListener("submit", (event) => {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"][name="languages"]'
  );

  const isChecked = Array.from(checkboxes).some(
    (checkbox) => checkbox.checked
  );

  if (!isChecked) {
    event.preventDefault();
    alert("Please choose at least one language.");
  }
});
```

1. The code starts by selecting the form element with the id "student-form" using the querySelectorById method and assigns it to the form constant. (We could directly select the item 'form' but it is not a good idea when you have different forms in the same html file, as it is the case here)

2. An event listener is added to the form using the addEventListener method. The event being listened to is the "submit" event, which is triggered when the form is submitted.

3. Inside the event listener function, the code selects all input elements of type checkbox with the name "languages" using the querySelectorAll method and assigns them to the checkboxes constant.

4. The `Array.from` method is used to convert the `checkboxes  NodeList` into an array (The NodeList represents a live collection, meaning any changes to the DOM that affect the matched elements will automatically update the collection.).

Then, the `some  method` is called on the array to check if at least one checkbox is checked. The some method takes a callback function as an argument, which checks if the checked property of each checkbox is true. The result is assigned to the isChecked constant.

5. If isChecked is false, it means no checkbox is checked. In this case, the code prevents the form from being submitted by calling the `preventDefault  method` on the event object. It also displays an alert message with the text "Please choose at least one language."
