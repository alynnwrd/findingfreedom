const userDesiredDegreeInput = document.getElementById('userDesiredDegree');
const userInstituteInput = document.getElementById('userInstitute');
const userCityIntstitutelInput = document.getElementById('userCityIntstitute');
const userCurrentEducation = document.getElementById('userCurrentEducation');
const userEdEndDateInput = document.getElementById('userEdEndDate');
const userDegreeCompletedInput = document.getElementById('userDegreeCompleted');


const postHeader = (review) =>
    fetch('/partials/header.hbs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDesiredDegreeInput, userInstituteInput, userCityIntstitutelInput, userCurrentEducation, userEdEndDateInput, userDegreeCompletedInputco),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log('Successful POST request:', data);
            return data;
        })
        .catch((error) =>{
            console.error('Error in POST request:', error);
        })

        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
        })