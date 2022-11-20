import { signInUser, createUser } from "./firebase.js";

// Get element login
const formLogin = document.querySelector("#form-login");
const emailLogin = document.querySelector("#email-login");
const passwordLogin = document.querySelector("#password-login");

// Get element signup
const formSignUp = document.querySelector("#form-signup");
const emailSignUp = document.querySelector("#email-signup");
const passwordSignUp = document.querySelector("#password-signup");


formLogin.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get data from form
    const emailValue = emailLogin.value;
    const passwordValue = passwordLogin.value;

    // Sign in user
    await signInUser(emailValue, passwordValue);
});

