const passwordOptions = ['password', 'text'];

function handleFloatingLabel() {
   
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
    //handlePasswordSwitcher();
});

