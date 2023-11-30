const password = document.querySelector("#pwd");
const confirmField = document.querySelector("#confirm");
const passwordLabel = document.querySelector('label[for="pwd"')

const pwdError = document.createElement("div");
pwdError.textContent = "* Passwords do not match";
pwdError.style.cssText = "color: red; font-size: 15px;"

password.addEventListener('input', () => {
    if (password.value != confirmField.value) {
        password.setCustomValidity("Invalid field.");
        confirmField.setCustomValidity("Invalid field.");
        passwordLabel.appendChild(pwdError);
        passwordLabel.style.cssText = "padding-bottom: 0px;";
    }
    else {
        password.setCustomValidity("");
        confirmField.setCustomValidity("");
        passwordLabel.removeChild(pwdError);
        passwordLabel.style.cssText = "padding-bottom: 20px;";
    }
})

confirmField.addEventListener('input', () => {
    if (password.value != confirmField.value) {
        password.setCustomValidity("Invalid field.");
        confirmField.setCustomValidity("Invalid field.");
        passwordLabel.appendChild(pwdError);
        passwordLabel.style.cssText = "padding-bottom: 0px;";
    }
    else {
        password.setCustomValidity("");
        confirmField.setCustomValidity("");
        passwordLabel.removeChild(pwdError);
        passwordLabel.style.cssText = "padding-bottom: 20px;";
    }
})