const reviewForm = document.getElementById("education-btn");

reviewForm.addEventListener("click", (e) => {
  e.preventDefault();
  const userDesiredDegreeInput =
    document.getElementById("userDesiredDegree").value;
  const userInstituteInput = document.getElementById("userInstitute").value;
  const userLocationInput = document.getElementById("userLocation").value;
  const userEdStartDateInput = document.getElementById("userEdStartDate").value;
  //const userCurrentEducation = document.getElementById('userCurrentEducation').value;
  const userEdEndDateInput = document.getElementById("userEdEndDate").value;
  // const userDegreeCompletedInput = document.getElementById('userDegreeCompleted').value;
  fetch("/api/education", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userDesiredDegreeInput,
      userInstituteInput,
      userLocationInput,
      userEdStartDateInput,
      userEdEndDateInput,
      // userDegreeCompletedInput
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
