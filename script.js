const formular = document.querySelector("form");
const passwordOne = document.querySelector("#password_one");
const passwordTwo = document.querySelector("#password_two");
const errorDiv = document.querySelector("#error_div");
const passwordButton = document.querySelector("#password_button");

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

localStorage.removeItem("password");

function initialForm() {
  localStorage.removeItem("formState");
  const formState = {
    buttonText: passwordButton.innerText,
    inputType: passwordOne.type,
  };
  localStorage.setItem("formState", JSON.stringify(formState));
  console.log(formState);
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
  console.log(passwordComparison);
}

initialComparison();

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function renderState() {
  const formState = JSON.parse(localStorage.getItem("formState"));
  console.log(formState);
  passwordButton.innerText = formState.buttonText;
  passwordOne.type = formState.inputType;
  passwordTwo.type = formState.inputType;

  const passwordComparison = JSON.parse(
    localStorage.getItem("passwordComparison")
  );
  console.log(passwordComparison);
  const symbolEqual = document.querySelector("#symbol_equal");
  if (passwordComparison.equal === "yes") {
    symbolEqual.innerText = "✅";
  } else {
    symbolEqual.innerText = "❌";
  }
  const symbolLower = document.querySelector("#symbol_lower");
  if (passwordComparison.lowCase === "yes") {
    symbolLower.innerText = "✅";
  } else {
    symbolLower.innerText = "❌";
  }
  const symbolUpper = document.querySelector("#symbol_upper");
  if (passwordComparison.uppCase === "yes") {
    symbolUpper.innerText = "✅";
  } else {
    symbolUpper.innerText = "❌";
  }
  const symbolNumbers = document.querySelector("#symbol_numbers");
  if (passwordComparison.numbers === "yes") {
    symbolNumbers.innerText = "✅";
  } else {
    symbolNumbers.innerText = "❌";
  }
  const symbolTenCharacters = document.querySelector("#symbol_tenCharacters");
  if (passwordComparison.tenChar === "yes") {
    symbolTenCharacters.innerText = "✅";
  } else {
    symbolTenCharacters.innerText = "❌";
  }
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

formular.addEventListener("click", function () {
  console.log("aaaaaaaaaaaaa");
  errorDiv.style.display = "none";
});

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function lowerCase() {
  const firstValue = passwordOne.value;
  console.log(firstValue);
  let counter = 0;

  for (let i = 0; i < firstValue.length; i++) {
    console.log(firstValue[i]);
    const isFirstValueLow = firstValue[i] === firstValue[i].toLowerCase();
    console.log(parseInt(firstValue[i]));
    const isANumber = firstValue[i] == parseInt(firstValue[i]);
    console.log(isFirstValueLow);
    console.log(isANumber);
    if (isFirstValueLow && !isANumber) {
      counter++;
      console.log(counter);
    }
  }

  const passwordComparison = JSON.parse(
    localStorage.getItem("passwordComparison")
  );
  console.log(passwordComparison);
  if (counter >= 1) {
    console.log("cccccccccccc");
    passwordComparison.lowCase = "yes";
  } else {
    console.log("cccccccccccc");
    passwordComparison.lowCase = "no";
  }
  console.log(passwordComparison);
  localStorage.setItem(
    "passwordComparison",
    JSON.stringify(passwordComparison)
  );
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function upperCase() {
  const firstValue = passwordOne.value;
  console.log(firstValue);
  let counter = 0;

  for (let i = 0; i < firstValue.length; i++) {
    console.log(firstValue[i]);
    const isFirstValueUpp = firstValue[i] === firstValue[i].toUpperCase();
    console.log(parseInt(firstValue[i]));
    const isANumber = firstValue[i] == parseInt(firstValue[i]);
    console.log(isFirstValueUpp);
    console.log(isANumber);
    if (isFirstValueUpp && !isANumber) {
      counter++;
      console.log(counter);
    }
  }

  const passwordComparison = JSON.parse(
    localStorage.getItem("passwordComparison")
  );
  if (counter >= 1) {
    console.log("ppppppppppp");
    passwordComparison.uppCase = "yes";
  } else {
    console.log("ppppppppppp");
    passwordComparison.uppCase = "no";
  }
  localStorage.setItem(
    "passwordComparison",
    JSON.stringify(passwordComparison)
  );
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function numberInIt() {
  const firstValue = passwordOne.value;
  console.log(firstValue);
  let counter = 0;

  for (let i = 0; i < firstValue.length; i++) {
    console.log(firstValue[i]);
    const isFirstValueNumber = firstValue[i] == parseInt(firstValue[i]);
    console.log(isFirstValueNumber);
    if (isFirstValueNumber) {
      counter++;
      console.log(counter);
    }
  }

  const passwordComparison = JSON.parse(
    localStorage.getItem("passwordComparison")
  );
  if (counter >= 1) {
    console.log("ppppppppppp");
    passwordComparison.numbers = "yes";
  } else {
    console.log("ppppppppppp");
    passwordComparison.numbers = "no";
  }
  localStorage.setItem(
    "passwordComparison",
    JSON.stringify(passwordComparison)
  );
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function tenCharacters() {
  const firstValue = passwordOne.value;
  console.log(firstValue);
  console.log(firstValue.length);
  const passwordComparison = JSON.parse(
    localStorage.getItem("passwordComparison")
  );
  if (firstValue.length >= 10) {
    passwordComparison.tenChar = "yes";
  } else {
    passwordComparison.tenChar = "no";
  }
  localStorage.setItem(
    "passwordComparison",
    JSON.stringify(passwordComparison)
  );
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function thePassword() {
  const firstValue = passwordOne.value;
  console.log(firstValue);
  const passwordComparison = JSON.parse(
    localStorage.getItem("passwordComparison")
  );
  console.log(passwordComparison);
  const theValues = Object.values(passwordComparison);
  console.log(theValues);
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
  if (passwordOne.value !== passwordTwo.value) {
    console.log("öööööööööö");
    passwordComparison.equal = "no;";
  } else {
    console.log("öööööööööö");
    passwordComparison.equal = "yes";
  }
  localStorage.setItem(
    "passwordComparison",
    JSON.stringify(passwordComparison)
  );
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function compareThePasswords(abc) {
  const inputValue = abc.target.value;
  console.log(abc.target.value);
  const isValid = /^[a-zA-Z0-9üöäßÜÖÄ]+$/.test(inputValue);

  if (isValid) {
    console.log("qqqqqqqqqq");
    isEqual();
    console.log("Iiiiiyeeeeesss");
    const passwordComparison = JSON.parse(
      localStorage.getItem("passwordComparison")
    );
    if (passwordComparison.equal === "yes") {
      console.log("aaaaaaaaaaa");
      lowerCase();
      console.log("Iiiiiyeeeeesss");
      upperCase();
      console.log("Iiiiiyeeeeesss");
      numberInIt();
      console.log("Iiiiiyeeeeesss");
      tenCharacters();
      console.log("Iiiiiyeeeeesss");
      thePassword();
      console.log("Iiiiiyeeeeesss");
    }
  } else if (abc.target.value !== "") {
    console.log("fffffffffffffff");
    errorDiv.style.display = "block";
  } else if (abc.target.value === "") {
    console.log("iiiiiiiiiiiiiiii");
    initialComparison();
  }
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

passwordOne.addEventListener("input", function (event) {
  console.log("sssssssssssssssss");
  compareThePasswords(event);
  console.log("yyyyyyyyyy");
  renderState();
});

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

passwordTwo.addEventListener("input", function (event) {
  console.log("sssssssssssssssss");
  compareThePasswords(event);
  console.log("yyyyyyyyyy");
  renderState();
});

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

passwordButton.addEventListener("click", function (event) {
  const formState = JSON.parse(localStorage.getItem("formState"));
  if (passwordOne.type === "password") {
    console.log("jena");
    formState.buttonText = "Hide Passwords";
    formState.inputType = "text";
  } else {
    console.log("deter");
    formState.buttonText = "Show Passwords";
    formState.inputType = "password";
  }
  localStorage.setItem("formState", JSON.stringify(formState));
  renderState();
});
