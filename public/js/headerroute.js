const userFirstNameInput = document.getElementById('userFirst');
const userLastNameInput = document.getElementById('userLast');
const userEmailInput = document.getElementById('userEmail');
const userPhoneInput = document.getElementById('userPhone');
const userAddressInput = document.getElementById('userAddress');
const userCityInput = document.getElementById('userCity');
const userStateInput = document.getElementById('userState');
const userZipInput = document.getElementById('userZip');

const postHeader = (review) =>
    fetch('/partials/header.hbs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userfirst, userLast, userEmail, userPhone, userAddress, userCity, userState, userZip),
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