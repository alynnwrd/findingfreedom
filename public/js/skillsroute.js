

const reviewForm = document.getElementById("review");

reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userProfessionalSkillsInput = document.getElementById('userProfessionalSkills').value;
    const userPersonalSkillsInput = document.getElementById('userPersonalSkills').value;
            
fetch("/api/skills", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        },
    body: JSON.stringify({
        userProfessionalSkillsInput, 
        userPersonalSkillsInput, 
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