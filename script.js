document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username && password) {
      loginMessage.textContent = `Welcome, ${username}! (Fake login successful)`;
    } else {
      loginMessage.textContent = "Please enter a username and password.";
      loginMessage.style.color = "red";
    }
  });
});

