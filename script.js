document.addEventListener("DOMContentLoaded", () => {
  // Load existing accounts or create empty object
  const getAccounts = () => JSON.parse(localStorage.getItem("accounts") || "{}");

  const saveAccounts = (accounts) => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  };

  // REGISTER
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("regUser").value.trim();
      const password = document.getElementById("regPass").value;

      const accounts = getAccounts();

      if (!username || !password) {
        document.getElementById("registerMsg").textContent = "Fill in all fields.";
        return;
      }

      if (accounts[username]) {
        document.getElementById("registerMsg").textContent = "Username already exists.";
      } else {
        accounts[username] = { password };
        saveAccounts(accounts);
        document.getElementById("registerMsg").textContent = "Account created!";
      }
    });
  }

  // LOGIN
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("loginUser").value.trim();
      const password = document.getElementById("loginPass").value;

      const accounts = getAccounts();

      if (accounts[username] && accounts[username].password === password) {
        document.getElementById("loginMsg").textContent = `Welcome, ${username}!`;
        localStorage.setItem("loggedInUser", username);
      } else {
        document.getElementById("loginMsg").textContent = "Incorrect login.";
      }
    });
  }

  // PROFILES LIST
  const profilesList = document.getElementById("profilesList");
  if (profilesList) {
    const accounts = getAccounts();
    if (Object.keys(accounts).length === 0) {
      profilesList.innerHTML = "<li>No accounts found.</li>";
    } else {
      for (let user in accounts) {
        const li = document.createElement("li");
        li.textContent = user;
        profilesList.appendChild(li);
      }
    }
  }
});
