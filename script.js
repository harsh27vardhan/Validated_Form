const form = document.querySelector('form');
const contentContainer = document.querySelector(".content-container");

const username = document.querySelector("#username-input");
const usernameError = document.querySelector("#username-para");

const email = document.querySelector("#email-input");
const emailError = document.querySelector("#email-para");

const password = document.querySelector("#password-input");
const passwordError = document.querySelector("#pass-para");

const confirmPass = document.querySelector("#confirm-password-input");
const confirmPassError = document.querySelector("#confirm-pass-para");

// usernameError.innerText = "Username is required";
const alphanumericPattern = /^[A-Za-z0-9]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\W)(?!.*\s).+$/;

let passVisible = 0;
let confirmPassVisible = 0;

const visibleArr = document.getElementsByClassName("visibility");
visibleArr[0].addEventListener("click",()=>{
    if(passVisible === 0){
        password.setAttribute("type","text");
        passVisible = 1;
    }
    else{
        password.setAttribute("type","password");
        passVisible = 0;
    }
});
visibleArr[1].addEventListener("click",()=>{
    if(confirmPassVisible === 0){
        confirmPass.setAttribute("type","text");
        confirmPassVisible = 1;
    }
    else{
        confirmPass.setAttribute("type","password");
        confirmPassVisible = 0;
    }
});

function handleSubmit(event){

    usernameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmPassError.innerText = "";

    //Username
    if(username.value.length === 0){
        usernameError.innerText = "Username is required";
    }
    else if(username.value.toLowerCase() === "username"){
        usernameError.innerText = "Username can't be taken";
    }
    else if(!alphanumericPattern.test(username.value)){
        usernameError.innerText = "Username must be alphanumeric";
    }
    else if(username.value.length < 5 || username.value.length > 12){
        usernameError.innerText = "Username should have the length in between 5 to 12 characters."
    }
    //Email
    if(email.value.length === 0){
        emailError.innerText = "email is required";
    }
    //Password
    if(password.value.length === 0){
        passwordError.innerText = "password is required";
    }
    else if(password.value.length < 8 || password.value.length > 24){
        passwordError.innerText = "Password should have the length in between 5 to 12 characters."
    }
    else if(!passwordPattern.test(password.value)){
        passwordError.innerText = "Password should not contains any space and must have altest one uppercase and one smallcase character";
    }
    else if(!alphanumericPattern.test(password.value)){
        password.innerText = "Password must be alphanumeric";
    }

    //Confirm Password
    if(confirmPass.value.length === 0){
        confirmPassError.innerText = "Confirm Password is required";
    }
    else if(password.value !== confirmPass.value){
        confirmPassError.innerText = "Confirm Password must match Password";
    }
    else{
        console.log("Form is Submitted!");
        console.log("Username:",username.value ,"\nEmail:", email.value ,"\nPassword:","\nConfirm Password:", password.value , confirmPass.value)
        contentContainer.innerText = `Username: ${username.value} ,\nEmail: ${email.value} ,\nPassword: ${password.value},\nConfirm Password:${confirmPass.value}`;
    }

    event.preventDefault();
    
}

form.addEventListener('submit', handleSubmit);