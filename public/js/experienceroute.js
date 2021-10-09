const reviewForm = document.getElementById("review");

reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
        const userJobTitleInput = document.getElementById('userJobTitle').value;
        const userEmployerInput = document.getElementById('userEmployer').value;
        const userStartDateInput = document.getElementById('userStartDate').value;
        const userStartDateInput = document.getElementById('userEdStartDate').value;
        const userEndDateInput = document.getElementById('userEndDate').value;
        const userGoodContactInput = document.getElementById('userGoodContact').value;
    fetch("/api/experience", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userJobTitleInput, 
                userEmployerInput, 
                userStartDateInput, 
                userCurrentEmployerInput, 
                userEndDateInput, 
                userGoodContactInput
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