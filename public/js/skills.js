
const reviewForm = document.getElementById("skill-btn");

reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userSkillsInput = document.getElementById('skill').value;
    const skillDescriptionInput = document.getElementById('skillDisc').value;

            
fetch("/api/skills", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        },
    body: JSON.stringify({
<<<<<<< HEAD:public/js/skills.js
        userSkillsInput
        skillDescriptionInput
=======
        userProfessionalSkillsInput, 
        userPersonalSkillsInput, 
>>>>>>> 8b99faf5be67d9a0c4eec78796cabdb7b4202d0b:public/js/skillsroute.js
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