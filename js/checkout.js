const form = document.querySelector("#checkoutForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const subject = document.querySelector("#city");
const subjectError = document.querySelector("#cityError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phoneError");

const street = document.querySelector("#street");
const streetError = document.querySelector("#streetError");

const zipCode = document.querySelector("#zipCode");
const zipCodeError = document.querySelector("#zipCodeError");

const validationPass = document.querySelector(".validationPass");

function validateForm(event) {
    event.preventDefault();

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(name.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (checkLength(street.value, 0) === true) {
        streetError.style.display = "none";
    } else {
        streetError.style.display = "block";
    }

    if (checkLength(zipCode.value, 0) === true) {
        zipCodeError.style.display = "none";
    } else {
        zipCodeError.style.display = "block";
    }

    if (checkLength(city.value, 0) === true) {
        cityError.style.display = "none";
    } else {
        cityError.style.display = "block";
    }

    if (checkLength(phone.value, 7) === true) {
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "block";
    }

    if (emailError.style.display === "none" && nameError.style.display === "none" && 
        subjectError.style.display === "none" && phoneError.style.display === "none" 
        && streetError.style.display === "none" && zipCodeError.style.display === "none") {
        
            validationPass.style.display = "block";
    }
};

form.addEventListener("submit", validateForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    }else {
        return false;
    }
}