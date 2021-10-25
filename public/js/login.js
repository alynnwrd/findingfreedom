const logInBtn = document.getElementById("loginBtn");

logInBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  console.log("test");

  const email = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    //problem
    const response = await fetch("api/users/login", {
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
});




