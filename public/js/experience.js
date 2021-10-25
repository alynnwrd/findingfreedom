const experienceForm = document.getElementById("experienceBtn");

experienceForm.addEventListener("click", async function(e) {
  e.preventDefault();
  const userJobTitleInput = document.getElementById("userJobTitle").value;
  const userEmployerInput = document.getElementById("userEmployer").value;
  const userCityInput = document.getElementById("userCity").value;
  const userStateInput = document.getElementById("userState").value;
  const userStartDateInput = document.getElementById("userStartDate").value;
  const userEndDateInput = document.getElementById("userEndDate").value;
  console.log("job title", userJobTitleInput);
  fetch("/api/experience", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userJobTitleInput,
      userEmployerInput,
      userCityInput,
      userStateInput,
      userStartDateInput,
      userEndDateInput,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log("Successful POST request:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error in POST request:", error);
    });
});
/*function skills() {
  document.location.href = "/api/skills";
}*/
