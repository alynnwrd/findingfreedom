const logInBtn = document.getElementById("loginBtn");

logInBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  console.log("test");

  const userName = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();
console.log(userName, password);
  if (userName && password) {
    //problem
    console.log(userName, password);
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
});




