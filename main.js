const form = document.querySelector(".contact_form").value.trim();
const error_msg = document.getElementById("error_message").value.trim();

form.addEventListener("submit", (event) => {
  e.preventDefault();
  error_msg.textContent = "";

  const userName = document.getElementById("userName");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const query = document.querySelector("input[name='query']:checked");
  const message = document.getElementById("text");
  const terms = document.getElementById("terms");
});
