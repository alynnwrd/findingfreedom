const userFirstNameInput = document.getElementById('userFirst');
const userLastNameInput = document.getElementById('userLast');
const userEmailInput = document.getElementById('userEmail');
const userPhoneInput = document.getElementById('userPhone');
const userAddressInput = document.getElementById('userAddress');
const userCityInput = document.getElementById('userCity');
const userStateInput = document.getElementById('userState');
const userZipInput = document.getElementById('userZip');
const postHeader = (review) =>
    fetch('/api/header', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userFirstNameInput, userLastNameInput, userEmailInput, userPhoneInput, userAddressInput, userCityInput, userStateInput, userZipInput),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            console.log('Successful POST request:', data);
            return data;
        })
        .catch((error) =>{
            console.error('Error in POST request:', error);
        })
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
        })