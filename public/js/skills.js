const skillForm = document.getElementById("skill-btn");

skillForm.addEventListener("click", async function(e) {
    e.preventDefault();
    const userSkillsInput = document.getElementById('skill').value;
    const skillDescriptionInput = document.getElementById('skillDisc').value;

console.log('line:8', userSkillsInput, skillDescriptionInput);

fetch("/api/skills", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        },
    body: JSON.stringify({
<<<<<<< HEAD
        userSkillsInput
        skillDescriptionInput
        userProfessionalSkillsInput, 
        userPersonalSkillsInput, 
=======
        userSkillsInput,
        skillDescriptionInput
>>>>>>> 72a0c36222056c854cc858fe0990d50bbe1a4cf0
    }),
})    
.then((res) => res.json())
.then((data) => {
    console.log(data);
    console.log("Successful POST request:", data);
    })
.catch((error) => {
    console.error("Error in POST request:", error);
    });
});