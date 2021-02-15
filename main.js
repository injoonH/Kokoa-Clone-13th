const passwordInput = document.querySelector(".login-password");
const loginSumbit = document.querySelector(".login-submit");

passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length >= 4)
        loginSumbit.classList.add("login-submit-activated");
    else loginSumbit.classList.remove("login-submit-activated");
});
