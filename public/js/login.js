const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    //problem
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};
const signupFormHandler = async (event) => {
  event.preventDefault();

  const newUserName = document.querySelector("#newUsername").value.trim();
  const password = document.querySelector("#createpwd").value.trim();

  if (email && password) {
    //problem
    const response = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({ newUserName, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document.querySelector("#loginBtn").addEventListener("submit", loginFormHandler);

document
  .querySelector("#signupBtn")
  .addEventListener("submit", loginFormHandler);
