const cardNumber = document.getElementById("card-number");
const numberInp = document.getElementById("inp-number");

const cardName = document.getElementById("card-holder-name");
const nameInp = document.getElementById("inp-name");

const cardMonth = document.getElementById("month-input");
const monthInp = document.getElementById("inp-month");

const cardYear = document.getElementById("year-input");
const yearInp = document.getElementById("inp-year");

const cardCvc = document.getElementById("cvc-input");
const cvcInp = document.getElementById("inp-cvc");

const submit_Button = document.getElementById("confirm-btn");

const completed = document.getElementById(".thank");
const form = document.querySelector("form");

function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}

function setCardName(e) {
    cardName.innerText = e.target.value;
}

function setCardMonth(e) {
    cardMonth.innerText = e.target.value;
}

function setCardYear(e) {
    cardYear.innerText = e.target.value;
}

function setCardCvc(e) {
    cardCvc.innerText = e.target.value;
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g,"$&");
}

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);



submit_Button.addEventListener("click",(e) => {
    e.preventDefault();
    if(!nameInp.value){
        nameInp.classList.add("error");
        nameInp.parentElement.classList.add("error_message");
    } else{
        nameInp.classList.remove("error");
        nameInp.parentElement.classList.remove("error_message");
    }
    if(!numberInp.value){
        numberInp.classList.add("error");
        numberInp.parentElement.classList.add("error_message");
    } else{
        numberInp.classList.remove("error");
        numberInp.parentElement.classList.remove("error_message");
    }
    if(!monthInp.value){
        monthInp.classList.add("error");
        monthInp.parentElement.classList.add("error_message");
    } else{
        monthInp.classList.remove("error");
        monthInp.parentElement.classList.remove("error_message");
    }
    if(!yearInp.value){
        yearInp.classList.add("error");
        yearInp.parentElement.classList.add("error_message");
    } else{
        yearInp.classList.remove("error");
        yearInp.parentElement.classList.remove("error_message");
    }
    if(!cvcInp.value){
        cvcInp.classList.add("error");
        cvcInp.parentElement.classList.add("error_message");
    } else{
        cvcInp.classList.remove("error");
        cvcInp.parentElement.classList.remove("error_message");
    }
});
