import { signInUser } from "./firebase.js";

// Get element
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get data from form
    const emailValue = email.value;
    const passwordValue = password.value;

    // Sign in user
    await signInUser(emailValue, passwordValue);
});