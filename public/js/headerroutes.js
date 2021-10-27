const header = document.getElementById("review");

header.addEventListener("click", async function (e) {
  e.preventDefault();
  console.log("test");
  const userFirstNameInput = document.getElementById("userFirst").value;
  const userLastNameInput = document.getElementById("userLast").value;
  const userEmailInput = document.getElementById("userEmail").value;
  const userPhoneInput = document.getElementById("userPhone").value;
  const userAddressInput = document.getElementById("userAddress").value;
  const userCityInput = document.getElementById("userCity").value;
  const userStateInput = document.getElementById("userState").value;
  const userZipInput = document.getElementById("userZip").value;

  console.log(
    userFirstNameInput,
    userLastNameInput,
    userEmailInput,
    userPhoneInput,
    userAddressInput,
    userCityInput,
    userStateInput
  );
  console.log("test");

  fetch("/api/header", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userFirstNameInput,
      userLastNameInput,
      userEmailInput,
      userPhoneInput,
      userAddressInput,
      userCityInput,
      userStateInput,
      userZipInput
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log("Successful POST request:", data);
      return education();
      
    })
    .catch((error) => {
      console.log("Error in POST request:", error);
    });
});
function education() {
  document.location.href = "/api/education";
}
