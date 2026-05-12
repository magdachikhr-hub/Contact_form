const form = document.querySelector(".contact_form");
const error_msg = document.getElementById("error_message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  error_msg.textContent = "";

  const userName = document.getElementById("userName").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const query = document.querySelector("input[name='query']:checked");
  const message = document.getElementById("text").value.trim();
  const terms = document.getElementById("terms").checked;

  if (userName.length < 2 || userName.length > 15) {
    return errorHandler("Name is not valid");
  }
  if (lastname.length < 4 || lastname.length > 20) {
    return errorHandler("Lastname is not valid");
  }
  if (email.length < 8 || email.length > 30) {
    return errorHandler("Email is not valid");
  }

  if (!query) {
    return errorHandler("Please select one of the provided options");
  }
  if (message.length < 10 || message.length > 100) {
    return errorHandler("Please enter at least 10 words in the box");
  }
  if (!terms) {
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
