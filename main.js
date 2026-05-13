const form = document.querySelector(".contact_form");
const error_msg = document.getElementById("error_message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  error_msg.textContent = "";

  const userNameInput = document.getElementById("userName");
  const lastnameInput = document.getElementById("lastname");
  const emailInput = document.getElementById("email");
  const query = document.querySelector("input[name='query']:checked");
  const messageInput = document.getElementById("text");
  const termsInput = document.getElementById("terms");

  const userName = userNameInput.value.trim();
  const lastname = lastnameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  const terms = termsInput.checked;

  clearError(userNameInput);
  clearError(lastnameInput);
  clearError(emailInput);
  clearError(messageInput);

  // query ? query.classList.remove("error_input") :

  if (userName.length < 2 || userName.length > 15) {
    errorInput(userNameInput);
    return errorHandler("Name is not valid");
  }
  if (lastname.length < 4 || lastname.length > 20) {
    errorInput(lastnameInput);
    return errorHandler("Lastname is not valid");
  }
  if (email.length < 8 || email.length > 30) {
    errorInput(emailInput);
    return errorHandler("Email is not valid");
  }

  if (!query) {
    // errorInput(query);
    return errorHandler("Please select one of the provided options");
  }
  if (message.length < 10 || message.length > 100) {
    errorInput(messageInput);
    return errorHandler("Please enter at least 10 words in the box");
  }
  if (!terms) {
    // errorInput(termsInput);
    return errorHandler("please read our terms");
  }

  const user = {
    name: userName,
    lastname: lastname,
    mail: email,
    queryType: query.value,
    message: message,
    terms: terms,
  };
  console.log(user);
});

function errorHandler(errorText) {
  error_msg.textContent = errorText;
}

function errorInput(input) {
  input.classList.add("error_input");
}

function clearError(input) {
  input.classList.remove("error_input");
}
