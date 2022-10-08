const passwordOptions = ['password', 'text'];

let email = {}, password = {}, signInButton;

function getDOMElements(){
  

  password.input = document.querySelector('.js-password-input')
  password.field = document.querySelector('.js-password-field')
  password.errorMessage = password.field.querySelector('.js-password-error-message')

  email.input = document.querySelector('.js-email-input')
  email.field = document.querySelector('.js-email-field')
  email.errorMessage = email.field.querySelector('.js-email-error-message')

  signInButton = document.querySelector('.js-sign-in-button')

  enableListeners();
}

function doubleCheckEmailAddress(){
  if (isValidEmailAddress(email.input.value) == true){
    email.input.removeEventListener('input', doubleCheckEmailAddress)
    removeErrors("email");
  }
  else{
    if (isEmpty(email.input.value) == true){
      email.errorMessage.innerText = "This field is required";
    }
    else{
      email.errorMessage.innerText = "Invalid emailaddress";
    }
  }
}

function doubleCheckPassword(){
  if (isValidPassword(password.input.value) == true){
    password.input.removeEventListener('input', doubleCheckPassword)
    removeErrors("password");
  }
  else{
    if (isEmpty(password.input.value) == true){
      password.errorMessage.innerText = "This field is required";
    }
    else{
      password.errorMessage.innerText = "Invalid password";
    }
  }
}

function enableListeners(){

  email.input.addEventListener('blur', function(){

    if (isValidEmailAddress(email.input.value) == false){

      addErrors("email");

      if (isEmpty(email.input.value) == true){
        email.errorMessage.innerText = "This field is required";
      }
      else{
        email.errorMessage.innerText = "Invalid emailaddress";
      }
      email.input.addEventListener('input', doubleCheckEmailAddress);
    }
    else{
      removeErrors("email");
    }
  });

  password.input.addEventListener('blur', function(){
    if (isValidPassword(password.input.value) == false ){
      addErrors("password");

      if (isEmpty(password.input.value) == true){
        password.errorMessage.innerText = "This field is required";
      }
      else{
        password.errorMessage.innerText = "Invalid password";
      }
      password.input.addEventListener('input', doubleCheckPassword);
    }
    else{
      removeErrors("password");
    }

  });

  signInButton.addEventListener('click', function(e){
    e.preventDefault();
    if (isValidEmailAddress(email.input.value) == true && isValidPassword(password.input.value) == true){
      removeErrors("email");
      removeErrors("password");
      console.log("email: " + email.input.value + "\n" + "password: " + password.input.value)
    }
    else{
      if (isValidEmailAddress(email.input.value) == false){
      addErrors("email");
      if (isEmpty(email.input.value) == true){
        email.errorMessage.innerText = "This field is required";
      }
      else{
        email.errorMessage.innerText = "Invalid emailaddress";
      }
      email.input.addEventListener('input', doubleCheckEmailAddress);
    }
    else{
      removeErrors("email");
    }

    if (isValidPassword(password.input.value) == false ){
      addErrors("password");

      if (isEmpty(password.input.value) == true){
        password.errorMessage.innerText = "This field is required";
      }
      else{
        password.errorMessage.innerText = "Invalid password";
      }
      password.input.addEventListener('input', doubleCheckPassword);
    }
    else{
      removeErrors("password");
    }
  }
  })

}

function addErrors(field){
  if (field == "password"){ 
    password.field.className += (" has-error"); 
  }

  if(field == "email"){
    email.field.className += (" has-error"); 
  }
}

function removeErrors(field){
  if (field == "password"){ 
    password.field.className -= (" has-error"); 
    password.errorMessage.innerText = "";
  }

  if(field == "email"){
    email.field.className -= (" has-error"); 
    email.errorMessage.innerText = "";
  }
}

const isValidEmailAddress = function(emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isValidPassword = function(password) {
  // Basis manier om e-mailadres te checken.
  if (password.length > 1){
    return true
  }
  else{
    return false
  }
};

const isEmpty = function(fieldValue) {
  return !fieldValue || !fieldValue.length;
};

function handleFloatingLabel() {
   const emailInput = document.querySelector(".js-email-input");
   const emailLabel = document.querySelector(".js-email-label");

   const passInput = document.querySelector(".js-password-input");
   const passLabel = document.querySelector(".js-password-label");

   emailInput.addEventListener('blur', function(){

    if (emailInput.value != "" && emailLabel.classList.contains("is-floating") == false){
      emailLabel.className += " is-floating"
    }
    else if(emailInput.value == "" && emailLabel.classList.contains("is-floating")){
        emailLabel.classList.remove("is-floating")
        console.log("byeee")
    }
   })

   passInput.addEventListener('blur', function(){

    if (passInput.value != "" && passLabel.classList.contains("is-floating") == false){
      passLabel.className += " is-floating"
    }
    else if(passInput.value == "" && passLabel.classList.contains("is-floating")){
      passLabel.classList.remove("is-floating")
        console.log("byeee")
    }
   })
}



/* function handlePasswordSwitcher() {
  var x = document.getElementById('password');
  if (x.type === 'text') {
    x.type = 'password';
  } else {
    x.type = 'text';
  }
} */

function handlePasswordSwitcher() {
    var passwordInput = document.getElementById('password');
    var passwordToggle = document.getElementById('togglePassword');
    passwordToggle.addEventListener('change', function () {
        passwordInput.type = passwordOptions[+this.checked];
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    //getDOMElements();
    //handlePasswordSwitcher();
});

