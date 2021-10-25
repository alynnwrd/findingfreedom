const signUp = document.getElementById("signUpBtn");

signUp.addEventListener("click", async function (event) {
    event.preventDefault();
    console.log("test");
    const newUserName = document.querySelector("#newUsername").value.trim();
    const password = document.querySelector("#createpwd").value.trim();
    console.log(newUserName, password);
    if (newUserName && password) {
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
  });
