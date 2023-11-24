const formular = document.querySelector("form");
const passwordOne = document.querySelector("#password_one");
const passwordTwo = document.querySelector("#password_two");
const errorDiv = document.querySelector("#error_div");
const passwordButton = document.querySelector("#password_button");
const errorTriangleOne = document.querySelector("#error_triangle_one");
const errorTriangleTwo = document.querySelector("#error_triangle_two");
const symbolEqual = document.querySelector("#symbol_equal");
const symbolLower = document.querySelector("#symbol_lower");
const symbolUpper = document.querySelector("#symbol_upper");
const symbolNumbers = document.querySelector("#symbol_numbers");
const symbolTenCharacters = document.querySelector("#symbol_tenCharacters");

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

localStorage.removeItem("password");

function initialForm() {
  localStorage.removeItem("formState");
  const formState = {
    buttonText: passwordButton.innerText,
    inputType: passwordOne.type,
  };
  localStorage.setItem("formState", JSON.stringify(formState));
}

initialForm();

function initialComparison() {
  localStorage.removeItem("passwordComparison");
  const passwordComparison = {
    equal: "no",
    lowCase: "no",
    uppCase: "no",
    numbers: "no",
    tenChar: "no",
  };
  localStorage.setItem(
    "passwordComparison",
    JSON.stringify(passwordComparison)
  );
}

initialComparison();

function initialSymbols() {
  symbolEqual.innerText = "❌";
  symbolLower.innerText = "❌";
  symbolUpper.innerText = "❌";
  symbolNumbers.innerText = "❌";
  symbolTenCharacters.innerText = "❌";
}

initialSymbols();

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function renderState() {
  const formState = JSON.parse(localStorage.getItem("formState"));
  passwordButton.innerText = formState.buttonText;
  passwordOne.type = formState.inputType;
  passwordTwo.type = formState.inputType;

  const passwordComparison = JSON.parse(
    localStorage.getItem("passwordComparison")
  );
  initialSymbols();
  if (passwordComparison.equal === "yes") {
    symbolEqual.innerText = "✅";
  }
  if (passwordComparison.lowCase === "yes") {
    symbolLower.innerText = "✅";
  }
  if (passwordComparison.uppCase === "yes") {
    symbolUpper.innerText = "✅";
  }
  if (passwordComparison.numbers === "yes") {
    symbolNumbers.innerText = "✅";
  }
  if (passwordComparison.tenChar === "yes") {
    symbolTenCharacters.innerText = "✅";
  }
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

formular.addEventListener("click", function () {
  errorDiv.style.display = "none";
  errorTriangleOne.style.display = "none";
  errorTriangleTwo.style.display = "none";
});

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

formular.addEventListener("keydown", function () {
  errorDiv.style.display = "none";
  errorTriangleOne.style.display = "none";
  errorTriangleTwo.style.display = "none";
});

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function lowerCase() {
  const firstValue = passwordOne.value;
  let counter = 0;

  for (let i = 0; i < firstValue.length; i++) {
    const isFirstValueLow = firstValue[i] === firstValue[i].toLowerCase();
    const isANumber = firstValue[i] == parseInt(firstValue[i]);
    if (isFirstValueLow && !isANumber) {
      counter++;
    }
  }

  const passwordComparison = JSON.parse(
    localStorage.getItem("passwordComparison")
  );
  if (counter >= 1) {
    passwordComparison.lowCase = "yes";
  }
  localStorage.setItem(
    "passwordComparison",
    JSON.stringify(passwordComparison)
  );
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function upperCase() {
  const firstValue = passwordOne.value;
  let counter = 0;

  for (let i = 0; i < firstValue.length; i++) {
    const isFirstValueUpp = firstValue[i] === firstValue[i].toUpperCase();
    const isANumber = firstValue[i] == parseInt(firstValue[i]);
    if (isFirstValueUpp && !isANumber) {
      counter++;
    }
  }

  const passwordComparison = JSON.parse(
    localStorage.getItem("passwordComparison")
  );
  if (counter >= 1) {
    passwordComparison.uppCase = "yes";
  }
  localStorage.setItem(
    "passwordComparison",
    JSON.stringify(passwordComparison)
  );
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function numberInIt() {
  const firstValue = passwordOne.value;
  let counter = 0;

  for (let i = 0; i < firstValue.length; i++) {
    const isFirstValueNumber = firstValue[i] == parseInt(firstValue[i]);
    if (isFirstValueNumber) {
      counter++;
    }
  }

  const passwordComparison = JSON.parse(
    localStorage.getItem("passwordComparison")
  );
  if (counter >= 1) {
    passwordComparison.numbers = "yes";
  }
  localStorage.setItem(
    "passwordComparison",
    JSON.stringify(passwordComparison)
  );
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function tenCharacters() {
  const firstValue = passwordOne.value;
  const passwordComparison = JSON.parse(
    localStorage.getItem("passwordComparison")
  );
  if (firstValue.length >= 10) {
    passwordComparison.tenChar = "yes";
  }
  localStorage.setItem(
    "passwordComparison",
    JSON.stringify(passwordComparison)
  );
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function thePassword() {
  const firstValue = passwordOne.value;
  const passwordComparison = JSON.parse(
    localStorage.getItem("passwordComparison")
  );
  const theValues = Object.values(passwordComparison);
  const noIncluded = theValues.includes("no");
  if (!noIncluded) {
    localStorage.setItem("password", JSON.stringify(firstValue));
  }
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function isEqual() {
  initialComparison();
  const passwordComparison = JSON.parse(
    localStorage.getItem("passwordComparison")
  );
  if (passwordOne.value === passwordTwo.value) {
    passwordComparison.equal = "yes";
  }
  localStorage.setItem(
    "passwordComparison",
    JSON.stringify(passwordComparison)
  );
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function compareThePasswords(event) {
  const inputValue = event.target.value;
  const isValid = /^[a-zA-Z0-9üöäßÜÖÄ]+$/.test(inputValue);

  if (isValid) {
    isEqual();
    const passwordComparison = JSON.parse(
      localStorage.getItem("passwordComparison")
    );
    if (passwordComparison.equal === "yes") {
      lowerCase();
      upperCase();
      numberInIt();
      tenCharacters();
      thePassword();
    }
  } else if (event.target.value !== "") {
    errorDiv.style.display = "block";
    if (event.target.id === passwordOne.id) {
      errorDiv.style.top = "-25px";
      errorDiv.style.left = "40px";
      errorTriangleOne.style.display = "block";
    } else {
      errorDiv.style.top = "80px";
      errorDiv.style.left = "40px";
      errorTriangleTwo.style.display = "block";
    }
    event.target.value = inputValue.slice(0, -1);
  } else if (event.target.value === "") {
    initialComparison();
  }
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

passwordOne.addEventListener("input", function (event) {
  compareThePasswords(event);
  renderState();
});

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

passwordTwo.addEventListener("input", function (event) {
  compareThePasswords(event);
  renderState();
});

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

passwordButton.addEventListener("click", function () {
  const formState = JSON.parse(localStorage.getItem("formState"));
  if (passwordOne.type === "password") {
    formState.buttonText = "Hide Passwords";
    formState.inputType = "text";
  } else {
    formState.buttonText = "Show Passwords";
    formState.inputType = "password";
  }
  localStorage.setItem("formState", JSON.stringify(formState));
  renderState();
});
